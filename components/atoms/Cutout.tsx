import { cva, type VariantProps } from "class-variance-authority"
import Image from "next/image"

import { photos, type PhotoId } from "@/data/photos"
import { cn } from "@/lib/cn"

const cutoutStyles = cva("h-auto w-full select-none", {
	variants: {
		outline: {
			none: "",
			paper: "sticker-outline-paper",
			ink: "sticker-outline-ink",
		},
		size: {
			full: "",
			md: "mx-auto max-w-xs",
			hero: "h-auto w-full",
		},
		float: {
			true: "animate-float",
			false: "",
		},
	},
	defaultVariants: { outline: "paper", size: "full", float: false },
})

export interface CutoutProps extends VariantProps<typeof cutoutStyles> {
	photo: PhotoId
	alt: string
	priority?: boolean
	sizes?: string
	className?: string
}

export function Cutout({ photo, alt, outline, size, float, priority = false, sizes = "(min-width: 1024px) 40vw, 80vw", className }: CutoutProps) {
	const { src, width, height } = photos[photo]
	return <Image src={src} width={width} height={height} alt={alt} priority={priority} sizes={sizes} draggable={false} className={cn(cutoutStyles({ outline, size, float }), className)} />
}
