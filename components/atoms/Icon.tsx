import { cva, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"

import { cn } from "@/lib/cn"

export const iconNames = ["arrow-right", "arrow-left", "arrow-up-right", "download", "mail", "phone", "github", "linkedin", "menu", "close", "quote", "translate", "undo", "loader", "plus", "minus", "check"] as const

export type IconName = (typeof iconNames)[number]

const iconPaths: Record<IconName, ReactNode> = {
	"arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
	"arrow-left": <path d="M19 12H5M11 6l-6 6 6 6" />,
	"arrow-up-right": <path d="M7 17L17 7M8 7h9v9" />,
	download: <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />,
	mail: (
		<>
			<rect x="3" y="5" width="18" height="14" />
			<path d="M3 7l9 6 9-6" />
		</>
	),
	phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
	github: (
		<>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</>
	),
	linkedin: (
		<>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</>
	),
	menu: <path d="M4 6h16M4 12h16M4 18h16" />,
	close: <path d="M6 6l12 12M18 6L6 18" />,
	quote: <path d="M4 18v-6c0-4 2-7 6-8M14 18v-6c0-4 2-7 6-8M4 14h6v4H4zM14 14h6v4h-6z" />,
	translate: <path d="M4 5h9M8.5 3v2M6 5c0 4 3 7 6 8M11 5c0 3-2 6-6 8M13 21l4-10 4 10M14.5 18h5" />,
	undo: <path d="M9 14L4 9l5-5M4 9h10a6 6 0 0 1 0 12h-3" />,
	loader: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />,
	plus: <path d="M12 5v14M5 12h14" />,
	minus: <path d="M5 12h14" />,
	check: <path d="M5 13l4 4L19 7" />,
}

const iconStyles = cva("shrink-0", {
	variants: {
		size: {
			sm: "size-4",
			md: "size-5",
			lg: "size-7",
			xl: "size-12",
		},
	},
	defaultVariants: { size: "md" },
})

export interface IconProps extends VariantProps<typeof iconStyles> {
	name: IconName
	className?: string
}

export function Icon({ name, size, className }: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2.4}
			strokeLinecap="square"
			strokeLinejoin="miter"
			aria-hidden="true"
			className={cn(iconStyles({ size }), name === "loader" && "animate-spin", className)}
		>
			{iconPaths[name]}
		</svg>
	)
}
