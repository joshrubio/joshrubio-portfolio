import { Button } from "@/components/atoms/Button"
import { Cutout } from "@/components/atoms/Cutout"
import { Heading } from "@/components/atoms/Heading"
import { Icon } from "@/components/atoms/Icon"
import { Magnetic } from "@/components/atoms/Magnetic"
import { Reveal } from "@/components/atoms/Reveal"
import { SplitText } from "@/components/atoms/SplitText"
import { Stack } from "@/components/atoms/Stack"
import { Tag } from "@/components/atoms/Tag"
import { Text } from "@/components/atoms/Text"
import { Tilt } from "@/components/atoms/Tilt"
import { HeroStage } from "@/components/molecules/HeroStage"
import { Scribbled } from "@/components/molecules/Scribbled"
import { Section } from "@/components/molecules/Section"
import { ToolTile } from "@/components/molecules/ToolTile"
import { heroToolLogos, siteLinks } from "@/data/site"
import type { Dictionary } from "@/i18n/dictionaries"

export interface HomeHeroProps {
	copy: Dictionary["home"]["hero"]
}

export function HomeHero({ copy }: HomeHeroProps) {
	const photo = (
		<Tilt max={4}>
			<Reveal direction="pop" delay={0.2}>
				<Cutout photo="portrait" alt={copy.photoAlt} size="hero" outline="none" priority sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 26rem, 70vw" />
			</Reveal>
		</Tilt>
	)

	return (
		<Section spacing="none" clip>
			<HeroStage photo={photo}>
				<Stack gap="lg" align="start">
					<Tag tone="accent" wobble>
						{copy.greeting}
					</Tag>
					<Heading as="h1" size="display" width="condensed">
						<SplitText text={copy.title} />{" "}
						<Scribbled shape="underline">
							<Heading as="span" size="display" width="condensed" tone="accentOutline">
								<SplitText text={copy.titleAccent} delay={0.35} />
							</Heading>
						</Scribbled>
					</Heading>
					<Text tone="soft" measure="compact">
						{copy.body}
					</Text>
					<Stack direction="row" gap="md" wrap>
						<Magnetic>
							<Button href={siteLinks.cv} target="_blank" size="lg">
								{copy.cv}
								<Icon name="download" />
							</Button>
						</Magnetic>
						<Magnetic>
							<Button href="/#contact" tone="ink" size="lg">
								{copy.connect}
								<Icon name="arrow-right" />
							</Button>
						</Magnetic>
					</Stack>
					<Stack gap="sm">
						<Text as="span" size="label" tone="soft">
							{copy.technologies}
						</Text>
						<Stack direction="row" gap="md" wrap>
							{heroToolLogos.map((logo, index) => (
								<Reveal key={logo.name} direction="pop" delay={0.5 + index * 0.07}>
									<ToolTile logo={logo} />
								</Reveal>
							))}
						</Stack>
					</Stack>
				</Stack>
			</HeroStage>
		</Section>
	)
}
