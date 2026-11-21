"use client"

import Image from "next/image"
import { useCallback, useState } from "react"

import { cn } from "@/lib/cn"

import { Lightbox, type LightboxItem } from "./Lightbox"

export type BentoSpan = "square" | "wide" | "tall"

export interface BentoItem extends LightboxItem {
	span: BentoSpan
}

const spans: Record<BentoSpan, string> = {
	square: "",
	wide: "col-span-2",
	tall: "row-span-2",
}

export function BentoGrid({ items }: { items: BentoItem[] }) {
	const [open, setOpen] = useState<number | null>(null)

	const step = useCallback(
		(delta: number) => {
			setOpen((current) => (current === null ? current : (current + delta + items.length) % items.length))
		},
		[items.length],
	)

	return (
		<>
			<div className="my-6 grid auto-rows-[12.5rem] grid-cols-2 gap-4 md:grid-cols-4">
				{items.map((item, index) => (
					<button
						key={item.src}
						type="button"
						onClick={() => setOpen(index)}
						aria-label={`Enlarge: ${item.alt}`}
						className={cn(
							"group relative cursor-zoom-in overflow-hidden border-2 border-ink bg-white shadow-sticker transition-transform duration-snap ease-snap hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
							spans[item.span],
						)}
					>
						<Image src={item.src} alt={item.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover object-top transition-transform duration-500 ease-snap group-hover:scale-105" />
					</button>
				))}
			</div>
			{open !== null ? <Lightbox items={items} index={open} onClose={() => setOpen(null)} onStep={step} /> : null}
		</>
	)
}
