'use client'
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"

export interface CarouselItem {
	src: string
	alt: string
	caption?: string
	width: number
	height: number
}

/**
 * One image at a time, shown whole at its own aspect ratio, advancing in a loop.
 * Autoplay pauses on hover and focus, while the tab is hidden and after a manual pause,
 * and it never starts for people who ask for reduced motion. Arrows, dots and the
 * keyboard (left/right) navigate; clicking an image opens it full size.
 */
export default function ImageCarousel({ items, interval = 5000 }: { items: CarouselItem[]; interval?: number }) {
	const [index, setIndex] = useState(0)
	const [paused, setPaused] = useState(false)
	const [hovering, setHovering] = useState(false)
	const [reduced, setReduced] = useState(false)
	const [zoom, setZoom] = useState(false)
	const root = useRef<HTMLDivElement>(null)
	const count = items.length

	const go = useCallback((to: number) => setIndex(((to % count) + count) % count), [count])

	useEffect(() => {
		const query = window.matchMedia("(prefers-reduced-motion: reduce)")
		const update = () => setReduced(query.matches)
		update()
		query.addEventListener("change", update)
		return () => query.removeEventListener("change", update)
	}, [])

	const running = !paused && !hovering && !reduced && !zoom && count > 1
	useEffect(() => {
		if (!running) return
		const id = window.setInterval(() => {
			if (!document.hidden) setIndex((i) => (i + 1) % count)
		}, interval)
		return () => window.clearInterval(id)
	}, [running, interval, count])

	useEffect(() => {
		if (!zoom) return
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setZoom(false)
			if (e.key === "ArrowRight") go(index + 1)
			if (e.key === "ArrowLeft") go(index - 1)
		}
		window.addEventListener("keydown", onKey)
		return () => window.removeEventListener("keydown", onKey)
	}, [zoom, index, go])

	if (count === 0) return null
	const ratio = `${items[0].width} / ${items[0].height}`
	const current = items[index]
	const arrow: React.CSSProperties = {
		position: "absolute", top: "50%", transform: "translateY(-50%)", width: 40, height: 40, borderRadius: "50%",
		border: "1px solid rgba(0,0,0,0.15)", background: "rgba(255,255,255,0.92)", color: "#111", fontSize: 18, lineHeight: 1,
		display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0,
	}

	return (
		<>
			<div
				ref={root}
				className="my-4"
				role="region"
				aria-roledescription="carousel"
				aria-label={current.alt}
				onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}
				onKeyDown={(e) => {
					if (e.key === "ArrowRight") go(index + 1)
					if (e.key === "ArrowLeft") go(index - 1)
				}}
			>
				<div className="position-relative rounded-3 border shadow-sm overflow-hidden" style={{ aspectRatio: ratio, background: "#f4f2ea" }}>
					{items.map((item, i) => (
						<button
							key={item.src}
							type="button"
							onClick={() => setZoom(true)}
							aria-hidden={i !== index}
							tabIndex={i === index ? 0 : -1}
							aria-label={`Enlarge: ${item.alt}`}
							className="p-0 border-0 bg-transparent"
							style={{
								position: "absolute", inset: 0, width: "100%", height: "100%", cursor: "zoom-in",
								opacity: i === index ? 1 : 0, transition: reduced ? "none" : "opacity 500ms ease", pointerEvents: i === index ? "auto" : "none",
							}}
						>
							<Image
								src={item.src}
								alt={item.alt}
								fill
								sizes="(min-width: 992px) 900px, 100vw"
								style={{ objectFit: "contain" }}
								priority={i === 0}
							/>
						</button>
					))}
					{count > 1 && (
						<>
							<button type="button" aria-label="Previous image" onClick={() => go(index - 1)} style={{ ...arrow, left: 12 }}>‹</button>
							<button type="button" aria-label="Next image" onClick={() => go(index + 1)} style={{ ...arrow, right: 12 }}>›</button>
						</>
					)}
				</div>

				<div className="d-flex align-items-center justify-content-between gap-3 mt-2 flex-wrap">
					<span className="text-muted small" aria-live={running ? "off" : "polite"}>
						{current.caption ?? current.alt}
					</span>
					{count > 1 && (
						<div className="d-flex align-items-center gap-2 flex-shrink-0">
							{items.map((item, i) => (
								<button
									key={item.src}
									type="button"
									aria-label={`Show image ${i + 1} of ${count}`}
									aria-current={i === index}
									onClick={() => go(i)}
									className="p-0 border-0"
									style={{ width: 10, height: 10, borderRadius: "50%", background: i === index ? "#6c5ce7" : "#b9b6ad", cursor: "pointer" }}
								/>
							))}
							{!reduced && (
								<button
									type="button"
									onClick={() => setPaused((p) => !p)}
									aria-label={paused ? "Play slideshow" : "Pause slideshow"}
									className="btn btn-outline-secondary btn-sm py-0 px-2 ms-2"
								>
									{paused ? "Play" : "Pause"}
								</button>
							)}
						</div>
					)}
				</div>
			</div>

			{zoom && (
				<div
					role="dialog"
					aria-modal="true"
					aria-label={current.alt}
					onClick={() => setZoom(false)}
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
						{current.caption ?? current.alt} <span style={{ opacity: 0.6 }}>({index + 1}/{count})</span>
					</p>
					<button type="button" onClick={(e) => { e.stopPropagation(); setZoom(false) }} className="btn btn-outline-light btn-sm mt-3">
						Close
					</button>
				</div>
			)}
		</>
	)
}
