import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

import Layout from "@/components/layout/Layout"
import ImageGallery from "@/components/projects/ImageGallery"
import TerminalDemo, { type TerminalLine } from "@/components/projects/TerminalDemo"
import { getImageSize } from "@/util/image-size"

/** Page shell shared by project detail pages. */
export function ProjectPage({ children }: { children: ReactNode }) {
	return (
		<Layout headerStyle={1} footerStyle={1}>
			<div>
				<section className="section-work-single section-padding">
					<div className="container">
						<div className="row">{children}</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export interface ProjectLink {
	label: string
	href: string
	icon?: string
}

interface HeaderProps {
	/** Top pill button (e.g. "View on GitHub"). Omit for private projects. */
	badge?: ProjectLink
	/** Small status text above the title (e.g. "Work in progress"). */
	status?: string
	title: string
	summary: string
	meta: { label: string; value: string }[]
	/** Image under the header; rendered only if the file exists. */
	hero?: { src: string; alt: string }
}

export function ProjectHeader({ badge, status, title, summary, meta, hero }: HeaderProps) {
	return (
		<>
			<div className="col-lg-8 mx-lg-auto mb-lg-0">
				<div className="text-center">
					{badge && (
						<Link href={badge.href} target="_blank" className="btn btn-gradient d-inline-block text-uppercase">
							{badge.label}
						</Link>
					)}
					{status && <p className="text-primary-1 text-uppercase fw-bold mt-3 mb-0">{status}</p>}
					<h3 className="ds-3 mt-3 mb-4 text-dark">{title}</h3>
					<p className="text-300 fs-5 mb-0">{summary}</p>
				</div>
			</div>
			<div className="d-flex flex-wrap justify-content-center gap-4 py-8">
				{meta.map((item) => (
					<div key={item.label} className="bg-6 px-5 py-3 rounded-2">
						<p className="text-300 mb-0">{item.label}</p>
						<h6>{item.value}</h6>
					</div>
				))}
			</div>
			{hero && (
				<div className="col-12 mb-5">
					<Figure src={hero.src} alt={hero.alt} priority />
				</div>
			)}
		</>
	)
}

/** Centered text column. */
export function ProjectBody({ children }: { children: ReactNode }) {
	return <div className="col-lg-8 mx-lg-auto mt-8">{children}</div>
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
	return (
		<>
			<h5 className="fs-5 fw-medium mt-5">{title}</h5>
			{children}
		</>
	)
}

export function Paragraph({ children }: { children: ReactNode }) {
	return <p className="text-300">{children}</p>
}

export function FeatureList({ items }: { items: { title: string; text: string }[] }) {
	return (
		<ul>
			{items.map((item) => (
				<li key={item.title}>
					<p className="text-dark fw-bold">
						{item.title}: <span className="text-300 fw-medium">{item.text}</span>
					</p>
				</li>
			))}
		</ul>
	)
}

interface FigureProps {
	src: string
	alt: string
	caption?: string
	priority?: boolean
	/** Centered, phone-width image (for portrait mobile screenshots). */
	narrow?: boolean
}

/** Full-width image with optional caption. Renders nothing if the file is missing. */
export function Figure({ src, alt, caption, priority, narrow }: FigureProps) {
	const size = getImageSize(src)
	if (!size) {
		if (process.env.NODE_ENV !== "production") console.warn(`[Figure] image not found or unreadable: public${src} (cwd: ${process.cwd()})`)
		return null
	}
	return (
		<figure className="my-4" style={narrow ? { maxWidth: 340, margin: "1.5rem auto" } : undefined}>
			<Image
				src={src}
				alt={alt}
				width={size.width}
				height={size.height}
				sizes="(min-width: 992px) 900px, 100vw"
				priority={priority}
				className="rounded-3 border shadow-sm"
				style={{ width: "100%", height: "auto" }}
			/>
			{caption && <figcaption className="text-muted text-center mt-2 fs-7">{caption}</figcaption>}
		</figure>
	)
}

/** Side-by-side images (stacked on mobile). Missing files are skipped. */
export function FigureGrid({ images }: { images: FigureProps[] }) {
	const available = images.filter((img) => getImageSize(img.src))
	if (available.length === 0) return null
	return (
		<div className="row my-4">
			{available.map((img) => (
				<div key={img.src} className="col-md-6 mb-3">
					<Figure {...img} />
				</div>
			))}
		</div>
	)
}

export function ProjectCTA({ links }: { links: ProjectLink[] }) {
	return (
		<div className="mt-5">
			{links.map((link, i) => {
				const external = link.href.startsWith("http")
				return (
					<Link
						key={link.label}
						href={link.href}
						target={external ? "_blank" : undefined}
						className={i === 0 ? "btn btn-gradient me-2" : "btn btn-outline-secondary me-2"}
					>
						{link.label}
						{link.icon && <i className={`${link.icon} ms-2`} />}
					</Link>
				)
			})}
		</div>
	)
}

/* ------------------------------------------------------------------ */
/* Narrative blocks (same look as the Teller / Take Away case studies) */
/* ------------------------------------------------------------------ */

export function SubHeading({ children }: { children: ReactNode }) {
	return <h6 className="mt-4 fw-semibold">{children}</h6>
}

/** Colored callout: danger = the problem, success = the solution, info = a note. */
export function Callout({ tone, title, children }: { tone: "danger" | "success" | "info"; title: string; children: ReactNode }) {
	return (
		<div className={`mt-6 mb-4 p-4 bg-light rounded-3 border-start border-${tone} border-4`}>
			<h5 className={`fs-5 fw-medium text-${tone} mb-3`}>{title}</h5>
			{children}
		</div>
	)
}

/** Numbered process tiles (e.g. 01 DEFINE / 02 RESEARCH ...). */
export function ProcessSteps({ steps }: { steps: { label: string; hint: string }[] }) {
	return (
		<div className="row text-center mt-4 mb-5 g-3">
			{steps.map((step, i) => (
				<div key={step.label} className="col-6 col-md-3">
					<div className="p-3 rounded-3 border bg-light h-100">
						<div className="fw-bold text-300 fs-5">{String(i + 1).padStart(2, "0")}</div>
						<div className="fw-semibold text-300 mt-2">{step.label}</div>
						<div className="text-force-gray text-uppercase small mt-1">{step.hint}</div>
					</div>
				</div>
			))}
		</div>
	)
}

/** Dark pull quote / statement. */
export function Quote({ children, cite }: { children: ReactNode; cite?: string }) {
	return (
		<blockquote className="my-4 p-4 bg-dark text-white rounded-3">
			<p className="mb-0 fs-5" style={{ color: "white" }}>{children}</p>
			{cite && <p className="mb-0 mt-2 small" style={{ color: "rgba(255,255,255,0.75)" }}>{cite}</p>}
		</blockquote>
	)
}

/** Big-number tiles for outcomes. */
export function StatTiles({ items }: { items: { value: string; label: string }[] }) {
	return (
		<div className="d-flex flex-wrap justify-content-center gap-3 my-4">
			{items.map((item) => (
				<div key={item.label} className="bg-6 px-4 py-3 rounded-2 text-center">
					<h4 className="mb-1">{item.value}</h4>
					<p className="text-300 mb-0 small">{item.label}</p>
				</div>
			))}
		</div>
	)
}

/** Simple responsive table. */
export function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
	return (
		<div className="table-responsive my-4 p-2 bg-light rounded-3">
			<table className="table table-borderless align-middle mb-0">
				<thead>
					<tr>
						{head.map((h) => (
							<th key={h} className="text-dark small text-uppercase">{h}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, i) => (
						<tr key={i}>
							{row.map((cell, j) => (
								<td key={j} className={j === 0 ? "text-dark fw-semibold" : "text-300"}>{cell}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

/** Dark closing block with lessons learned and next steps. */
export function Takeaways({ title = "Key Takeaways", items, next }: { title?: string; items: { title: string; text: string }[]; next?: string }) {
	return (
		<div className="mt-8 p-4 bg-dark text-white rounded-3">
			<h6 className="fw-semibold mb-3" style={{ color: "white" }}>{title}</h6>
			<ul className="mb-3" style={{ color: "white" }}>
				{items.map((item, i) => (
					<li key={item.title} className={i === items.length - 1 ? "mb-0" : "mb-3"}>
						<strong style={{ color: "white" }}>{item.title}:</strong> {item.text}
					</li>
				))}
			</ul>
			{next && (
				<>
					<hr className="border-secondary opacity-25 my-3" />
					<p className="mb-0 small" style={{ color: "rgba(255,255,255,0.75)" }}>
						<strong style={{ color: "white" }}>Next steps:</strong> {next}
					</p>
				</>
			)}
		</div>
	)
}

/** Grid of thumbnails with click-to-zoom. Missing files are skipped. */
export function Gallery({ images }: { images: { src: string; alt: string; caption?: string }[] }) {
	const items = images.flatMap((img) => {
		const size = getImageSize(img.src)
		return size ? [{ ...img, ...size }] : []
	})
	if (items.length === 0) return null
	return <ImageGallery items={items} />
}

/** Animated, illustrative terminal session (client component, plays when scrolled into view). */
export function Terminal({ title, lines, caption }: { title: string; lines: TerminalLine[]; caption?: string }) {
	return <TerminalDemo title={title} lines={lines} caption={caption} />
}
