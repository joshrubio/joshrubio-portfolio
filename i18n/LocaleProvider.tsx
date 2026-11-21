'use client'
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/atoms/Button"
import { Text } from "@/components/atoms/Text"
import { Dialog } from "@/components/molecules/Dialog"
import type { Locale } from "./config"
import es from "./dictionaries/es"
import type { Dictionary } from "./dictionaries"
import { markNoticeSeen, noticeSeen, setPreferredLanguage } from "./preferences"

interface LocaleContextValue {
	lang: Locale
	t: Dictionary
	/** Asks to switch language. Moving to Spanish shows the notice the first time. */
	requestSwitch: (to: Locale, href: string) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

interface LocaleProviderProps {
	lang: Locale
	dictionary: Dictionary
	children: ReactNode
}

export function LocaleProvider({ lang, dictionary, children }: LocaleProviderProps) {
	const router = useRouter()
	const [pending, setPending] = useState<string | null>(null)

	const requestSwitch = useCallback(
		(to: Locale, href: string) => {
			if (to === "es" && !noticeSeen()) {
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

	const confirm = () => {
		if (!pending) return
		const href = pending
		markNoticeSeen()
		setPending(null)
		setPreferredLanguage("es")
		router.push(href)
	}
	const dismiss = () => {
		markNoticeSeen()
		setPending(null)
	}

	return (
		<LocaleContext.Provider value={value}>
			{children}
			{pending && (
				<Dialog
					title={text.title}
					onDismiss={dismiss}
					actions={
						<>
							<Button data-autofocus onClick={confirm}>
								{text.continue}
							</Button>
							<Button tone="ghost" onClick={dismiss}>
								{text.stay}
							</Button>
						</>
					}
				>
					<Text tone="soft">{text.body}</Text>
					<Text>{text.translate}</Text>
				</Dialog>
			)}
		</LocaleContext.Provider>
	)
}

export function useLocale(): LocaleContextValue {
	const value = useContext(LocaleContext)
	if (!value) throw new Error("useLocale must be used inside LocaleProvider")
	return value
}
