import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/cn"

const containerStyles = cva("mx-auto w-full px-gutter", {
	variants: {
		width: {
			page: "max-w-page",
			wide: "max-w-wide",
			narrow: "max-w-narrow",
		},
	},
	defaultVariants: { width: "page" },
})

export interface ContainerProps extends ComponentPropsWithoutRef<"div">, VariantProps<typeof containerStyles> {}

export function Container({ width, className, ...props }: ContainerProps) {
	return <div className={cn(containerStyles({ width }), className)} {...props} />
}
