"use client"

import gsap from "gsap"
import { useEffect, useRef, type ReactNode } from "react"

import { prefersCoarsePointer, prefersReducedMotion } from "@/lib/motion"

export interface TiltProps {
	children: ReactNode
	max?: number
	className?: string
}

export function Tilt({ children, max = 8, className }: TiltProps) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const element = ref.current
		if (!element || window.matchMedia(`${prefersReducedMotion}, ${prefersCoarsePointer}`).matches) return

		gsap.set(element, { transformPerspective: 900 })
		const rotateX = gsap.quickTo(element, "rotationX", { duration: 0.7, ease: "power3.out" })
		const rotateY = gsap.quickTo(element, "rotationY", { duration: 0.7, ease: "power3.out" })

		const onMove = (event: PointerEvent) => {
			const box = element.getBoundingClientRect()
			const px = (event.clientX - (box.left + box.width / 2)) / (box.width / 2)
			const py = (event.clientY - (box.top + box.height / 2)) / (box.height / 2)
			rotateY(gsap.utils.clamp(-1, 1, px) * max)
			rotateX(gsap.utils.clamp(-1, 1, py) * -max)
		}
		const onLeave = () => {
			rotateX(0)
			rotateY(0)
		}

		element.addEventListener("pointermove", onMove)
		element.addEventListener("pointerleave", onLeave)
		return () => {
			element.removeEventListener("pointermove", onMove)
			element.removeEventListener("pointerleave", onLeave)
			gsap.set(element, { clearProps: "transform" })
		}
	}, [max])

	return (
		<div ref={ref} className={className ?? "h-full"}>
			{children}
		</div>
	)
}
