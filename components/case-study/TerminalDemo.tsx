"use client"

import { useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/atoms/Button"
import { Text } from "@/components/atoms/Text"
import { cn } from "@/lib/cn"

export type TerminalRole = "you" | "agent" | "flag" | "ok" | "dim"

export interface TerminalLine {
	who: TerminalRole
	text: string
}

const colors: Record<TerminalRole, string> = {
	you: "text-term-you",
	agent: "text-term-agent",
	flag: "text-term-flag",
	ok: "text-term-ok",
	dim: "text-term-dim",
}

const prefixes: Record<TerminalRole, string> = {
	you: "you ›",
	agent: "agent ›",
	flag: "  ⚑",
	ok: "  ✓",
	dim: "   ",
}

const dots = ["bg-term-red", "bg-term-yellow", "bg-term-green"] as const

export interface TerminalDemoProps {
	title: string
	lines: TerminalLine[]
	caption?: string
}

export function TerminalDemo({ title, lines, caption }: TerminalDemoProps) {
	const reduced = useReducedMotion() ?? false
	const [typed, setTyped] = useState(0)
	const [started, setStarted] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	const shown = reduced ? lines.length : typed

	useEffect(() => {
		const element = ref.current
		if (!element || reduced) return
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setStarted(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.4 },
		)
		observer.observe(element)
		return () => observer.disconnect()
	}, [reduced])

	useEffect(() => {
		if (!started || reduced || typed >= lines.length) return
		const previous = typed > 0 ? lines[typed - 1] : null
		const delay = typed === 0 ? 250 : previous?.who === "you" ? 900 : 380
		const timer = setTimeout(() => setTyped((count) => count + 1), delay)
		return () => clearTimeout(timer)
	}, [started, reduced, typed, lines])

	const done = shown >= lines.length

	return (
		<figure className="my-6">
			<div ref={ref} className="overflow-hidden border-2 border-ink bg-term-bg shadow-sticker">
				<div className="flex items-center gap-2 border-b-2 border-term-line bg-term-bar px-3 py-2">
					{dots.map((tone) => (
						<span key={tone} aria-hidden="true" className={cn("size-2.5 rounded-pill", tone)} />
					))}
					<Text as="span" size="label" className="ml-2 text-term-dim">
						{title}
					</Text>
					<Button size="sm" tone="ghost" onClick={() => setTyped(0)} disabled={!done || reduced} aria-label="Replay the animation" className="ml-auto border-term-line text-term-dim">
						↻ Replay
					</Button>
				</div>
				<div className="p-4 font-mono text-sm leading-relaxed">
					{lines.map((line, index) => (
						<div key={index} className={cn("whitespace-pre-wrap pl-[8ch] -indent-[8ch]", colors[line.who], index < shown ? "visible" : "invisible")}>
							<span className="opacity-75">{prefixes[line.who].padEnd(8, " ")}</span>
							{line.text}
						</div>
					))}
				</div>
			</div>
			{caption ? (
				<Text as="figcaption" size="small" tone="soft" align="center" className="mt-2">
					{caption}
				</Text>
			) : null}
		</figure>
	)
}
