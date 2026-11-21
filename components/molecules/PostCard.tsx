import Image from "next/image"

import { Heading } from "@/components/atoms/Heading"
import { Stack } from "@/components/atoms/Stack"
import { Tag } from "@/components/atoms/Tag"
import { Text } from "@/components/atoms/Text"
import LocaleLink from "@/components/atoms/LocaleLink"
import type { PostMeta } from "@/data/posts"

export interface PostCardProps {
	post: PostMeta
	minutesLabel: string
}

export function PostCard({ post, minutesLabel }: PostCardProps) {
	return (
		<article className="group relative flex h-full flex-col border-2 border-ink bg-white shadow-sticker transition-transform duration-snap ease-snap hover:-translate-x-1 hover:-translate-y-1">
			<div className="relative aspect-video overflow-hidden border-b-2 border-ink">
				<Image src={post.cover} alt={post.coverAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-500 ease-snap group-hover:scale-105" />
			</div>
			<Stack gap="md" className="flex-1 p-6">
				<Stack direction="row" gap="sm" align="center" wrap>
					<Tag tone="accent">{post.category}</Tag>
					<Text as="span" size="label" tone="soft">
						{post.displayDate} · {post.readingMinutes} {minutesLabel}
					</Text>
				</Stack>
				<Heading as="h3" size="subhead" width="condensed">
					<LocaleLink href={`/blog/${post.id}`} className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-accent">
						{post.title}
					</LocaleLink>
				</Heading>
				<Text size="small" tone="soft">
					{post.description}
				</Text>
			</Stack>
		</article>
	)
}
