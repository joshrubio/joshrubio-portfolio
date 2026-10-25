import Image from "next/image"
import Link from "next/link"

import type { PostMeta } from "@/data/posts"

interface BlogCardProps {
	post: PostMeta
	/** 1 = home and listing cards, 2 = the index-2 home variant. */
	variant?: 1 | 2
}

/** A post card. The whole card is one link (to /blog/<id>); the category pill is plain text. */
export default function BlogCard1({ post, variant = 1 }: BlogCardProps) {
	const href = `/blog/${post.id}`
	const round = variant === 2 ? "rounded-top-2" : "rounded-4"
	const imageRound = variant === 2 ? "rounded-2" : "rounded-3"
	return (
		<div className={`blog-card ${round} mb-lg-3 mb-md-5 mb-3`}>
			<div className="blog-card__image position-relative">
				<div className={`zoom-img ${imageRound} overflow-hidden position-relative`} style={{ aspectRatio: "16 / 9" }}>
					<Image
						src={post.cover}
						alt={post.coverAlt}
						fill
						sizes="(min-width: 992px) 33vw, 100vw"
						style={{ objectFit: "cover" }}
					/>
					<Link href={href} tabIndex={-1} aria-hidden="true" className="position-absolute top-0 start-0 w-100 h-100" />
					<span className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2" style={{ pointerEvents: "none" }}>
						{post.category}
					</span>
					<span className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle" style={{ pointerEvents: "none" }}>
						<i className="ri-arrow-right-up-line text-dark" />
					</span>
				</div>
			</div>
			<div className="blog-card__content position-relative text-center mt-4">
				<span className="blog-card__date fs-7">{post.displayDate} • {post.readingMinutes} min read</span>
				<h5 className="blog-card__title">{post.title}</h5>
				<p className="blog-card__description fs-6">{post.description}</p>
				<Link href={href} aria-label={post.title} className="link-overlay position-absolute top-0 start-0 w-100 h-100" />
			</div>
		</div>
	)
}
