import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/remixicon/remixicon.css"
import "/public/assets/css/main.css"

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Urbanist, Playfair_Display, DM_Mono } from "next/font/google"

const urbanist = Urbanist({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--urbanist",
	display: 'swap',
})
const playfair_display = Playfair_Display({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--playpair",
	display: 'swap',
})
const dmMono = DM_Mono({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
	variable: "--dmMono",
	display: 'swap',
})

import { LocaleProvider } from "@/i18n/LocaleProvider"
import { getDictionary } from "@/i18n/dictionaries"
import { hasLocale, locales } from "@/i18n/config"

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ||
	(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")


export const dynamicParams = false

export function generateStaticParams() {
	return locales.map((lang) => ({ lang }))
}

// Preview images come from app/opengraph-image.png and app/twitter-image.png (Next file convention)
export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
	if (!hasLocale(params.lang)) return {}
	const { title, description, ogLocale } = getDictionary(params.lang).meta
	return {
		metadataBase: new URL(siteUrl),
		title,
		description,
		openGraph: { title, description, type: "website", siteName: "Josh D. Rubio", locale: ogLocale },
		twitter: { card: "summary_large_image", title, description },
	}
}

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: { lang: string }
}>) {
	if (!hasLocale(params.lang)) notFound()
	const lang = params.lang
	return (
		<html lang={lang} data-bs-theme="dark" className="zelio">
			<body className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}>
				<LocaleProvider lang={lang} dictionary={getDictionary(lang)}>
					{children}
				</LocaleProvider>
			</body>
		</html>
	)
}
