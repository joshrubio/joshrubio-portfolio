import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ArticleNav } from "@/components/case-study/ArticleNav"
import { PostBody } from "@/components/case-study/PostBody"
import { ProjectBody, ProjectCTA, ProjectHeader, ProjectPage } from "@/components/case-study"
import { getAllPosts, getPost } from "@/data/posts"

interface PageProps {
	params: Promise<{ id: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
	return getAllPosts().map((post) => ({ id: post.id }))
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
	const params = await props.params
	const post = getPost(params.id)
	if (!post) return {}
	const title = `${post.title} | Josh D. Rubio`
	return {
		title,
		description: post.description,
		alternates: { canonical: `/blog/${post.id}` },
		authors: [{ name: post.author }],
		openGraph: {
			title,
			description: post.description,
			type: "article",
			url: `/blog/${post.id}`,
			publishedTime: post.date,
			authors: [post.author],
			images: [{ url: post.cover, alt: post.coverAlt }],
		},
		twitter: { card: "summary_large_image", title, description: post.description, images: [post.cover] },
	}
}

export default async function BlogArticle(props: PageProps) {
	const params = await props.params
	const post = getPost(params.id)
	if (!post) notFound()

	const all = getAllPosts()
	const index = all.findIndex((candidate) => candidate.id === post.id)
	const newer = index > 0 ? all[index - 1] : undefined
	const older = index < all.length - 1 ? all[index + 1] : undefined

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.description,
		datePublished: post.date,
		author: { "@type": "Person", name: post.author },
		image: post.cover,
	}

	return (
		<ProjectPage>
			<article>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				<ProjectHeader
					badge={{ label: post.category, href: "/blog-list" }}
					title={post.title}
					summary={post.description}
					meta={[
						{ label: "Author", value: post.author },
						{ label: "Published", value: <time dateTime={post.date}>{post.displayDate}</time> },
						{ label: "Reading time", value: `${post.readingMinutes} min read` },
					]}
					hero={{ src: post.cover, alt: post.coverAlt }}
				/>
				<ProjectBody>
					<PostBody source={post.body} />
					<ArticleNav newer={newer && { id: newer.id, title: newer.title }} older={older && { id: older.id, title: older.title }} />
					<ProjectCTA
						links={[
							{ label: "All articles", href: "/blog-list", icon: "ri-arrow-right-line" },
							{ label: "Get in touch", href: "/#contact" },
						]}
					/>
				</ProjectBody>
			</article>
		</ProjectPage>
	)
}
