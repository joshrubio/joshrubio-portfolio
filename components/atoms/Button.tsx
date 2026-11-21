import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ComponentPropsWithoutRef } from "react"

import LocaleLink from "@/components/atoms/LocaleLink"
import { cn } from "@/lib/cn"

const buttonStyles = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap border-2 border-ink font-display font-extrabold uppercase tracking-wide transition-transform duration-snap ease-snap hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
	{
		variants: {
			tone: {
				accent: "bg-accent text-white shadow-sticker",
				ink: "bg-ink text-paper shadow-sticker-accent",
				paper: "bg-paper text-ink shadow-sticker",
				ghost: "bg-transparent text-ink",
			},
			size: {
				sm: "px-3 py-2 text-xs",
				md: "px-5 py-3 text-sm",
				lg: "px-7 py-4 text-base",
			},
		},
		defaultVariants: { tone: "accent", size: "md" },
	},
)

type ButtonVariants = VariantProps<typeof buttonStyles>

type ButtonAsButton = ButtonVariants & ComponentPropsWithoutRef<"button"> & { href?: undefined }
type ButtonAsLink = ButtonVariants & Omit<ComponentProps<typeof LocaleLink>, "href"> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button(props: ButtonProps) {
	if (props.href !== undefined) {
		const { tone, size, className, target, rel, ...rest } = props
		const safeRel = target === "_blank" ? (rel ?? "noopener noreferrer") : rel
		return <LocaleLink className={cn(buttonStyles({ tone, size }), className)} target={target} rel={safeRel} {...rest} />
	}
	const { tone, size, className, type = "button", ...rest } = props
	return <button type={type} className={cn(buttonStyles({ tone, size }), className)} {...rest} />
}
