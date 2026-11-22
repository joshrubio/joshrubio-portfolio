"use client"

import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/atoms/Button"
import { Icon } from "@/components/atoms/Icon"
import { Stack } from "@/components/atoms/Stack"
import type { Project, ProjectCategory } from "@/data/projects"
import { cn } from "@/lib/cn"
import { prefersReducedMotion } from "@/lib/motion"

import { ProjectCard } from "./ProjectCard"

const pageSize = 4
const autoplayDelay = 8000
const desktopQuery = "(min-width: 768px)"

export interface ProjectCarouselLabels {
	label: string
	previous: string
	next: string
	page: string
}

export interface ProjectCarouselProps {
	projects: Project[]
	categoryLabels: Record<ProjectCategory, string>
	labels: ProjectCarouselLabels
}

function chunk<T>(items: T[], size: number): T[][] {
	return Array.from({ length: Math.ceil(items.length / size) }, (_, index) => items.slice(index * size, index * size + size))
}

export function ProjectCarousel({ projects, categoryLabels, labels }: ProjectCarouselProps) {
	const track = useRef<HTMLDivElement>(null)
	const root = useRef<HTMLDivElement>(null)
	const [active, setActive] = useState(0)
	const [hovered, setHovered] = useState(false)
	const [focused, setFocused] = useState(false)
	const [visible, setVisible] = useState(false)
	const [touched, setTouched] = useState(false)
	const pages = chunk(projects, pageSize)
	const lastPage = pages.length - 1

	const pagePositions = () => {
		const element = track.current
		if (!element) return []
		const paddingLeft = parseFloat(getComputedStyle(element).paddingLeft)
		return Array.from(element.children).map((page) => (page as HTMLElement).offsetLeft - paddingLeft)
	}

	const goTo = (index: number) => {
		const element = track.current
		if (!element) return
		const behavior = window.matchMedia(prefersReducedMotion).matches ? "auto" : "smooth"
		element.scrollTo({ left: pagePositions()[index] ?? 0, behavior })
	}

	const syncActive = () => {
		const element = track.current
		if (!element) return
		const positions = pagePositions()
		const nearest = positions.reduce((best, position, index) => (Math.abs(position - element.scrollLeft) < Math.abs(positions[best] - element.scrollLeft) ? index : best), 0)
		setActive(nearest)
	}

	useEffect(() => {
		const element = root.current
		if (!element) return
		const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 })
		observer.observe(element)
		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (lastPage < 1 || hovered || focused || touched || !visible) return
		const timer = window.setInterval(() => {
			if (!window.matchMedia(desktopQuery).matches || window.matchMedia(prefersReducedMotion).matches) return
			goTo(active >= lastPage ? 0 : active + 1)
		}, autoplayDelay)
		return () => window.clearInterval(timer)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active, lastPage, hovered, focused, touched, visible])

	return (
		<div
			ref={root}
			role="region"
			aria-roledescription="carousel"
			aria-label={labels.label}
			onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(true)}
			onPointerLeave={() => setHovered(false)}
			onPointerDown={(event) => event.pointerType !== "mouse" && setTouched(true)}
			onFocus={() => setFocused(true)}
			onBlur={() => setFocused(false)}
		>
			<div ref={track} onScroll={syncActive} className="relative -mx-3 flex snap-x snap-mandatory gap-6 overflow-x-auto px-3 pb-6 pt-3 [scrollbar-width:none] md:gap-10 [&::-webkit-scrollbar]:hidden">
				{pages.map((page, pageIndex) => (
					<div key={page[0].slug} role="group" aria-roledescription="slide" aria-label={`${pageIndex + 1} / ${pages.length}`} className="contents md:grid md:w-full md:shrink-0 md:snap-start md:grid-cols-2 md:gap-10">
						{page.map((project) => (
							<div key={project.slug} className="w-[85%] shrink-0 snap-start md:h-full md:w-auto">
								<ProjectCard project={project} categoryLabels={categoryLabels} />
							</div>
						))}
					</div>
				))}
			</div>
			{lastPage > 0 && (
				<Stack direction="row" justify="center" align="center" gap="md" className="mt-4 hidden md:flex">
					<Button size="sm" tone="paper" aria-label={labels.previous} onClick={() => goTo(active <= 0 ? lastPage : active - 1)}>
						<Icon name="arrow-left" />
					</Button>
					<Stack direction="row" gap="sm" align="center">
						{pages.map((page, pageIndex) => (
							<button
								key={page[0].slug}
								type="button"
								aria-label={labels.page.replace("{page}", String(pageIndex + 1)).replace("{total}", String(pages.length))}
								aria-current={pageIndex === active}
								onClick={() => goTo(pageIndex)}
								className={cn("size-3 border-2 border-ink transition-colors duration-snap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent", pageIndex === active ? "bg-accent" : "bg-paper")}
							/>
						))}
					</Stack>
					<Button size="sm" tone="paper" aria-label={labels.next} onClick={() => goTo(active >= lastPage ? 0 : active + 1)}>
						<Icon name="arrow-right" />
					</Button>
				</Stack>
			)}
		</div>
	)
}
