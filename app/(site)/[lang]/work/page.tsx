import { notFound } from "next/navigation"

import { PageHero } from "@/components/molecules/PageHero"
import { ClosingSections } from "@/components/organisms/ClosingSections"
import { WorkList } from "@/components/organisms/WorkList"
import { localizeProject, projects } from "@/data/projects"
import { hasLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

interface WorkProps {
	params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: WorkProps) {
	const { lang } = await params
	const { work } = getDictionary(hasLocale(lang) ? lang : "en")
	return { title: work.metaTitle, description: work.metaDescription }
}

export default async function Work({ params }: WorkProps) {
	const { lang } = await params
	if (!hasLocale(lang)) notFound()
	const { work, card } = getDictionary(lang)
	const localized = projects.map((project) => localizeProject(project, lang))

	return (
		<>
			<PageHero label={work.badge} title={`${work.heading[0]} ${work.heading[1]} ${work.heading[2]}`} accent={work.heading[3]} summary={work.intro} />
			<WorkList projects={localized} labels={card} />
			<ClosingSections lang={lang} />
		</>
	)
}
