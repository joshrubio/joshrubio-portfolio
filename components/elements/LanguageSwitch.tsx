'use client'
import { usePathname } from "next/navigation"

import { locales, switchLocalePath } from "@/i18n/config"
import { useLocale } from "@/i18n/LocaleProvider"

/** EN | ES switch. Moving to Spanish asks for confirmation first (the notice about English-only content). */
export default function LanguageSwitch() {
	const pathname = usePathname()
	const { lang, t, requestSwitch } = useLocale()

	const other = locales.find((l) => l !== lang) ?? lang
	const otherHref = switchLocalePath(pathname, other)
	const go = (to: (typeof locales)[number], href: string) => (e: React.MouseEvent) => {
		e.preventDefault()
		requestSwitch(to, href + window.location.hash)
	}

	return (
		<>
			{/* Phones: one small button that goes to the other language, to leave room in the bar */}
			<a
				href={otherHref}
				lang={other}
				hrefLang={other}
				title={t.language.names[other]}
				aria-label={`${t.language.label}: ${t.language.names[other]}`}
				className="language-switch d-inline-flex d-sm-none align-items-center border rounded-3 px-1 py-1 me-0 fs-7 fw-bold text-decoration-none text-300"
				onClick={go(other, otherHref)}
				data-no-translate
			>
				{t.language.short[other]}
			</a>
			<div role="group" aria-label={t.language.label} className="language-switch d-none d-sm-flex align-items-center gap-1 px-md-2 me-1 me-md-2" data-no-translate>
				{locales.map((l, i) => {
					const active = l === lang
					const href = switchLocalePath(pathname, l)
					return (
						<span key={l} className="d-flex align-items-center gap-1">
							{i > 0 && <span className="text-400" aria-hidden="true">|</span>}
							<a
								href={href}
								lang={l}
								hrefLang={l}
								title={t.language.names[l]}
								aria-current={active ? "true" : undefined}
								className={`fs-7 fw-bold text-decoration-none ${active ? "text-primary-1" : "text-300"}`}
								onClick={active ? (e) => e.preventDefault() : go(l, href)}
							>
								{t.language.short[l]}
							</a>
						</span>
					)
				})}
			</div>
		</>
	)
}
