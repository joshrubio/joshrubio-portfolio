import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

import LocaleLink from "@/components/atoms/LocaleLink"
import { cn } from "@/lib/cn"

const textLinkStyles = cva(
	"font-display font-bold uppercase decoration-accent decoration-2 underline-offset-4 hover:underline hover:decoration-wavy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
	{
		variants: {
			tone: {
				ink: "text-ink",
				paper: "text-paper",
				accent: "text-accent",
			},
		},
		defaultVariants: { tone: "ink" },
	},
)

export interface TextLinkProps extends Omit<ComponentProps<typeof LocaleLink>, "href">, VariantProps<typeof textLinkStyles> {
	href: string
}

export function TextLink({ tone, className, target, rel, ...props }: TextLinkProps) {
	const safeRel = target === "_blank" ? (rel ?? "noopener noreferrer") : rel
	return <LocaleLink className={cn(textLinkStyles({ tone }), className)} target={target} rel={safeRel} {...props} />
}
