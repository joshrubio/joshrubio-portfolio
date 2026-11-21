import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PageHero } from "@/components/molecules/PageHero"
import { BlogIndex } from "@/components/organisms/BlogIndex"
import { ClosingSections } from "@/components/organisms/ClosingSections"
import { getLatestPosts } from "@/data/posts"
import { hasLocale } from "@/i18n/config"

export const metadata: Metadata = {
	title: "Blog | Josh D. Rubio",
	description: "Articles from real projects: mock-first integrations, retrieval-only search, accessibility as an engineering constraint, WordPress rebuilds, auditable AI workflows and design systems.",
}

interface BlogListProps {
	params: Promise<{ lang: string }>
}

export default async function BlogList({ params }: BlogListProps) {
	const { lang } = await params
	if (!hasLocale(lang)) notFound()

	return (
		<>
			<PageHero
				label="Blog"
				title="Notes from the work:"
				accent="engineering, accessibility and AI-assisted tooling"
				summary="Articles drawn from my own projects: what we built, what we decided and what I would check next time."
			/>
			<BlogIndex posts={getLatestPosts()} />
			<ClosingSections lang={lang} />
		</>
	)
}
