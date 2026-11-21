import { notFound } from "next/navigation"

import { HomeBlog } from "@/components/organisms/HomeBlog"
import { HomeBrands } from "@/components/organisms/HomeBrands"
import { HomeContact } from "@/components/organisms/HomeContact"
import { HomeHero } from "@/components/organisms/HomeHero"
import { HomeProjects } from "@/components/organisms/HomeProjects"
import { HomeResume } from "@/components/organisms/HomeResume"
import { HomeServices } from "@/components/organisms/HomeServices"
import { HomeSkills } from "@/components/organisms/HomeSkills"
import { HomeStats } from "@/components/organisms/HomeStats"
import { HomeTestimonials } from "@/components/organisms/HomeTestimonials"
import { getLatestPosts } from "@/data/posts"
import { localizeProject, projects } from "@/data/projects"
import { hasLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { computeHomeStats } from "@/lib/stats"

interface HomeProps {
	params: Promise<{ lang: string }>
}

export default async function Home({ params }: HomeProps) {
	const { lang } = await params
	if (!hasLocale(lang)) notFound()
	const { home } = getDictionary(lang)
	const localizedProjects = projects.map((project) => localizeProject(project, lang))

	return (
		<>
			<HomeHero copy={home.hero} />
			<HomeStats labels={home.stats} values={computeHomeStats(projects)} />
			<HomeServices copy={home.services} />
			<HomeProjects copy={home.projects} projects={localizedProjects} />
			<HomeResume copy={home.resume} />
			<HomeSkills copy={home.skills} />
			<HomeBrands copy={home.brands} />
			<HomeTestimonials copy={home.testimonials} />
			<HomeBlog copy={home.blog} posts={getLatestPosts(3)} />
			<HomeContact copy={home.contact} />
		</>
	)
}
