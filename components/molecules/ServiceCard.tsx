import { Heading } from "@/components/atoms/Heading"
import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"

export interface ServiceCardProps {
	index: number
	title: string
	text: string
}

export function ServiceCard({ index, title, text }: ServiceCardProps) {
	return (
		<Stack as="article" gap="md" className="h-full border-2 border-ink bg-white p-6 shadow-sticker transition-transform duration-snap ease-snap hover:-translate-x-1 hover:-translate-y-1">
			<Text as="span" size="label" tone="accent" weight="bold">
				{String(index + 1).padStart(2, "0")}
			</Text>
			<Heading as="h3" size="heading" width="condensed">
				{title}
			</Heading>
			<Text size="small" tone="soft">
				{text}
			</Text>
		</Stack>
	)
}
