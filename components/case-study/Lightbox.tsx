"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

import { Button } from "@/components/atoms/Button"
import { Icon } from "@/components/atoms/Icon"
import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"

export interface LightboxItem {
	src: string
	alt: string
	caption?: string
	width: number
	height: number
}

export interface LightboxProps {
	items: LightboxItem[]
	index: number
	onClose: () => void
	onStep: (delta: number) => void
}

export function Lightbox({ items, index, onClose, onStep }: LightboxProps) {
	const ref = useRef<HTMLDialogElement>(null)
	const current = items[index]

	useEffect(() => {
		const dialog = ref.current
		if (!dialog) return
		if (!dialog.open) dialog.showModal()
		return () => dialog.close()
	}, [])

	useEffect(() => {
		const onKey = (event: KeyboardEvent) => {
			if (event.key === "ArrowRight") onStep(1)
			if (event.key === "ArrowLeft") onStep(-1)
		}
		window.addEventListener("keydown", onKey)
		return () => window.removeEventListener("keydown", onKey)
	}, [onStep])

	return (
		<dialog
			ref={ref}
			aria-label={current.alt}
			data-no-translate
			onCancel={(event) => {
				event.preventDefault()
				onClose()
			}}
			onClick={(event) => {
				if (event.target === event.currentTarget) onClose()
			}}
			className="m-0 h-dvh max-h-none w-dvw max-w-none bg-transparent p-4 text-paper backdrop:bg-ink/95"
		>
			<Stack align="center" justify="center" gap="md" className="h-full">
				<Image src={current.src} alt={current.alt} width={current.width} height={current.height} sizes="100vw" className="h-auto max-h-[78vh] w-auto max-w-full border-2 border-paper object-contain" />
				<Text size="small" tone="paper" align="center">
					{current.caption ?? current.alt} ({index + 1}/{items.length})
				</Text>
				<Stack direction="row" gap="sm" align="center">
					{items.length > 1 ? (
						<Button size="sm" tone="paper" aria-label="Previous image" onClick={() => onStep(-1)}>
							<Icon name="arrow-left" size="sm" />
						</Button>
					) : null}
					<Button size="sm" tone="accent" data-autofocus onClick={onClose}>
						Close
					</Button>
					{items.length > 1 ? (
						<Button size="sm" tone="paper" aria-label="Next image" onClick={() => onStep(1)}>
							<Icon name="arrow-right" size="sm" />
						</Button>
					) : null}
				</Stack>
			</Stack>
		</dialog>
	)
}
