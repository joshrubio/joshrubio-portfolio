import { cva, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"

import { cn } from "@/lib/cn"

const trackStyles = cva("flex w-max", {
	variants: {
		direction: {
			left: "animate-marquee",
			right: "animate-marquee-reverse",
		},
	},
	defaultVariants: { direction: "left" },
})

const frameStyles = cva("overflow-hidden", {
	variants: {
		spaceTop: {
			none: "",
			lg: "mt-14",
			xl: "mt-20",
		},
	},
	defaultVariants: { spaceTop: "none" },
})

export interface MarqueeProps extends VariantProps<typeof trackStyles>, VariantProps<typeof frameStyles> {
	children: ReactNode
	className?: string
}

export function Marquee({ children, direction, spaceTop, className }: MarqueeProps) {
	return (
		<div className={cn(frameStyles({ spaceTop }), className)}>
			<div className={trackStyles({ direction })}>
				<div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
				<div aria-hidden="true" className="flex shrink-0 items-center gap-12 pr-12">
					{children}
				</div>
			</div>
		</div>
	)
}
