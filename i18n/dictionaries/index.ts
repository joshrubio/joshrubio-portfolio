import en, { type Dictionary } from "./en"
import es from "./es"
import type { Locale } from "../config"

const dictionaries: Record<Locale, Dictionary> = { en, es }

export type { Dictionary }
export const getDictionary = (lang: Locale): Dictionary => dictionaries[lang]

/** Replaces {name} placeholders in a dictionary string. */
export function format(template: string, values: Record<string, string | number>): string {
	return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""))
}
