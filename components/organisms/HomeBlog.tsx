import { Button } from "@/components/atoms/Button"
import { Icon } from "@/components/atoms/Icon"
import { Magnetic } from "@/components/atoms/Magnetic"
import { PostGrid } from "@/components/molecules/PostGrid"
import { Section } from "@/components/molecules/Section"
import { SectionHeader } from "@/components/molecules/SectionHeader"
import type { PostMeta } from "@/data/posts"
import type { Dictionary } from "@/i18n/dictionaries"

export interface HomeBlogProps {
	copy: Dictionary["home"]["blog"]
	posts: PostMeta[]
}

export function HomeBlog({ copy, posts }: HomeBlogProps) {
	return (
		<Section id="blog">
			<SectionHeader
				label="06"
				title={copy.title}
				subtitle={copy.subtitle}
				action={
					<Magnetic>
						<Button href="/blog-list" tone="ink">
							{copy.more}
							<Icon name="arrow-up-right" />
						</Button>
					</Magnetic>
				}
			/>
			<PostGrid posts={posts} />
		</Section>
	)
}
