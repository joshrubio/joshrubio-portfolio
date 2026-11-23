import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/cn"

const headingStyles = cva("font-display font-black uppercase text-balance", {
	variants: {
		size: {
			display: "text-display",
			title: "text-title",
			heading: "text-heading",
			subhead: "text-subhead",
		},
		width: {
			condensed: "font-stretch-[62%]",
			normal: "font-stretch-100",
			expanded: "font-stretch-[125%]",
		},
		tone: {
			ink: "text-ink",
			accent: "text-accent",
			accentOutline: "text-accent glyph-outline-white",
			paper: "text-paper",
			stroke: "text-stroke",
			strokePaper: "text-stroke-paper",
		},
		align: {
			left: "text-left",
			center: "text-center",
		},
	},
	defaultVariants: { size: "title", width: "normal", tone: "ink", align: "left" },
})

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p" | "span"

export interface HeadingProps extends ComponentPropsWithoutRef<"h1">, VariantProps<typeof headingStyles> {
	as?: HeadingTag
}

export function Heading({ as: Tag = "h2", size, width, tone, align, className, ...props }: HeadingProps) {
	return <Tag className={cn(headingStyles({ size, width, tone, align }), className)} {...props} />
}
