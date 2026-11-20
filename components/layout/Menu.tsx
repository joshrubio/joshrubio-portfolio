'use client'
import Link from "@/components/elements/LocaleLink"
import { usePathname } from "next/navigation" // usePathname is more suited for client-side path checking

import { stripLocale } from "@/i18n/config"
import { useLocale } from "@/i18n/LocaleProvider"

const items = [
	{ key: "home", href: "/" },
	{ key: "services", href: "/services" },
	{ key: "portfolio", href: "/work" },
	{ key: "pricing", href: "/pricing" },
	{ key: "blog", href: "/blog-list" },
	{ key: "contact", href: "/#contact" },
] as const

export default function Menu() {
	const pathname = stripLocale(usePathname())
	const { t } = useLocale()
	return (
		<>
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				{items.map((item) => (
					<li key={item.key} className="nav-item">
						<Link href={item.href} className={pathname === item.href ? "nav-link active" : "nav-link"}>
							{t.nav[item.key]}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
