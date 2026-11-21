import { Heading } from "@/components/atoms/Heading"
import { Reveal } from "@/components/atoms/Reveal"
import { SplitText } from "@/components/atoms/SplitText"
import { Stack } from "@/components/atoms/Stack"
import { Tag } from "@/components/atoms/Tag"
import { Text } from "@/components/atoms/Text"

import { Scribbled } from "./Scribbled"
import { Section } from "./Section"

export interface PageHeroProps {
	label: string
	title: string
	accent?: string
	summary?: string
}

export function PageHero({ label, title, accent, summary }: PageHeroProps) {
	return (
		<Section spacing="tight">
			<Stack gap="lg" align="center">
				<Reveal direction="pop" className="inline-block">
					<Tag tone="accent" wobble>
						{label}
					</Tag>
				</Reveal>
				<Heading as="h1" size="title" width="condensed" align="center">
					<SplitText text={title} />
					{accent ? (
						<>
							{" "}
							<Scribbled shape="underline">
								<Heading as="span" size="title" width="condensed" tone="accent">
									<SplitText text={accent} delay={0.3} />
								</Heading>
							</Scribbled>
						</>
					) : null}
				</Heading>
				{summary ? (
					<Text tone="soft" align="center" measure="wide">
						{summary}
					</Text>
				) : null}
			</Stack>
		</Section>
	)
}
