"use client"

import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

import { TranslateProvider } from "@/components/providers/TranslateProvider"
import { translatedRoutes } from "@/data/site"
import { stripLocale } from "@/i18n/config"
import { useLocale } from "@/i18n/LocaleProvider"

import { SiteHeader } from "./SiteHeader"

export interface SiteShellProps {
	children: ReactNode
	footer: ReactNode
}

export function SiteShell({ children, footer }: SiteShellProps) {
	const { lang } = useLocale()
	const pathname = stripLocale(usePathname())
	const hasOwnTranslation = translatedRoutes.includes(pathname)
	const contentLang = hasOwnTranslation ? lang : "en"

	return (
		<TranslateProvider contentLang={contentLang} enabled={!hasOwnTranslation} routeKey={pathname}>
			<SiteHeader />
			<main id="page-content" lang={contentLang}>
				{children}
			</main>
			{footer}
		</TranslateProvider>
	)
}
