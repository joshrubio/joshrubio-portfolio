"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react"

import { Button } from "@/components/atoms/Button"
import { Text } from "@/components/atoms/Text"
import { CheckboxField } from "@/components/molecules/CheckboxField"
import { Dialog } from "@/components/molecules/Dialog"
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

interface TranslatorInstance {
	translate(text: string): Promise<string>
	destroy?(): void
}

interface TranslatorStatic {
	availability(options: { sourceLanguage: string; targetLanguage: string }): Promise<string>
	create(options: { sourceLanguage: string; targetLanguage: string; monitor?(monitor: EventTarget): void }): Promise<TranslatorInstance>
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
	for (let node = walker.nextNode(); node; node = walker.nextNode()) nodes.push(node as Text)
	return nodes
}

type Phase = "idle" | "downloading" | "working" | "done" | "error"

interface TranslateContextValue {
	available: boolean
	phase: Phase
	progress: { done: number; total: number }
	toggle: () => void
}

const TranslateContext = createContext<TranslateContextValue>({
	available: false,
	phase: "idle",
	progress: { done: 0, total: 0 },
	toggle: () => {},
})

export const useTranslate = () => useContext(TranslateContext)

type DialogKind = null | "intro" | "prompt"

interface TranslateProviderProps {
	contentLang: string
	enabled: boolean
	routeKey: string
	children: ReactNode
}

export function TranslateProvider({ contentLang, enabled, routeKey, children }: TranslateProviderProps) {
	const { lang, t } = useLocale()
	const [target, setTarget] = useState<string | null>(null)
	const [phase, setPhase] = useState<Phase>("idle")
	const [progress, setProgress] = useState({ done: 0, total: 0 })
	const [dialog, setDialog] = useState<DialogKind>(null)
	const [always, setAlways] = useState(false)
	const state = useRef<{ nodes: Text[]; original: string[] } | null>(null)
	const busy = useRef(false)
	const generation = useRef(0)

	const available = enabled && target !== null && target !== contentLang

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
		saved?.nodes.forEach((node, index) => {
			node.nodeValue = saved.original[index]
		})
		state.current = null
	}, [])

	const run = useCallback(
		async (to?: string) => {
			const destination = to ?? target
			if (!destination || busy.current) return
			const googleHref = `https://translate.google.com/translate?sl=${contentLang}&tl=${destination}&u=${encodeURIComponent(window.location.href)}`
			const Translator = getTranslator()
			const root = document.getElementById("page-content")
			if (!Translator || !root) {
				window.location.href = googleHref
				return
			}
			busy.current = true
			const current = generation.current
			try {
				const options = { sourceLanguage: contentLang, targetLanguage: destination }
				if ((await Translator.availability(options)) === "unavailable") {
					window.location.href = googleHref
					return
				}
				setPhase("downloading")
				const translator = await Translator.create({
					...options,
					monitor(monitor) {
						monitor.addEventListener("downloadprogress", () => setPhase("downloading"))
					},
				})
				if (generation.current !== current) {
					translator.destroy?.()
					return
				}
				const nodes = collectTextNodes(root)
				const original = nodes.map((node) => node.nodeValue ?? "")
				state.current = { nodes, original }
				setProgress({ done: 0, total: nodes.length })
				setPhase("working")
				let next = 0
				let done = 0
				const worker = async () => {
					while (next < nodes.length && generation.current === current) {
						const index = next++
						const text = original[index]
						const lead = text.match(/^\s*/)?.[0] ?? ""
						const trail = text.match(/\s*$/)?.[0] ?? ""
						nodes[index].nodeValue = lead + (await translator.translate(text.trim())) + trail
						done++
						if (done % 5 === 0 || done === nodes.length) setProgress({ done, total: nodes.length })
					}
				}
				await Promise.all(Array.from({ length: CONCURRENCY }, worker))
				translator.destroy?.()
				if (generation.current === current) setPhase("done")
			} catch {
				if (generation.current === current) restore()
				if (generation.current === current) setPhase("error")
			} finally {
				if (generation.current === current) busy.current = false
			}
		},
		[target, contentLang, restore],
	)

	useEffect(() => {
		generation.current += 1
		busy.current = false
		state.current = null
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setPhase("idle")
		setDialog(null)
		if (!enabled) return
		const language = getTargetLanguage()
		setTarget(language)
		if (language === contentLang) return
		if (autoTranslate()) void run(language)
		else if (!promptDismissed()) setDialog("prompt")
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [contentLang, enabled, routeKey])

	const toggle = useCallback(() => {
		if (!target) return
		if (phase === "done") {
			restore()
			setPhase("idle")
			return
		}
		if (phase === "working" || phase === "downloading") return
		setPreferredLanguage(target)
		if (!introSeen() && getTranslator()) setDialog("intro")
		void run()
	}, [target, phase, restore, run])

	const value = useMemo(() => ({ available, phase, progress, toggle }), [available, phase, progress, toggle])
	const working = phase === "working" || phase === "downloading"
	const status =
		phase === "downloading" ? t.translate.downloading : phase === "working" ? format(t.translate.working, progress) : phase === "error" ? t.translate.error : ""

	const closeIntro = () => {
		markIntroSeen()
		setDialog(null)
	}
	const closePrompt = () => {
		dismissPrompt()
		setDialog(null)
	}

	return (
		<TranslateContext.Provider value={value}>
			{children}
			<span className="sr-only" role="status" aria-live="polite">
				{status}
			</span>

			{dialog === "intro" && target ? (
				<Dialog
					title={t.translate.introTitle}
					onDismiss={closeIntro}
					actions={
						<>
							<Button data-autofocus onClick={closeIntro}>
								{t.translate.introOk}
							</Button>
							{phase === "done" ? (
								<Button
									tone="ghost"
									onClick={() => {
										closeIntro()
										toggle()
									}}
								>
									{t.translate.showOriginal}
								</Button>
							) : null}
						</>
					}
				>
					<Text tone="soft">{format(t.translate.introBody, { language: nameOf(target) })}</Text>
					<Text>{t.translate.introRemember}</Text>
					{working ? (
						<Text size="small" tone="soft">
							{status}
						</Text>
					) : null}
					{phase === "error" ? (
						<Text size="small" tone="accent" weight="bold">
							{status}
						</Text>
					) : null}
				</Dialog>
			) : null}

			{dialog === "prompt" && target ? (
				<Dialog
					title={format(t.translate.promptTitle, { content: nameOf(contentLang) })}
					onDismiss={closePrompt}
					actions={
						<>
							<Button
								data-autofocus
								onClick={() => {
									setAutoTranslate(always)
									dismissPrompt()
									setDialog(null)
									void run()
								}}
							>
								{t.translate.promptYes}
							</Button>
							<Button tone="ghost" onClick={closePrompt}>
								{t.translate.promptNo}
							</Button>
						</>
					}
				>
					<Text tone="soft">{format(t.translate.promptBody, { language: nameOf(target) })}</Text>
					<CheckboxField checked={always} onChange={setAlways} label={t.translate.promptAuto} />
				</Dialog>
			) : null}
		</TranslateContext.Provider>
	)
}
