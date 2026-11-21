import { projects } from "@/data/projects"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { computeHomeStats } from "@/lib/stats"

import { HomeContact } from "./HomeContact"
import { HomeStats } from "./HomeStats"

export interface ClosingSectionsProps {
	lang: Locale
}

export function ClosingSections({ lang }: ClosingSectionsProps) {
	const { home } = getDictionary(lang)
	return (
		<>
			<HomeStats labels={home.stats} values={computeHomeStats(projects)} />
			<HomeContact copy={home.contact} />
		</>
	)
}
