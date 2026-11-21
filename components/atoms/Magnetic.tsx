"use client"

import gsap from "gsap"
import { useEffect, useRef, type ReactNode } from "react"

import { prefersCoarsePointer, prefersReducedMotion } from "@/lib/motion"

export interface MagneticProps {
	children: ReactNode
	strength?: number
	className?: string
}

export function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const element = ref.current
		if (!element || window.matchMedia(`${prefersReducedMotion}, ${prefersCoarsePointer}`).matches) return

		const moveX = gsap.quickTo(element, "x", { duration: 0.9, ease: "elastic.out(1, 0.4)" })
		const moveY = gsap.quickTo(element, "y", { duration: 0.9, ease: "elastic.out(1, 0.4)" })

		const onMove = (event: PointerEvent) => {
			const box = element.getBoundingClientRect()
			moveX((event.clientX - (box.left + box.width / 2)) * strength)
			moveY((event.clientY - (box.top + box.height / 2)) * strength)
		}
		const onLeave = () => {
			moveX(0)
			moveY(0)
		}

		element.addEventListener("pointermove", onMove)
		element.addEventListener("pointerleave", onLeave)
		return () => {
			element.removeEventListener("pointermove", onMove)
			element.removeEventListener("pointerleave", onLeave)
			gsap.set(element, { clearProps: "transform" })
		}
	}, [strength])

	return (
		<div ref={ref} className={className ?? "inline-block"}>
			{children}
		</div>
	)
}
