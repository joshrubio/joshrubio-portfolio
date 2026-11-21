import { Heading } from "@/components/atoms/Heading"
import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"
import { TextLink } from "@/components/atoms/TextLink"

export interface ResumeEntryProps {
	period: string
	title: string
	subtitle: string
	href?: string
	aside?: string
}

export function ResumeEntry({ period, title, subtitle, href, aside }: ResumeEntryProps) {
	return (
		<Stack direction="row" justify="between" align="start" gap="md" className="border-l-4 border-accent pl-4">
			<Stack gap="xs">
				<Text as="span" size="label" tone="accent" weight="bold">
					{period}
				</Text>
				<Heading as="h4" size="subhead" width="condensed">
					{href ? (
						<TextLink href={href} target="_blank" className="no-underline">
							{title}
						</TextLink>
					) : (
						title
					)}
				</Heading>
				<Text size="small" tone="soft">
					{subtitle}
				</Text>
			</Stack>
			{aside ? (
				<Heading as="p" size="heading" width="condensed" tone="accent">
					{aside}
				</Heading>
			) : null}
		</Stack>
	)
}
