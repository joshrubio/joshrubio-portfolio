"use client"

import { useEffect, useId, useRef, type ReactNode } from "react"

import { Heading } from "@/components/atoms/Heading"
import { Stack } from "@/components/atoms/Stack"

export interface DialogProps {
	title: string
	children: ReactNode
	actions: ReactNode
	onDismiss: () => void
}

export function Dialog({ title, children, actions, onDismiss }: DialogProps) {
	const titleId = useId()
	const ref = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		const dialog = ref.current
		if (!dialog) return
		if (!dialog.open) dialog.showModal()
		dialog.querySelector<HTMLElement>("[data-autofocus]")?.focus()
		return () => dialog.close()
	}, [])

	return (
		<dialog
			ref={ref}
			aria-labelledby={titleId}
			data-no-translate
			onCancel={(event) => {
				event.preventDefault()
				onDismiss()
			}}
			onClick={(event) => {
				if (event.target === event.currentTarget) onDismiss()
			}}
			className="m-auto w-full max-w-lg border-2 border-ink bg-paper p-0 text-ink shadow-sticker backdrop:bg-ink/70"
		>
			<Stack gap="lg" className="p-6 md:p-8">
				<Heading as="h2" size="heading" width="condensed" id={titleId}>
					{title}
				</Heading>
				<Stack gap="md">{children}</Stack>
				<Stack direction="row" gap="sm" align="center" wrap>
					{actions}
				</Stack>
			</Stack>
		</dialog>
	)
}
