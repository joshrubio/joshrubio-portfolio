import type { Dictionary } from "@/i18n/dictionaries"

export const siteLinks = {
	cv: "https://drive.google.com/file/d/1J-FkOhU1cP-_04kxy6oPREKI4pbpieBq/view?usp=sharing",
	github: "https://github.com/joshrubio",
	linkedin: "https://www.linkedin.com/in/joshuerubio/",
	email: "joshuerubio@gmail.com",
	phone: "+34643529116",
	credly: "https://www.credly.com/badges/af4248f0-b9d7-4ec5-a34b-6bc1a4f35ee4/linked_in_profile",
	efset: "https://cert.efset.org/K6YQH4",
} as const

export interface NavItem {
	key: keyof Dictionary["nav"]
	href: string
}

export const navItems: readonly NavItem[] = [
	{ key: "home", href: "/" },
	{ key: "services", href: "/services" },
	{ key: "portfolio", href: "/work" },
	{ key: "pricing", href: "/pricing" },
	{ key: "blog", href: "/blog-list" },
	{ key: "contact", href: "/#contact" },
]

export const translatedRoutes: readonly string[] = ["/", "/work"]

export interface Logo {
	name: string
	src: string
}

const toolDir = "/assets/imgs/home-page-2/hero-1"

export const toolLogos: readonly Logo[] = [
	{ name: "Claude Code", src: `${toolDir}/claude-code.svg` },
	{ name: "React", src: `${toolDir}/react.svg` },
	{ name: "JavaScript", src: `${toolDir}/javascript.svg` },
	{ name: "Node.js", src: `${toolDir}/nodejs.svg` },
	{ name: "Python", src: `${toolDir}/python.svg` },
	{ name: "MongoDB", src: `${toolDir}/mongodb.svg` },
	{ name: "Svelte", src: `${toolDir}/svelte.svg` },
	{ name: "Docker", src: `${toolDir}/docker.svg` },
	{ name: "Git", src: `${toolDir}/git.svg` },
	{ name: "PHP", src: `${toolDir}/php.svg` },
]

export const heroToolLogos: readonly Logo[] = toolLogos.slice(0, 6)

export const brandLogos: readonly Logo[] = [
	{ name: "Brave", src: "/assets/imgs/brands/brands-1/logo-1.webp" },
	{ name: "Circle", src: "/assets/imgs/brands/brands-1/logo-2.webp" },
	{ name: "Discord", src: "/assets/imgs/brands/brands-1/logo-3.webp" },
	{ name: "Google", src: "/assets/imgs/brands/brands-1/logo-4.webp" },
	{ name: "Jump", src: "/assets/imgs/brands/brands-1/logo-5.webp" },
	{ name: "Magic Eden", src: "/assets/imgs/brands/brands-1/logo-6.webp" },
	{ name: "Meta", src: "/assets/imgs/brands/brands-1/logo-7.webp" },
	{ name: "Shopify", src: "/assets/imgs/brands/brands-1/logo-8.webp" },
	{ name: "Stripe", src: "/assets/imgs/brands/brands-1/logo-9.webp" },
	{ name: "Lollapalooza", src: "/assets/imgs/brands/brands-1/logo-10.webp" },
]

export const skillItems: readonly (readonly string[])[] = [
	["HTML", "CSS", "JavaScript", "React", "Svelte"],
	["Node.js", "Express", "Python", "PHP"],
	["MySQL", "PostgreSQL", "MongoDB"],
	["Git", "Docker", "AWS", "Heroku", "Claude Code"],
	["RESTful APIs", "GraphQL", "Agile Methodologies"],
]

export const experienceStart = new Date(2022, 0, 1)
