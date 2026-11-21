import type { ReactNode } from "react"

import { cn } from "@/lib/cn"

const handles = [
	"-left-1.5 -top-1.5 [animation-delay:0.5s]",
	"-right-1.5 -top-1.5 [animation-delay:0.65s]",
	"-bottom-1.5 -right-1.5 [animation-delay:0.8s]",
	"-bottom-1.5 -left-1.5 [animation-delay:0.95s]",
] as const

export interface SelectionFrameProps {
	children: ReactNode
	label?: string
	className?: string
}

export function SelectionFrame({ children, label, className }: SelectionFrameProps) {
	return (
		<div className={cn("relative mx-auto w-fit border border-accent", className)}>
			{children}
			{handles.map((position) => (
				<span key={position} aria-hidden="true" className={cn("absolute size-3 animate-pop border border-accent bg-paper", position)} />
			))}
			{label ? <span className="absolute -top-7 left-0 animate-pop bg-accent px-2 py-1 font-mono text-label uppercase text-white [animation-delay:1.1s]">{label}</span> : null}
		</div>
	)
}
