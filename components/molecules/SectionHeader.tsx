import type { ReactNode } from "react"

import { Heading } from "@/components/atoms/Heading"
import { Reveal } from "@/components/atoms/Reveal"
import { SplitText } from "@/components/atoms/SplitText"
import { Stack } from "@/components/atoms/Stack"
import { Tag } from "@/components/atoms/Tag"
import { Text } from "@/components/atoms/Text"

const tones = {
	paper: { heading: "ink", text: "soft", tag: "ink" },
	ink: { heading: "paper", text: "paper", tag: "accent" },
	accent: { heading: "ink", text: "ink", tag: "ink" },
} as const

export interface SectionHeaderProps {
	title: string
	subtitle?: string
	label?: string
	tone?: keyof typeof tones
	action?: ReactNode
}

export function SectionHeader({ title, subtitle, label, tone = "paper", action }: SectionHeaderProps) {
	const palette = tones[tone]
	return (
		<Stack direction="responsive" align="end" justify="between" gap="lg" className="mb-12 md:mb-16">
			<Stack gap="md" className="max-w-3xl">
				{label ? (
					<Reveal direction="pop" className="self-start">
						<Tag tone={palette.tag} wobble>
							{label}
						</Tag>
					</Reveal>
				) : null}
				<Heading size="title" width="condensed" tone={palette.heading}>
					<SplitText text={title} />
				</Heading>
				{subtitle ? (
					<Reveal delay={0.15} className="block">
						<Text tone={palette.text}>{subtitle}</Text>
					</Reveal>
				) : null}
			</Stack>
			{action}
		</Stack>
	)
}
