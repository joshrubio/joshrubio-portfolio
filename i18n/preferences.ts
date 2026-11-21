// What the browser remembers about the visitor's language. Every access is wrapped because
// storage can be blocked (private windows, cleared site data) and the site must work without it.
const LANGUAGE = "preferred-language"
const INTRO_SEEN = "translate-intro-seen"
const AUTO = "translate-auto"
const PROMPT_DISMISSED = "translate-prompt-dismissed" // localStorage: when "Not now" was chosen
const NOTICE_SEEN = "language-notice-seen"
const PROMPT_SILENCE_MS = 30 * 24 * 60 * 60 * 1000

const read = (store: "localStorage" | "sessionStorage", key: string): string | null => {
	try {
		return window[store].getItem(key)
	} catch {
		return null
	}
}
const write = (store: "localStorage" | "sessionStorage", key: string, value: string) => {
	try {
		window[store].setItem(key, value)
	} catch {}
}

/** Language the visitor chose (with the switch or the translate button), or null. */
export const getPreferredLanguage = () => read("localStorage", LANGUAGE)
export const setPreferredLanguage = (code: string) => write("localStorage", LANGUAGE, code)

/** Language the page should be shown in for this visitor: the saved one, else the browser's. */
export function getTargetLanguage(): string {
	const saved = getPreferredLanguage()
	if (saved) return saved
	const browser = navigator.languages?.[0] ?? navigator.language ?? "en"
	return browser.split("-")[0].toLowerCase()
}

export const introSeen = () => read("localStorage", INTRO_SEEN) === "1"
export const markIntroSeen = () => write("localStorage", INTRO_SEEN, "1")

export const autoTranslate = () => read("localStorage", AUTO) === "1"
export const setAutoTranslate = (on: boolean) => write("localStorage", AUTO, on ? "1" : "0")

export function promptDismissed(): boolean {
	const savedAt = Number(read("localStorage", PROMPT_DISMISSED))
	return Number.isFinite(savedAt) && savedAt > 0 && Date.now() - savedAt < PROMPT_SILENCE_MS
}
export const dismissPrompt = () => write("localStorage", PROMPT_DISMISSED, String(Date.now()))

export const noticeSeen = () => read("localStorage", NOTICE_SEEN) === "1"
export const markNoticeSeen = () => write("localStorage", NOTICE_SEEN, "1")
