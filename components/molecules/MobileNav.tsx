"use client"

import { useState, type ReactNode } from "react"

import { Button } from "@/components/atoms/Button"
import { Icon } from "@/components/atoms/Icon"
import { Stack } from "@/components/atoms/Stack"

import { NavLink } from "./NavLink"

export interface MobileNavItem {
	label: string
	href: string
}

export interface MobileNavProps {
	items: readonly MobileNavItem[]
	toggleLabel: string
	children?: ReactNode
}

export function MobileNav({ items, toggleLabel, children }: MobileNavProps) {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Button size="sm" tone="paper" aria-expanded={open} aria-controls="mobile-nav" aria-label={toggleLabel} onClick={() => setOpen((value) => !value)}>
				<Icon name={open ? "close" : "menu"} />
			</Button>
			{open ? (
				<div id="mobile-nav" className="absolute inset-x-0 top-full border-b-2 border-ink bg-paper px-gutter py-6 shadow-panel">
					<Stack as="nav" gap="sm">
						{items.map((item) => (
							<NavLink key={item.href} href={item.href} onNavigate={() => setOpen(false)}>
								{item.label}
							</NavLink>
						))}
						{children}
					</Stack>
				</div>
			) : null}
		</>
	)
}
