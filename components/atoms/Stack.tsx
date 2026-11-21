import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithoutRef, ElementType } from "react"

import { cn } from "@/lib/cn"

const stackStyles = cva("flex", {
	variants: {
		direction: {
			col: "flex-col",
			row: "flex-row",
			responsive: "flex-col md:flex-row",
		},
		gap: {
			none: "gap-0",
			xs: "gap-1",
			sm: "gap-2",
			md: "gap-4",
			lg: "gap-8",
			xl: "gap-14",
		},
		align: {
			start: "items-start",
			center: "items-center",
			end: "items-end",
			stretch: "items-stretch",
			baseline: "items-baseline",
		},
		justify: {
			start: "justify-start",
			center: "justify-center",
			between: "justify-between",
			end: "justify-end",
		},
		wrap: {
			true: "flex-wrap",
			false: "flex-nowrap",
		},
		spaceTop: {
			none: "",
			lg: "mt-14",
			xl: "mt-20",
		},
	},
	defaultVariants: { direction: "col", gap: "md", align: "stretch", justify: "start", wrap: false, spaceTop: "none" },
})

type StackTag = "div" | "ul" | "ol" | "nav" | "header" | "footer" | "article" | "section"

export interface StackProps extends Omit<ComponentPropsWithoutRef<"div">, "wrap">, VariantProps<typeof stackStyles> {
	as?: StackTag
}

export function Stack({ as: tag = "div", direction, gap, align, justify, wrap, spaceTop, className, ...props }: StackProps) {
	const Component = tag as ElementType
	return <Component className={cn(stackStyles({ direction, gap, align, justify, wrap, spaceTop }), className)} {...props} />
}
