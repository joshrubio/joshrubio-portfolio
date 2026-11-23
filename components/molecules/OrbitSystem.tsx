"use client"

import { useReducedMotion } from "framer-motion"
import { useEffect, useRef } from "react"

import { cn } from "@/lib/cn"

type Tone = "accent" | "ink" | "paper"

interface Satellite {
	radius: number
	tone: Tone
	/** Where on the circle it starts, as a fraction of a lap. */
	phase: number
}

interface Orbit {
	radius: number
	/** Seconds for one lap; negative runs the other way. */
	period: number
	dashed?: boolean
	accent?: boolean
	satellites: readonly Satellite[]
}

const CENTER_X = 240
const CENTER_Y = 320

const orbits: readonly Orbit[] = [
	{ radius: 150, period: 14, satellites: [{ radius: 6, tone: "accent", phase: 0.1 }] },
	{
		radius: 215,
		period: -22,
		dashed: true,
		satellites: [
			{ radius: 5, tone: "ink", phase: 0.55 },
			{ radius: 5, tone: "paper", phase: 0.05 },
		],
	},
	{ radius: 280, period: 32, accent: true, satellites: [{ radius: 7, tone: "ink", phase: 0.35 }] },
	{
		radius: 345,
		period: -44,
		dashed: true,
		satellites: [
			{ radius: 5, tone: "accent", phase: 0.8 },
			{ radius: 4, tone: "ink", phase: 0.3 },
		],
	},
	{ radius: 410, period: 60, satellites: [{ radius: 6, tone: "paper", phase: 0.6 }] },
]

const toneClass: Record<Tone, string> = {
	accent: "fill-accent stroke-ink stroke-[2.5]",
	ink: "fill-ink",
	paper: "fill-white stroke-ink stroke-[2.5]",
}

function place(cx: number, cy: number, radius: number, turns: number) {
	const angle = turns * Math.PI * 2
	return `translate(${(cx + Math.cos(angle) * radius).toFixed(1)} ${(cy + Math.sin(angle) * radius).toFixed(1)})`
}

/** Full concentric circles with small satellites running along them, behind the portrait. Coordinates follow the cutout (480 wide), so it scales and stays in place with the photo. */
export function OrbitSystem() {
	const reduceMotion = useReducedMotion()
	const root = useRef<SVGSVGElement>(null)

	useEffect(() => {
		const svg = root.current
		if (!svg || reduceMotion) return
		const bodies = Array.from(svg.querySelectorAll<SVGGElement>("[data-orbit]"))
		let frame = 0
		const start = performance.now()
		const tick = (now: number) => {
			const seconds = (now - start) / 1000
			for (const body of bodies) {
				const index = Number(body.dataset.orbit)
				const phase = Number(body.dataset.phase)
				body.setAttribute("transform", place(CENTER_X, CENTER_Y, orbits[index].radius, phase + seconds / orbits[index].period))
			}
			frame = requestAnimationFrame(tick)
		}
		frame = requestAnimationFrame(tick)
		return () => cancelAnimationFrame(frame)
	}, [reduceMotion])

	return (
		<svg ref={root} aria-hidden="true" viewBox="0 0 480 1414" className="pointer-events-none absolute left-0 top-0 z-0 h-auto w-full overflow-visible max-lg:hidden">
			{orbits.map((orbit) => (
				<circle
					key={orbit.radius}
					cx={CENTER_X}
					cy={CENTER_Y}
					r={orbit.radius}
					className={cn("fill-none stroke-[2.5]", orbit.accent ? "stroke-accent stroke-[4]" : "stroke-ink", orbit.dashed && "[stroke-dasharray:3_11] [stroke-linecap:round]")}
				/>
			))}

			{orbits.map((orbit, index) =>
				orbit.satellites.map((satellite) => (
					<g key={`${orbit.radius}-${satellite.phase}`} data-orbit={index} data-phase={satellite.phase} transform={place(CENTER_X, CENTER_Y, orbit.radius, satellite.phase)}>
						<circle r={satellite.radius} className={toneClass[satellite.tone]} />
					</g>
				)),
			)}
		</svg>
	)
}
