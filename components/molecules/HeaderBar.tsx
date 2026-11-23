import type { ReactNode } from "react"

import { Container } from "@/components/atoms/Container"

export interface HeaderBarProps {
	brand: ReactNode
	nav: ReactNode
	actions: ReactNode
	compact: ReactNode
	mobile: ReactNode
}

export function HeaderBar({ brand, nav, actions, compact, mobile }: HeaderBarProps) {
	return (
		<header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
			<Container width="wide" className="flex h-16 items-center justify-between gap-4">
				{brand}
				<div className="hidden lg:block">{nav}</div>
				<div className="flex items-center gap-3">
					<div className="hidden items-center gap-3 sm:flex">{actions}</div>
					<div className="flex items-center gap-2 sm:hidden">{compact}</div>
					<div className="lg:hidden">{mobile}</div>
				</div>
			</Container>
		</header>
	)
}
