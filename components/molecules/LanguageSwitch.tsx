"use client"

import { cva } from "class-variance-authority"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { locales, switchLocalePath } from "@/i18n/config"
import { useLocale } from "@/i18n/LocaleProvider"

const optionStyles = cva("px-2 py-1 font-mono text-label uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", {
	variants: {
		active: {
			true: "bg-ink text-paper",
			false: "text-ink hover:bg-accent hover:text-white",
		},
	},
})

export function LanguageSwitch() {
	const pathname = usePathname()
	const { lang, t, requestSwitch } = useLocale()

	return (
		<div role="group" aria-label={t.language.label} className="flex border-2 border-ink" data-no-translate>
			{locales.map((locale) => {
				const active = locale === lang
				const href = switchLocalePath(pathname, locale)
				return (
					<Link
						key={locale}
						href={href}
						lang={locale}
						hrefLang={locale}
						title={t.language.names[locale]}
						aria-current={active ? "true" : undefined}
						className={optionStyles({ active })}
						onClick={(event) => {
							event.preventDefault()
							if (!active) requestSwitch(locale, href + window.location.hash)
						}}
					>
						{t.language.short[locale]}
					</Link>
				)
			})}
		</div>
	)
}
