"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

import { easings, springs } from "@/lib/motion"

type Direction = "up" | "left" | "right" | "none" | "pop"

const offsets: Record<Direction, { x: number; y: number; scale: number; rotate: number }> = {
	up: { x: 0, y: 36, scale: 1, rotate: 0 },
	left: { x: 36, y: 0, scale: 1, rotate: 0 },
	right: { x: -36, y: 0, scale: 1, rotate: 0 },
	none: { x: 0, y: 0, scale: 1, rotate: 0 },
	pop: { x: 0, y: 24, scale: 0.82, rotate: -5 },
}

export interface RevealProps {
	children: ReactNode
	direction?: Direction
	delay?: number
	className?: string
}

export function Reveal({ children, direction = "up", delay = 0, className }: RevealProps) {
	const reduceMotion = useReducedMotion()
	const classes = className ?? "h-full"
	if (reduceMotion) return <div className={classes}>{children}</div>

	const transition = direction === "pop" ? { ...springs.wobbly, delay } : { duration: 0.6, delay, ease: easings.snap }

	return (
		<motion.div
			className={classes}
			initial={{ opacity: 0, ...offsets[direction] }}
			whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
			viewport={{ once: true, margin: "-8% 0px" }}
			transition={transition}
		>
			{children}
		</motion.div>
	)
}
