'use client'
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

export interface GalleryItem {
	src: string
	alt: string
	caption?: string
	width: number
	height: number
}

/** Thumbnail grid with a click-to-zoom lightbox (Esc closes, arrows navigate). */
export default function ImageGallery({ items }: { items: GalleryItem[] }) {
	const [open, setOpen] = useState<number | null>(null)

	const step = useCallback((delta: number) => {
		setOpen((current) => (current === null ? current : (current + delta + items.length) % items.length))
	}, [items.length])

	useEffect(() => {
		if (open === null) return
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(null)
			if (e.key === "ArrowRight") step(1)
			if (e.key === "ArrowLeft") step(-1)
		}
		window.addEventListener("keydown", onKey)
		return () => window.removeEventListener("keydown", onKey)
	}, [open, step])

	const current = open === null ? null : items[open]

	return (
		<>
			<div className="row g-3 my-4">
				{items.map((item, i) => (
					<div key={item.src} className="col-6 col-md-4">
						<button
							type="button"
							onClick={() => setOpen(i)}
							className="p-0 border-0 bg-transparent w-100 text-start"
							aria-label={`Enlarge: ${item.alt}`}
						>
							<Image
								src={item.src}
								alt={item.alt}
								width={item.width}
								height={item.height}
								sizes="(min-width: 992px) 300px, 50vw"
								className="rounded-3 border shadow-sm"
								style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top", cursor: "zoom-in" }}
							/>
							{item.caption && <span className="d-block text-muted small mt-1">{item.caption}</span>}
						</button>
					</div>
				))}
			</div>

			{current && (
				<div
					role="dialog"
					aria-modal="true"
					aria-label={current.alt}
					onClick={() => setOpen(null)}
					style={{
						position: "fixed", inset: 0, zIndex: 2000, background: "rgba(0,0,0,0.9)",
						display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16,
					}}
				>
					<Image
						src={current.src}
						alt={current.alt}
						width={current.width}
						height={current.height}
						sizes="100vw"
						style={{ maxWidth: "100%", maxHeight: "82vh", width: "auto", height: "auto", objectFit: "contain" }}
					/>
					<p className="mt-3 mb-0 text-center" style={{ color: "white" }}>
						{current.caption ?? current.alt} <span style={{ opacity: 0.6 }}>({(open ?? 0) + 1}/{items.length})</span>
					</p>
					<button
						type="button"
						onClick={(e) => { e.stopPropagation(); setOpen(null) }}
						className="btn btn-outline-light btn-sm mt-3"
					>
						Close
					</button>
				</div>
			)}
		</>
	)
}
