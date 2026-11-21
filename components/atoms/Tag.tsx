import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/cn"

const tagStyles = cva("inline-flex items-center border-2 px-2 py-1 font-mono text-label uppercase", {
	variants: {
		tone: {
			ink: "border-ink bg-ink text-paper",
			accent: "border-ink bg-accent text-white",
			paper: "border-ink bg-paper text-ink",
			outline: "border-ink bg-transparent text-ink",
		},
		wobble: {
			true: "animate-boil",
			false: "",
		},
	},
	defaultVariants: { tone: "outline", wobble: false },
})

export interface TagProps extends ComponentPropsWithoutRef<"span">, VariantProps<typeof tagStyles> {}

export function Tag({ tone, wobble, className, ...props }: TagProps) {
	return <span className={cn(tagStyles({ tone, wobble }), className)} {...props} />
}
