import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"
import { TextLink } from "@/components/atoms/TextLink"
import { BrandMark } from "@/components/molecules/BrandMark"
import { Section } from "@/components/molecules/Section"
import { navItems } from "@/data/site"
import type { Dictionary } from "@/i18n/dictionaries"

export interface SiteFooterProps {
	nav: Dictionary["nav"]
	rights: string
}

export function SiteFooter({ nav, rights }: SiteFooterProps) {
	return (
		<footer>
			<Section tone="ink" spacing="tight">
				<Stack gap="lg" align="center">
					<BrandMark name="Josh D. Rubio" tone="paper" />
					<Stack as="nav" direction="row" gap="lg" justify="center" wrap aria-label="Footer">
						{navItems.map((item) => (
							<TextLink key={item.key} href={item.href} tone="paper">
								{nav[item.key]}
							</TextLink>
						))}
					</Stack>
					<Text as="small" size="label" tone="paper">
						© {new Date().getFullYear()} {rights} Josh D. Rubio
					</Text>
				</Stack>
			</Section>
		</footer>
	)
}
