"use client"

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

import { Heading } from "@/components/atoms/Heading"
import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"

export interface StatCounterProps {
	value: number
	label: readonly string[]
}

export function StatCounter({ value, label }: StatCounterProps) {
	const ref = useRef<HTMLSpanElement>(null)
	const inView = useInView(ref, { once: true })
	const reduceMotion = useReducedMotion()
	const count = useMotionValue(0)
	const rounded = useTransform(count, (latest) => Math.round(latest))

	useEffect(() => {
		if (!inView) return
		const controls = animate(count, value, { duration: reduceMotion ? 0 : 1.6, ease: "easeOut" })
		return () => controls.stop()
	}, [inView, count, value, reduceMotion])

	return (
		<Stack gap="xs" align="start">
			<Heading as="p" size="display" width="condensed" tone="accent" className="leading-none">
				+<motion.span ref={ref}>{rounded}</motion.span>
			</Heading>
			<Text as="span" size="label" tone="paper">
				{label[0]}
			</Text>
			<Text as="span" size="label" tone="paper" weight="bold">
				{label[1]}
			</Text>
		</Stack>
	)
}
