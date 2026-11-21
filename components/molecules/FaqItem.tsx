import { Heading } from "@/components/atoms/Heading"
import { Icon } from "@/components/atoms/Icon"
import { Text } from "@/components/atoms/Text"

export interface FaqItemProps {
	question: string
	answer: string
}

export function FaqItem({ question, answer }: FaqItemProps) {
	return (
		<details className="group border-2 border-ink bg-white shadow-sticker open:bg-paper">
			<summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
				<Heading as="h3" size="subhead" width="condensed">
					{question}
				</Heading>
				<Icon name="plus" className="transition-transform duration-snap ease-snap group-open:rotate-45" />
			</summary>
			<div className="border-t-2 border-ink p-5">
				<Text tone="soft">{answer}</Text>
			</div>
		</details>
	)
}
