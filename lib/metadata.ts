import type { Metadata } from "next"

import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ||
	(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")

export function buildSiteMetadata(lang: Locale): Metadata {
	const { title, description, ogLocale } = getDictionary(lang).meta
	return {
		metadataBase: new URL(siteUrl),
		title,
		description,
		openGraph: { title, description, type: "website", siteName: "Josh D. Rubio", locale: ogLocale },
		twitter: { card: "summary_large_image", title, description },
	}
}
