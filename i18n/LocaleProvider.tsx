'use client'
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"

import Modal from "@/components/elements/Modal"
import type { Locale } from "./config"
import es from "./dictionaries/es"
import type { Dictionary } from "./dictionaries"
import { setPreferredLanguage } from "./preferences"

interface LocaleContextValue {
	lang: Locale
	t: Dictionary
	/** Asks to switch language. Moving to Spanish shows the notice first. */
	requestSwitch: (to: Locale, href: string) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ lang, dictionary, children }: { lang: Locale; dictionary: Dictionary; children: ReactNode }) {
	const router = useRouter()
	const [pending, setPending] = useState<string | null>(null)

	const requestSwitch = useCallback(
		(to: Locale, href: string) => {
			if (to === "es") {
				setPending(href)
				return
			}
			setPreferredLanguage(to)
			router.push(href)
		},
		[router],
	)

	const value = useMemo(() => ({ lang, t: dictionary, requestSwitch }), [lang, dictionary, requestSwitch])
	// The notice is always in Spanish: it is shown to someone who has just chosen Spanish.
	const text = es.notice

	return (
		<LocaleContext.Provider value={value}>
			{children}
			{pending && (
				<Modal
					title={text.title}
					onDismiss={() => setPending(null)}
					actions={
						<>
							<button
								type="button"
								data-autofocus
								className="btn btn-gradient"
								onClick={() => {
									const href = pending
									setPending(null)
									setPreferredLanguage("es")
									router.push(href)
								}}
							>
								{text.continue}
							</button>
							<button type="button" className="btn btn-outline-secondary" onClick={() => setPending(null)}>
								{text.stay}
							</button>
						</>
					}
				>
					<p className="text-300 mb-3">{text.body}</p>
					<p className="mb-0">
						<i className="ri-translate-2 me-2 text-primary-1" aria-hidden="true" />
						{text.translate}
					</p>
				</Modal>
			)}
		</LocaleContext.Provider>
	)
}

export function useLocale(): LocaleContextValue {
	const value = useContext(LocaleContext)
	if (!value) throw new Error("useLocale must be used inside LocaleProvider")
	return value
}
