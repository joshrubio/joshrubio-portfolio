import { Heading } from "@/components/atoms/Heading"
import { Marquee } from "@/components/atoms/Marquee"
import { SplitText } from "@/components/atoms/SplitText"
import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"
import { BrandLogo } from "@/components/molecules/BrandLogo"
import { Section } from "@/components/molecules/Section"
import { brandLogos } from "@/data/site"
import type { Dictionary } from "@/i18n/dictionaries"

export interface HomeBrandsProps {
	copy: Dictionary["home"]["brands"]
}

export function HomeBrands({ copy }: HomeBrandsProps) {
	return (
		<Section id="brands" spacing="tight">
			<Stack gap="md" align="center">
				<Heading size="heading" width="condensed" align="center">
					<SplitText text={copy.title} />
				</Heading>
				<Text tone="soft" align="center" measure="wide">
					{copy.text}
				</Text>
			</Stack>
			<Marquee direction="right" spaceTop="lg">
				{brandLogos.map((logo) => (
					<BrandLogo key={logo.name} logo={logo} />
				))}
			</Marquee>
		</Section>
	)
}
