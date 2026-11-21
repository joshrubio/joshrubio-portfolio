import "@/styles/globals.css"

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Archivo, Caveat, DM_Mono } from "next/font/google"
import type { ReactNode } from "react"

import { SiteFooter } from "@/components/organisms/SiteFooter"
import { SiteShell } from "@/components/organisms/SiteShell"
import { hasLocale, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { LocaleProvider } from "@/i18n/LocaleProvider"
import { buildSiteMetadata } from "@/lib/metadata"

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" })
const dmMono = DM_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-dm-mono", display: "swap" })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" })

interface LangParams {
	params: Promise<{ lang: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
	return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
	const { lang } = await params
	if (!hasLocale(lang)) return {}
	return buildSiteMetadata(lang)
}

export default async function SiteLayout({ children, params }: LangParams & { children: ReactNode }) {
	const { lang } = await params
	if (!hasLocale(lang)) notFound()
	const dictionary = getDictionary(lang)

	return (
		<html lang={lang} className={`${archivo.variable} ${dmMono.variable} ${caveat.variable}`}>
			<body>
				<LocaleProvider lang={lang} dictionary={dictionary}>
					<SiteShell footer={<SiteFooter nav={dictionary.nav} rights={dictionary.footer.rights} />}>{children}</SiteShell>
				</LocaleProvider>
			</body>
		</html>
	)
}
