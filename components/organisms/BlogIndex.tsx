import { PostGrid } from "@/components/molecules/PostGrid"
import { Section } from "@/components/molecules/Section"
import type { PostMeta } from "@/data/posts"

export interface BlogIndexProps {
	posts: PostMeta[]
}

export function BlogIndex({ posts }: BlogIndexProps) {
	return (
		<Section id="posts" spacing="default">
			<PostGrid posts={posts} />
		</Section>
	)
}
