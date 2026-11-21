import type { ReactNode } from "react"

import { Text } from "@/components/atoms/Text"

export interface PanelProps {
	title: string
	children: ReactNode
}

const dots = ["bg-accent", "bg-paper", "bg-paper"] as const

export function Panel({ title, children }: PanelProps) {
	return (
		<div className="border-2 border-ink bg-white text-ink shadow-sticker-accent">
			<div className="flex items-center gap-2 border-b-2 border-ink bg-chrome px-3 py-2">
				{dots.map((tone, index) => (
					<span key={index} aria-hidden="true" className={`size-2.5 rounded-pill ${tone}`} />
				))}
				<Text as="span" size="label" tone="paper" className="ml-2">
					{title}
				</Text>
			</div>
			<div className="p-6 md:p-8">{children}</div>
		</div>
	)
}
