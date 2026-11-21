"use client"

import { motion, useReducedMotion } from "framer-motion"

import { springs } from "@/lib/motion"

type Unit = "word" | "char"

export interface SplitTextProps {
	text: string
	by?: Unit
	playful?: boolean
	delay?: number
}

const tilt = (index: number): number => ((index * 37) % 9) - 4

const unitVariants = {
	hidden: (index: number) => ({ opacity: 0, y: "0.55em", rotate: tilt(index) * 2 }),
	shown: { opacity: 1, y: "0em", rotate: 0, transition: springs.wobbly },
}

export function SplitText({ text, by = "word", playful = false, delay = 0 }: SplitTextProps) {
	const reduceMotion = useReducedMotion()
	if (reduceMotion) return <>{text}</>

	const words = text.split(" ")
	let counter = 0

	return (
		<>
			<span className="sr-only">{text}</span>
			<motion.span
				aria-hidden="true"
				initial="hidden"
				whileInView="shown"
				viewport={{ once: true, margin: "-10% 0px" }}
				variants={{ shown: { transition: { staggerChildren: by === "char" ? 0.03 : 0.07, delayChildren: delay } } }}
			>
				{words.map((word, wordIndex) => {
					const units = by === "char" ? Array.from(word) : [word]
					return (
						<span key={`${word}-${wordIndex}`}>
							<span className="inline-block whitespace-nowrap">
								{units.map((unit) => {
									const index = counter++
									return (
										<motion.span
											key={index}
											custom={index}
											variants={unitVariants}
											whileHover={playful ? { y: "-0.12em", rotate: tilt(index) * 1.6, transition: springs.snappy } : undefined}
											className="inline-block"
										>
											{unit}
										</motion.span>
									)
								})}
							</span>
							{wordIndex < words.length - 1 ? " " : null}
						</span>
					)
				})}
			</motion.span>
		</>
	)
}
