import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/remixicon/remixicon.css"
import "/public/assets/css/main.css"

import type { Metadata } from "next"
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

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ||
	(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")

const title = "Josh D. Rubio - Design Engineer Portfolio"
const description = "Josh D. Rubio - UX Designer & AI-Driven Web Developer. Crafting intuitive, content-driven web experiences with Next.js, WordPress, and modern UX practices."

// Preview images come from app/opengraph-image.png and app/twitter-image.png (Next file convention)
export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title,
	description,
	openGraph: { title, description, type: "website", siteName: "Josh D. Rubio" },
	twitter: { card: "summary_large_image", title, description },
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" data-bs-theme="dark" className="zelio">
			<body className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable}`}>{children}</body>
		</html>
	)
}
