import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithoutRef, ElementType } from "react"

import { cn } from "@/lib/cn"

const textStyles = cva("", {
	variants: {
		size: {
			body: "font-body text-body",
			small: "font-body text-small",
			label: "font-mono text-label uppercase",
			hand: "font-hand text-heading",
		},
		tone: {
			ink: "text-ink",
			soft: "text-ink-soft",
			accent: "text-accent",
			paper: "text-paper",
			white: "text-white",
		},
		weight: {
			regular: "font-normal",
			bold: "font-bold",
		},
		align: {
			left: "text-left",
			center: "text-center",
		},
		measure: {
			none: "",
			compact: "max-w-md",
			narrow: "max-w-xl",
			wide: "max-w-3xl",
		},
	},
	defaultVariants: { size: "body", tone: "ink", weight: "regular", align: "left", measure: "none" },
})

type TextTag = "p" | "span" | "small" | "li" | "figcaption"

export interface TextProps extends ComponentPropsWithoutRef<"p">, VariantProps<typeof textStyles> {
	as?: TextTag
}

export function Text({ as: tag = "p", size, tone, weight, align, measure, className, ...props }: TextProps) {
	const Component = tag as ElementType
	return <Component className={cn(textStyles({ size, tone, weight, align, measure }), className)} {...props} />
}
