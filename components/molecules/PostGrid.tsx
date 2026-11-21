import { Grid } from "@/components/atoms/Grid"
import { Reveal } from "@/components/atoms/Reveal"
import type { PostMeta } from "@/data/posts"

import { PostCard } from "./PostCard"

export interface PostGridProps {
	posts: PostMeta[]
}

export function PostGrid({ posts }: PostGridProps) {
	return (
		<Grid columns={3} gap="lg">
			{posts.map((post, index) => (
				<Reveal key={post.id} delay={(index % 3) * 0.1}>
					<PostCard post={post} minutesLabel="min read" />
				</Reveal>
			))}
		</Grid>
	)
}
