export const locales = ["en", "es"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const hasLocale = (value: unknown): value is Locale => locales.includes(value as Locale)

/** Removes a leading /es or /en from a pathname ("/es/work" -> "/work", "/es" -> "/"). */
export function stripLocale(pathname: string): string {
	const match = pathname.match(/^\/(en|es)(?=\/|$)/)
	return match ? pathname.slice(match[0].length) || "/" : pathname
}

/**
 * Prefixes an internal path with the language. English is the default and has no prefix,
 * so existing URLs do not change. External links, anchors and mailto/tel are returned as they are.
 */
export function localePath(lang: Locale, href: string): string {
	if (!href.startsWith("/") || href.startsWith("//")) return href
	if (lang === defaultLocale) return href
	if (href === "/") return `/${lang}`
	if (href.startsWith("/#") || href.startsWith("/?")) return `/${lang}${href.slice(1)}`
	return `/${lang}${href}`
}

/** Path of the same page in another language. */
export function switchLocalePath(pathname: string, to: Locale): string {
	return localePath(to, stripLocale(pathname))
}
