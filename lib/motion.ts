import type { Transition } from "framer-motion"

export const springs = {
	snappy: { type: "spring", stiffness: 420, damping: 26 },
	wobbly: { type: "spring", stiffness: 260, damping: 13 },
	soft: { type: "spring", stiffness: 140, damping: 18 },
} as const satisfies Record<string, Transition>

export const easings = {
	snap: [0.2, 0.9, 0.2, 1],
} as const

export const prefersReducedMotion = "(prefers-reduced-motion: reduce)"
export const prefersCoarsePointer = "(pointer: coarse)"
