'use client'
import { useCallback, useEffect, useRef, useState } from "react"

export type TerminalRole = "you" | "agent" | "flag" | "ok" | "dim"

export interface TerminalLine {
	who: TerminalRole
	text: string
}

const COLORS: Record<TerminalRole, string> = {
	you: "#5eead4",
	agent: "#a5b4fc",
	flag: "#fbbf24",
	ok: "#86efac",
	dim: "#94a3b8",
}

const PREFIX: Record<TerminalRole, string> = {
	you: "you ›",
	agent: "agent ›",
	flag: "  ⚑",
	ok: "  ✓",
	dim: "   ",
}

/**
 * Animated, illustrative terminal session. Lines are typed in one by one when the block
 * scrolls into view; a replay button restarts it. With reduced motion everything shows at once.
 */
export default function TerminalDemo({ title, lines, caption }: { title: string; lines: TerminalLine[]; caption?: string }) {
	const [shown, setShown] = useState(0)
	const [started, setStarted] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	const reduced = useRef(false)

	useEffect(() => {
		reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
		if (reduced.current) {
			setShown(lines.length)
			setStarted(true)
			return
		}
		const el = ref.current
		if (!el) return
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setStarted(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.4 }
		)
		observer.observe(el)
		return () => observer.disconnect()
	}, [lines.length])

	useEffect(() => {
		if (!started || shown >= lines.length) return
		const previous = shown > 0 ? lines[shown - 1] : null
		// pause a little longer after the writer's line, as if the agent were thinking
		const delay = previous?.who === "you" ? 900 : 380
		const timer = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 250 : delay)
		return () => clearTimeout(timer)
	}, [started, shown, lines])

	const replay = useCallback(() => setShown(0), [])
	const done = shown >= lines.length

	return (
		<figure className="my-4">
			<div
				ref={ref}
				className="rounded-3 shadow-sm"
				style={{ background: "#0b0f17", border: "1px solid #1e293b", overflow: "hidden" }}
			>
				<div className="d-flex align-items-center px-3 py-2" style={{ background: "#111827", borderBottom: "1px solid #1e293b" }}>
					<span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", marginRight: 6 }} />
					<span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b", marginRight: 6 }} />
					<span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", marginRight: 12 }} />
					<span className="small" style={{ color: "#94a3b8", fontFamily: "Consolas, 'Courier New', monospace" }}>{title}</span>
					<button
						type="button"
						onClick={replay}
						disabled={!done}
						className="btn btn-sm ms-auto"
						style={{ color: "#94a3b8", border: "1px solid #334155", opacity: done ? 1 : 0.4, fontSize: "0.75rem" }}
						aria-label="Replay the animation"
					>
						↻ Replay
					</button>
				</div>
				<div className="p-3" style={{ fontFamily: "Consolas, 'Courier New', monospace", fontSize: "0.85rem", lineHeight: 1.65 }}>
					{lines.map((line, i) => (
						<div
							key={i}
							style={{
								color: COLORS[line.who],
								visibility: i < shown ? "visible" : "hidden",
								whiteSpace: "pre-wrap",
								paddingLeft: "8ch",
								textIndent: "-8ch",
							}}
						>
							<span style={{ opacity: 0.75 }}>{PREFIX[line.who].padEnd(8," ")}</span>
							{line.text}
						</div>
					))}
				</div>
			</div>
			{caption && <figcaption className="text-muted text-center mt-2 fs-7">{caption}</figcaption>}
		</figure>
	)
}
