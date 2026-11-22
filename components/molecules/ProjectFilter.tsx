"use client"

import { useState } from "react"

import { Button } from "@/components/atoms/Button"
import { Reveal } from "@/components/atoms/Reveal"
import { Stack } from "@/components/atoms/Stack"
import type { Project, ProjectCategory } from "@/data/projects"

import { ProjectCarousel, type ProjectCarouselLabels } from "./ProjectCarousel"

export interface FilterCategory {
	key: ProjectCategory
	label: string
}

export interface ProjectFilterProps {
	projects: Project[]
	categories: FilterCategory[]
	allLabel: string
	limit: number
	carousel: ProjectCarouselLabels
}

type ActiveFilter = ProjectCategory | "all"

export function ProjectFilter({ projects, categories, allLabel, limit, carousel }: ProjectFilterProps) {
	const [active, setActive] = useState<ActiveFilter>("all")
	const labels = Object.fromEntries(categories.map((category) => [category.key, category.label])) as Record<ProjectCategory, string>
	const visible = (active === "all" ? projects : projects.filter((project) => project.categories.includes(active))).slice(0, limit)

	return (
		<Stack gap="lg">
			<Stack direction="row" gap="sm" wrap>
				<Button size="sm" tone={active === "all" ? "accent" : "ghost"} aria-pressed={active === "all"} onClick={() => setActive("all")}>
					{allLabel}
				</Button>
				{categories.map((category) => (
					<Button key={category.key} size="sm" tone={active === category.key ? "accent" : "ghost"} aria-pressed={active === category.key} onClick={() => setActive(category.key)}>
						{category.label}
					</Button>
				))}
			</Stack>
			<Reveal>
				<ProjectCarousel key={active} projects={visible} categoryLabels={labels} labels={carousel} />
			</Reveal>
		</Stack>
	)
}
