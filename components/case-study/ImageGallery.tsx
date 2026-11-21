"use client"

import Image from "next/image"
import { useCallback, useState } from "react"

import { Grid } from "@/components/atoms/Grid"
import { Text } from "@/components/atoms/Text"

import { Lightbox, type LightboxItem } from "./Lightbox"

export interface ImageGalleryProps {
	items: LightboxItem[]
}

export function ImageGallery({ items }: ImageGalleryProps) {
	const [open, setOpen] = useState<number | null>(null)

	const step = useCallback(
		(delta: number) => {
			setOpen((current) => (current === null ? current : (current + delta + items.length) % items.length))
		},
		[items.length],
	)

	return (
		<>
			<Grid columns={3} gap="md" className="my-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
				{items.map((item, index) => (
					<button key={item.src} type="button" onClick={() => setOpen(index)} aria-label={`Enlarge: ${item.alt}`} className="group text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
						<Image
							src={item.src}
							alt={item.alt}
							width={item.width}
							height={item.height}
							sizes="(min-width: 1024px) 300px, 50vw"
							className="aspect-[16/10] w-full cursor-zoom-in border-2 border-ink object-cover object-top shadow-sticker transition-transform duration-snap ease-snap group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
						/>
						{item.caption ? (
							<Text as="span" size="small" tone="soft" className="mt-2 block">
								{item.caption}
							</Text>
						) : null}
					</button>
				))}
			</Grid>
			{open !== null ? <Lightbox items={items} index={open} onClose={() => setOpen(null)} onStep={step} /> : null}
		</>
	)
}
