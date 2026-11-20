'use client'
import { useEffect, useId, useRef, type ReactNode } from "react"

interface Props {
	title: string
	children: ReactNode
	/** Buttons. The first one gets the focus. */
	actions: ReactNode
	/** Called on Escape and on a click outside the box. */
	onDismiss: () => void
}

/** Small accessible dialog used by the language notices. */
export default function Modal({ title, children, actions, onDismiss }: Props) {
	const titleId = useId()
	const box = useRef<HTMLDivElement>(null)

	useEffect(() => {
		box.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus()
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onDismiss()
		}
		window.addEventListener("keydown", onKey)
		return () => window.removeEventListener("keydown", onKey)
	}, [onDismiss])

	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby={titleId}
			onClick={onDismiss}
			data-no-translate
			style={{ position: "fixed", inset: 0, zIndex: 3000, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
		>
			<div ref={box} className="bg-body text-body border rounded-4 shadow-lg p-4 p-md-5" style={{ maxWidth: 520, width: "100%" }} onClick={(e) => e.stopPropagation()}>
				<h4 id={titleId} className="mb-3">{title}</h4>
				{children}
				<div className="d-flex flex-wrap align-items-center gap-2 mt-4">{actions}</div>
			</div>
		</div>
	)
}
