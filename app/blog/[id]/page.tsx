import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import PostBody from "@/components/blog/PostBody"
import Layout from "@/components/layout/Layout"
import { getAllPosts, getPost } from "@/data/posts"
import { getImageSize } from "@/util/image-size"

interface PageProps {
	params: { id: string }
}

export const dynamicParams = false

export function generateStaticParams() {
	return getAllPosts().map((post) => ({ id: post.id }))
}

export function generateMetadata({ params }: PageProps): Metadata {
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

export default function BlogArticle({ params }: PageProps) {
	const post = getPost(params.id)
	if (!post) notFound()

	const all = getAllPosts()
	const index = all.findIndex((p) => p.id === post.id)
	const newer = index > 0 ? all[index - 1] : undefined
	const older = index < all.length - 1 ? all[index + 1] : undefined
	const cover = getImageSize(post.cover)

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
		<Layout headerStyle={1} footerStyle={1}>
			<div>
				<article className="section-work-single section-padding">
					<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
					<div className="container">
						<div className="row">
							<header className="col-lg-8 mx-lg-auto mb-lg-0">
								<div className="text-center">
									<Link href="/blog-list" className="btn btn-gradient d-inline-block text-uppercase">
										{post.category}
									</Link>
									<h1 className="ds-3 mt-3 mb-4 text-dark">{post.title}</h1>
									<p className="text-300 fs-5 mb-0">{post.description}</p>
								</div>
							</header>
							<div className="d-flex flex-wrap justify-content-center gap-4 py-8">
								<div className="bg-6 px-5 py-3 rounded-2">
									<p className="text-300 mb-0">Author</p>
									<h6>{post.author}</h6>
								</div>
								<div className="bg-6 px-5 py-3 rounded-2">
									<p className="text-300 mb-0">Published</p>
									<h6><time dateTime={post.date}>{post.displayDate}</time></h6>
								</div>
								<div className="bg-6 px-5 py-3 rounded-2">
									<p className="text-300 mb-0">Reading time</p>
									<h6>{post.readingMinutes} min read</h6>
								</div>
							</div>
							{cover && (
								<div className="col-12 mb-5">
									<figure className="my-4">
										<Image
											src={post.cover}
											alt={post.coverAlt}
											width={cover.width}
											height={cover.height}
											sizes="(min-width: 992px) 900px, 100vw"
											priority
											className="rounded-3 border shadow-sm"
											style={{ width: "100%", height: "auto" }}
										/>
									</figure>
								</div>
							)}
							<div className="col-lg-8 mx-lg-auto mt-8">
								<PostBody source={post.body} />

								<nav aria-label="More articles" className="mt-8 pt-4 border-top">
									<div className="row g-3">
										<div className="col-md-6">
											{newer && (
												<Link href={`/blog/${newer.id}`} className="d-block p-3 bg-light rounded-3 h-100">
													<span className="d-block small text-uppercase text-300">Newer</span>
													<span className="fw-semibold text-dark">{newer.title}</span>
												</Link>
											)}
										</div>
										<div className="col-md-6">
											{older && (
												<Link href={`/blog/${older.id}`} className="d-block p-3 bg-light rounded-3 h-100">
													<span className="d-block small text-uppercase text-300">Older</span>
													<span className="fw-semibold text-dark">{older.title}</span>
												</Link>
											)}
										</div>
									</div>
								</nav>

								<div className="mt-5">
									<Link href="/blog-list" className="btn btn-gradient me-2">
										All articles
										<i className="ri-arrow-right-line ms-2" />
									</Link>
									<Link href="/#contact" className="btn btn-outline-secondary me-2">
										Get in touch
									</Link>
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		</Layout>
	)
}
