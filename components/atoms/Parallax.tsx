"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, type ReactNode } from "react"

export interface ParallaxProps {
	children: ReactNode
	distance?: number
	className?: string
}

export function Parallax({ children, distance = 60, className }: ParallaxProps) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const element = ref.current
		if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
		gsap.registerPlugin(ScrollTrigger)
		const context = gsap.context(() => {
			gsap.fromTo(
				element,
				{ y: distance },
				{ y: -distance, ease: "none", scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: true } },
			)
		}, element)
		return () => context.revert()
	}, [distance])

	return (
		<div ref={ref} className={className}>
			{children}
		</div>
	)
}
