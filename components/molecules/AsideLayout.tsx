import type { ReactNode } from "react"

export interface AsideLayoutProps {
	aside: ReactNode
	children: ReactNode
}

export function AsideLayout({ aside, children }: AsideLayoutProps) {
	return (
		<div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-14">
			<div>{children}</div>
			<div className="order-first mx-auto w-full max-w-xs lg:order-last lg:max-w-none">{aside}</div>
		</div>
	)
}
