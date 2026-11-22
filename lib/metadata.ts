import type { Metadata } from "next"

import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ||
	(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")

const shareImage = { url: "/assets/imgs/og-image.png", width: 1200, height: 630, alt: "Josh D. Rubio, Product Designer and Fullstack Developer" }

export function buildSiteMetadata(lang: Locale): Metadata {
	const { title, description, ogLocale } = getDictionary(lang).meta
	return {
		metadataBase: new URL(siteUrl),
		title,
		description,
		openGraph: { title, description, type: "website", siteName: "Josh D. Rubio", locale: ogLocale, images: [shareImage] },
		twitter: { card: "summary_large_image", title, description, images: [shareImage.url] },
	}
}
