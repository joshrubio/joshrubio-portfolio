'use client'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react"

import Modal from "./Modal"
import { format } from "@/i18n/dictionaries"
import { useLocale } from "@/i18n/LocaleProvider"
import {
	autoTranslate,
	dismissPrompt,
	getTargetLanguage,
	introSeen,
	markIntroSeen,
	promptDismissed,
	setAutoTranslate,
	setPreferredLanguage,
} from "@/i18n/preferences"

// Translator API built into the browser (Chrome 138+ and desktop Edge). It translates on the device,
// so the page text is not sent to any server. Where it is missing, the page opens in Google Translate.
interface TranslatorInstance {
	translate(text: string): Promise<string>
	destroy?(): void
}
interface TranslatorStatic {
	availability(options: { sourceLanguage: string; targetLanguage: string }): Promise<string>
	create(options: { sourceLanguage: string; targetLanguage: string; monitor?(m: EventTarget): void }): Promise<TranslatorInstance>
}
const getTranslator = () => (globalThis as unknown as { Translator?: TranslatorStatic }).Translator

const CONCURRENCY = 3
const SKIP = "script,style,noscript,svg,code,pre,[data-no-translate]"

function collectTextNodes(root: HTMLElement): Text[] {
	const nodes: Text[] = []
	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			const parent = node.parentElement
			if (!parent || parent.closest(SKIP)) return NodeFilter.FILTER_REJECT
			return /[A-Za-zÀ-ɏ]/.test(node.nodeValue ?? "") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
		},
	})
	for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n as Text)
	return nodes
}

type Phase = "idle" | "downloading" | "working" | "done" | "error"

interface TranslateContextValue {
	/** There is something to translate: the page is in a different language than the visitor's. */
	available: boolean
	phase: Phase
	progress: { done: number; total: number }
	/** Translates the page, or brings the original back when it is already translated. */
	toggle: () => void
}

const TranslateContext = createContext<TranslateContextValue>({
	available: false,
	phase: "idle",
	progress: { done: 0, total: 0 },
	toggle: () => {},
})

export const useTranslate = () => useContext(TranslateContext)

type ModalKind = null | "intro" | "prompt"

/**
 * Translating the content of the current page into the visitor's language.
 * - The navbar button translates (first time: with an explanatory module) and restores the original.
 * - The browser remembers the language. When a page is in another language, a module offers to translate it,
 *   so no extra permanent button is needed. "Not now" silences the offer for the visit.
 */
export default function TranslateProvider({ contentLang, children }: { contentLang: string; children: ReactNode }) {
	const { lang, t } = useLocale()
	const [target, setTarget] = useState<string | null>(null)
	const [phase, setPhase] = useState<Phase>("idle")
	const [progress, setProgress] = useState({ done: 0, total: 0 })
	const [modal, setModal] = useState<ModalKind>(null)
	const [always, setAlways] = useState(false)
	const state = useRef<{ nodes: Text[]; original: string[] } | null>(null)
	const busy = useRef(false)

	const available = target !== null && target !== contentLang

	const nameOf = useCallback(
		(code: string) => {
			try {
				return new Intl.DisplayNames([lang], { type: "language" }).of(code) ?? code
			} catch {
				return code
			}
		},
		[lang],
	)

	const restore = useCallback(() => {
		const saved = state.current
		saved?.nodes.forEach((n, i) => {
			n.nodeValue = saved.original[i]
		})
		state.current = null
	}, [])

	const run = useCallback(async (to?: string) => {
		const dest = to ?? target
		if (!dest || busy.current) return
		const googleHref = `https://translate.google.com/translate?sl=${contentLang}&tl=${dest}&u=${encodeURIComponent(window.location.href)}`
		const Translator = getTranslator()
		const root = document.getElementById("page-content")
		if (!Translator || !root) {
			window.location.href = googleHref
			return
		}
		busy.current = true
		try {
			const options = { sourceLanguage: contentLang, targetLanguage: dest }
			if ((await Translator.availability(options)) === "unavailable") {
				window.location.href = googleHref
				return
			}
			setPhase("downloading")
			const translator = await Translator.create({
				...options,
				monitor(m) {
					m.addEventListener("downloadprogress", () => setPhase("downloading"))
				},
			})
			const nodes = collectTextNodes(root)
			const original = nodes.map((n) => n.nodeValue ?? "")
			state.current = { nodes, original }
			setProgress({ done: 0, total: nodes.length })
			setPhase("working")
			let next = 0
			let done = 0
			const worker = async () => {
				while (next < nodes.length) {
					const i = next++
					const text = original[i]
					const lead = text.match(/^\s*/)?.[0] ?? ""
					const trail = text.match(/\s*$/)?.[0] ?? ""
					nodes[i].nodeValue = lead + (await translator.translate(text.trim())) + trail
					done++
					if (done % 5 === 0 || done === nodes.length) setProgress({ done, total: nodes.length })
				}
			}
			await Promise.all(Array.from({ length: CONCURRENCY }, worker))
			translator.destroy?.()
			setPhase("done")
		} catch {
			restore()
			setPhase("error")
		} finally {
			busy.current = false
		}
	}, [target, contentLang, restore])

	// Decide what to do when the page opens: nothing, translate by itself, or offer to translate.
	useEffect(() => {
		const language = getTargetLanguage()
		setTarget(language)
		if (language === contentLang) return
		if (autoTranslate()) void run(language)
		else if (!promptDismissed()) setModal("prompt")
		// Only when the page (its content language) changes; run is stable enough for this decision.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [contentLang])

	const toggle = useCallback(() => {
		if (!target) return
		if (phase === "done") {
			restore()
			setPhase("idle")
			return
		}
		if (phase === "working" || phase === "downloading") return
		setPreferredLanguage(target)
		if (!introSeen() && getTranslator()) setModal("intro")
		void run()
	}, [target, phase, restore, run])

	const value = useMemo(() => ({ available, phase, progress, toggle }), [available, phase, progress, toggle])
	const working = phase === "working" || phase === "downloading"
	const status =
		phase === "downloading" ? t.translate.downloading
		: phase === "working" ? format(t.translate.working, progress)
		: phase === "error" ? t.translate.error
		: ""

	return (
		<TranslateContext.Provider value={value}>
			{children}
			<span className="visually-hidden" role="status" aria-live="polite">{status}</span>

			{modal === "intro" && target && (
				<Modal
					title={t.translate.introTitle}
					onDismiss={() => {
						markIntroSeen()
						setModal(null)
					}}
					actions={
						<>
							<button
								type="button"
								data-autofocus
								className="btn btn-gradient"
								onClick={() => {
									markIntroSeen()
									setModal(null)
								}}
							>
								{t.translate.introOk}
							</button>
							{phase === "done" && (
								<button
									type="button"
									className="btn btn-outline-secondary"
									onClick={() => {
										markIntroSeen()
										setModal(null)
										toggle()
									}}
								>
									{t.translate.showOriginal}
								</button>
							)}
						</>
					}
				>
					<p className="text-300 mb-3">{format(t.translate.introBody, { language: nameOf(target) })}</p>
					<p className="mb-0">{t.translate.introRemember}</p>
					{working && <p className="fs-7 text-300 mt-3 mb-0">{status}</p>}
					{phase === "error" && <p className="fs-7 text-danger mt-3 mb-0">{status}</p>}
				</Modal>
			)}

			{modal === "prompt" && target && (
				<Modal
					title={format(t.translate.promptTitle, { content: nameOf(contentLang) })}
					onDismiss={() => {
						dismissPrompt()
						setModal(null)
					}}
					actions={
						<>
							<button
								type="button"
								data-autofocus
								className="btn btn-gradient"
								onClick={() => {
									setAutoTranslate(always)
									setModal(null)
									void run()
								}}
							>
								{t.translate.promptYes}
							</button>
							<button
								type="button"
								className="btn btn-outline-secondary"
								onClick={() => {
									dismissPrompt()
									setModal(null)
								}}
							>
								{t.translate.promptNo}
							</button>
						</>
					}
				>
					<p className="text-300 mb-3">{format(t.translate.promptBody, { language: nameOf(target) })}</p>
					<label className="d-flex align-items-start gap-2 fs-7 mb-0">
						<input type="checkbox" className="form-check-input mt-1" checked={always} onChange={(e) => setAlways(e.target.checked)} />
						<span>{t.translate.promptAuto}</span>
					</label>
				</Modal>
			)}
		</TranslateContext.Provider>
	)
}
