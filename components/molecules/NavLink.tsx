"use client"

import { cva } from "class-variance-authority"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

import LocaleLink from "@/components/atoms/LocaleLink"
import { stripLocale } from "@/i18n/config"

const navLinkStyles = cva("inline-flex items-center px-3 py-2 font-display text-sm font-extrabold uppercase tracking-wide transition-colors duration-snap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent", {
	variants: {
		active: {
			true: "bg-accent text-white",
			false: "text-ink hover:bg-ink hover:text-paper",
		},
	},
	defaultVariants: { active: false },
})

export interface NavLinkProps {
	href: string
	children: ReactNode
	onNavigate?: () => void
}

export function NavLink({ href, children, onNavigate }: NavLinkProps) {
	const pathname = stripLocale(usePathname())
	const active = pathname === href
	return (
		<LocaleLink href={href} aria-current={active ? "page" : undefined} className={navLinkStyles({ active })} onClick={onNavigate}>
			{children}
		</LocaleLink>
	)
}
