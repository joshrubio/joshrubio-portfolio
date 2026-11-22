import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/cn"

const logoStyles = cva("shrink-0 overflow-visible", {
	variants: {
		size: {
			sm: "size-8",
			md: "size-12",
			lg: "size-20",
		},
	},
	defaultVariants: { size: "md" },
})

export interface LogoProps extends VariantProps<typeof logoStyles> {
	className?: string
}

export function Logo({ size, className }: LogoProps) {
	return (
		<svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={cn(logoStyles({ size }), className)}>
			<rect x="9" y="11" width="50" height="50" className="fill-accent" />
			<g transform="rotate(-5 32 34)">
				<rect x="6" y="8" width="50" height="50" strokeWidth="3" className="fill-white stroke-ink" />
				<g transform="translate(-1.5 0)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-ink">
					<path d="M23 21H32M27.5 21V39C27.5 46 21 48 15 43" />
					<path d="M39 21V46M39 21H42.5C49 21 49 32 42.5 32H39M42.5 32L49.5 46" />
				</g>
			</g>
			<path d="M3 10L19 6L21 14L5 18Z" fillOpacity="0.85" strokeWidth="1.5" className="fill-accent stroke-ink" />
		</svg>
	)
}
