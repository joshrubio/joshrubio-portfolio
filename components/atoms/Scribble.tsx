"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/cn"

const shapes = {
	underline: { viewBox: "0 0 200 16", path: "M3 11C40 3 70 14 105 8s60 3 92-1", placement: "absolute -bottom-3 left-0 h-3 w-full" },
	circle: { viewBox: "0 0 200 80", path: "M100 6C40 4 6 26 8 44c3 24 60 32 112 28 56-4 76-24 68-44C180 14 140 4 96 8", placement: "absolute left-1/2 top-1/2 h-[150%] w-[120%] -translate-x-1/2 -translate-y-1/2" },
	arrow: { viewBox: "0 0 120 80", path: "M6 10C40 6 80 22 96 60M96 60l-18-6M96 60l4-20", placement: "absolute" },
} as const

const scribbleStyles = cva("pointer-events-none overflow-visible", {
	variants: {
		tone: {
			accent: "stroke-accent",
			ink: "stroke-ink",
			paper: "stroke-paper",
		},
	},
	defaultVariants: { tone: "accent" },
})

export type ScribbleShape = keyof typeof shapes

export interface ScribbleProps extends VariantProps<typeof scribbleStyles> {
	shape?: ScribbleShape
	delay?: number
	className?: string
}

export function Scribble({ shape = "underline", tone, delay = 0.2, className }: ScribbleProps) {
	const reduceMotion = useReducedMotion()
	const { viewBox, path, placement } = shapes[shape]

	return (
		<svg viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true" className={cn(scribbleStyles({ tone }), placement, className)}>
			<motion.path
				d={path}
				fill="none"
				strokeWidth={5}
				strokeLinecap="round"
				strokeLinejoin="round"
				vectorEffect="non-scaling-stroke"
				initial={reduceMotion ? false : { pathLength: 0 }}
				whileInView={{ pathLength: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.9, delay, ease: "easeOut" }}
			/>
		</svg>
	)
}
