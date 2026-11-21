import type { Project } from "@/data/projects"
import { experienceStart } from "@/data/site"

export interface HomeStats {
	years: number
	projects: number
	web: number
	automation: number
	wordpress: number
}

export function yearsSince(start: Date, now: Date = new Date()): number {
	let years = now.getFullYear() - start.getFullYear()
	const anniversary = new Date(now.getFullYear(), start.getMonth(), start.getDate())
	if (now < anniversary) years -= 1
	return Math.max(years, 0)
}

export function computeHomeStats(projects: readonly Project[]): HomeStats {
	const count = (predicate: (project: Project) => boolean): number => projects.filter(predicate).length
	return {
		years: yearsSince(experienceStart),
		projects: projects.length,
		web: count((project) => project.categories.includes("uxui") || project.categories.includes("fullstack")),
		automation: count((project) => project.categories.includes("automation")),
		wordpress: count((project) => project.categories.includes("wordpress")),
	}
}
