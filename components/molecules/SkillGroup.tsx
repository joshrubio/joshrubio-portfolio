import { Stack } from "@/components/atoms/Stack"
import { Tag } from "@/components/atoms/Tag"
import { Text } from "@/components/atoms/Text"

export interface SkillGroupProps {
	label: string
	items: readonly string[]
}

export function SkillGroup({ label, items }: SkillGroupProps) {
	return (
		<Stack gap="sm">
			<Text as="span" size="label" tone="accent" weight="bold">
				{label}
			</Text>
			<Stack as="ul" direction="row" gap="sm" wrap>
				{items.map((item) => (
					<li key={item}>
						<Tag>{item}</Tag>
					</li>
				))}
			</Stack>
		</Stack>
	)
}
