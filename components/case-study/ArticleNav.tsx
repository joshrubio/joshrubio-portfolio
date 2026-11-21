import { Grid } from "@/components/atoms/Grid"
import { Text } from "@/components/atoms/Text"
import LocaleLink from "@/components/atoms/LocaleLink"

export interface ArticleNavItem {
	id: string
	title: string
}

export interface ArticleNavProps {
	newer?: ArticleNavItem
	older?: ArticleNavItem
}

function Neighbor({ label, item }: { label: string; item: ArticleNavItem }) {
	return (
		<LocaleLink
			href={`/blog/${item.id}`}
			className="block h-full border-2 border-ink bg-white p-4 shadow-sticker transition-transform duration-snap ease-snap hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
		>
			<Text as="span" size="label" tone="accent" weight="bold" className="mb-1 block">
				{label}
			</Text>
			<Text as="span" weight="bold">
				{item.title}
			</Text>
		</LocaleLink>
	)
}

export function ArticleNav({ newer, older }: ArticleNavProps) {
	return (
		<nav aria-label="More articles" className="mt-16 border-t-2 border-ink pt-6">
			<Grid columns={2} gap="md">
				<div>{newer ? <Neighbor label="Newer" item={newer} /> : null}</div>
				<div>{older ? <Neighbor label="Older" item={older} /> : null}</div>
			</Grid>
		</nav>
	)
}
