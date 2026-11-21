import Image from "next/image"

import { Grid } from "@/components/atoms/Grid"
import { Text } from "@/components/atoms/Text"
import { cn } from "@/lib/cn"
import { getImageSize } from "@/util/image-size"

import { BentoGrid, type BentoSpan } from "./BentoGrid"
import { ImageCarousel } from "./ImageCarousel"
import { ImageGallery } from "./ImageGallery"
import { TerminalDemo, type TerminalLine } from "./TerminalDemo"

export interface FigureProps {
	src: string
	alt: string
	caption?: string
	priority?: boolean
	narrow?: boolean
}

export function Figure({ src, alt, caption, priority, narrow }: FigureProps) {
	const size = getImageSize(src)
	if (!size) {
		if (process.env.NODE_ENV !== "production") console.warn(`[Figure] image not found or unreadable: public${src} (cwd: ${process.cwd()})`)
		return null
	}
	return (
		<figure className={cn("my-6", narrow && "mx-auto max-w-xs")}>
			<Image
				src={src}
				alt={alt}
				width={size.width}
				height={size.height}
				sizes="(min-width: 1024px) 900px, 100vw"
				priority={priority}
				className="h-auto w-full border-2 border-ink bg-white shadow-sticker"
			/>
			{caption ? (
				<Text as="figcaption" size="small" tone="soft" align="center" className="mt-3">
					{caption}
				</Text>
			) : null}
		</figure>
	)
}

export function FigureGrid({ images }: { images: FigureProps[] }) {
	const available = images.filter((image) => getImageSize(image.src))
	if (available.length === 0) return null
	return (
		<Grid columns={2} gap="md" align="start" className="my-6">
			{available.map((image) => (
				<Figure key={image.src} {...image} />
			))}
		</Grid>
	)
}

interface ImageSpec {
	src: string
	alt: string
	caption?: string
}

const withSizes = (images: ImageSpec[]) =>
	images.flatMap((image) => {
		const size = getImageSize(image.src)
		return size ? [{ ...image, ...size }] : []
	})

export function Gallery({ images }: { images: ImageSpec[] }) {
	const items = withSizes(images)
	if (items.length === 0) return null
	return <ImageGallery items={items} />
}

export function Carousel({ images, interval }: { images: ImageSpec[]; interval?: number }) {
	const items = withSizes(images)
	if (items.length === 0) return null
	return <ImageCarousel items={items} interval={interval} />
}

export function Terminal({ title, lines, caption }: { title: string; lines: TerminalLine[]; caption?: string }) {
	return <TerminalDemo title={title} lines={lines} caption={caption} />
}

export function ScreenStrip({ images }: { images: ImageSpec[] }) {
	const items = withSizes(images)
	if (items.length === 0) return null
	return (
		<div className="my-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
			{items.map((item) => (
				<Image key={item.src} src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="280px" className="h-auto w-70 shrink-0 snap-center border-2 border-ink bg-white shadow-sticker" />
			))}
		</div>
	)
}

export function Bento({ images }: { images: (ImageSpec & { span: BentoSpan })[] }) {
	const items = images.flatMap((image) => {
		const size = getImageSize(image.src)
		return size ? [{ ...image, ...size }] : []
	})
	if (items.length === 0) return null
	return <BentoGrid items={items} />
}
