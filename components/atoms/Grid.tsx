import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithoutRef, ElementType } from "react"

import { cn } from "@/lib/cn"

const gridStyles = cva("grid", {
	variants: {
		columns: {
			1: "grid-cols-1",
			2: "grid-cols-1 md:grid-cols-2",
			3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
			4: "grid-cols-2 lg:grid-cols-4",
			5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
			tiles: "grid-cols-3",
		},
		gap: {
			sm: "gap-3",
			md: "gap-6",
			lg: "gap-10",
		},
		align: {
			start: "items-start",
			center: "items-center",
			stretch: "items-stretch",
		},
	},
	defaultVariants: { columns: 2, gap: "md", align: "stretch" },
})

type GridTag = "div" | "ul" | "ol"

export interface GridProps extends ComponentPropsWithoutRef<"div">, VariantProps<typeof gridStyles> {
	as?: GridTag
}

export function Grid({ as: tag = "div", columns, gap, align, className, ...props }: GridProps) {
	const Component = tag as ElementType
	return <Component className={cn(gridStyles({ columns, gap, align }), className)} {...props} />
}
