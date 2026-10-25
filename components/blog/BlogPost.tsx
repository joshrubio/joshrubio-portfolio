import { getLatestPosts } from "@/data/posts"

import BlogCard1 from "./BlogCard1"

interface BlogPostProps {
	/** Show only the newest N posts (default: all). */
	limit?: number
	variant?: 1 | 2
}

/** A grid of post cards, newest first. Server component: the data comes from data/posts. */
export default function BlogPost({ limit, variant = 1 }: BlogPostProps) {
	const posts = getLatestPosts(limit)
	if (posts.length === 0) return <p className="text-300 text-center">No posts yet.</p>
	return (
		<div className="row mt-8">
			{posts.map((post) => (
				<div key={post.id} className="col-lg-4">
					<BlogCard1 post={post} variant={variant} />
				</div>
			))}
		</div>
	)
}
