'use client'
import Link from "next/link"
import { ComponentProps } from "react"

import { useLocale } from "@/i18n/LocaleProvider"
import { localePath } from "@/i18n/config"

/** next/link that keeps the visitor in their language: internal paths get the /es prefix when needed. */
export default function LocaleLink({ href, ...props }: ComponentProps<typeof Link>) {
	const { lang } = useLocale()
	return <Link href={typeof href === "string" ? localePath(lang, href) : href} {...props} />
}
