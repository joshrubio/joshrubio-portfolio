"use client"

import { useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

import { Button } from "@/components/atoms/Button"
import { Icon } from "@/components/atoms/Icon"
import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"
import { cn } from "@/lib/cn"

import { Lightbox, type LightboxItem } from "./Lightbox"

export interface ImageCarouselProps {
	items: LightboxItem[]
	interval?: number
}

export function ImageCarousel({ items, interval = 5000 }: ImageCarouselProps) {
	const reduced = useReducedMotion() ?? false
	const [index, setIndex] = useState(0)
	const [paused, setPaused] = useState(false)
	const [hovering, setHovering] = useState(false)
	const [zoom, setZoom] = useState(false)
	const count = items.length

	const go = useCallback((to: number) => setIndex(((to % count) + count) % count), [count])

	const running = !paused && !hovering && !reduced && !zoom && count > 1
	useEffect(() => {
		if (!running) return
		const id = window.setInterval(() => {
			if (!document.hidden) setIndex((current) => (current + 1) % count)
		}, interval)
		return () => window.clearInterval(id)
	}, [running, interval, count])

	if (count === 0) return null
	const current = items[index]

	return (
		<>
			<div
				className="my-6"
				role="region"
				aria-roledescription="carousel"
				aria-label={current.alt}
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
				onKeyDown={(event) => {
					if (event.key === "ArrowRight") go(index + 1)
					if (event.key === "ArrowLeft") go(index - 1)
				}}
			>
				<div className="relative grid overflow-hidden border-2 border-ink bg-white shadow-sticker">
					{items.map((item, itemIndex) => (
						<button
							key={item.src}
							type="button"
							onClick={() => setZoom(true)}
							aria-hidden={itemIndex !== index}
							tabIndex={itemIndex === index ? 0 : -1}
							aria-label={`Enlarge: ${item.alt}`}
							className={cn(
								"col-start-1 row-start-1 flex cursor-zoom-in items-center justify-center transition-opacity duration-500",
								itemIndex === index ? "opacity-100" : "pointer-events-none opacity-0",
							)}
						>
							<Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(min-width: 1024px) 900px, 100vw" priority={itemIndex === 0} className="h-auto w-full" />
						</button>
					))}
					{count > 1 ? (
						<>
							<div className="absolute left-3 top-1/2 -translate-y-1/2">
								<Button size="sm" tone="paper" aria-label="Previous image" onClick={() => go(index - 1)}>
									<Icon name="arrow-left" size="sm" />
								</Button>
							</div>
							<div className="absolute right-3 top-1/2 -translate-y-1/2">
								<Button size="sm" tone="paper" aria-label="Next image" onClick={() => go(index + 1)}>
									<Icon name="arrow-right" size="sm" />
								</Button>
							</div>
						</>
					) : null}
				</div>

				<Stack direction="row" align="center" justify="between" gap="md" wrap className="mt-3">
					<Text as="span" size="small" tone="soft" aria-live={running ? "off" : "polite"}>
						{current.caption ?? current.alt}
					</Text>
					{count > 1 ? (
						<Stack direction="row" align="center" gap="sm">
							{items.map((item, itemIndex) => (
								<button
									key={item.src}
									type="button"
									aria-label={`Show image ${itemIndex + 1} of ${count}`}
									aria-current={itemIndex === index}
									onClick={() => go(itemIndex)}
									className={cn("size-3 border-2 border-ink transition-colors duration-snap", itemIndex === index ? "bg-accent" : "bg-paper hover:bg-ink")}
								/>
							))}
							{!reduced ? (
								<Button size="sm" tone="ghost" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play slideshow" : "Pause slideshow"}>
									{paused ? "Play" : "Pause"}
								</Button>
							) : null}
						</Stack>
					) : null}
				</Stack>
			</div>
			{zoom ? <Lightbox items={items} index={index} onClose={() => setZoom(false)} onStep={(delta) => go(index + delta)} /> : null}
		</>
	)
}
