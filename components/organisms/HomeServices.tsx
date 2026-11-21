import { Button } from "@/components/atoms/Button"
import { Cutout } from "@/components/atoms/Cutout"
import { Grid } from "@/components/atoms/Grid"
import { Icon } from "@/components/atoms/Icon"
import { Magnetic } from "@/components/atoms/Magnetic"
import { Parallax } from "@/components/atoms/Parallax"
import { Reveal } from "@/components/atoms/Reveal"
import { Tilt } from "@/components/atoms/Tilt"
import { AsideLayout } from "@/components/molecules/AsideLayout"
import { Section } from "@/components/molecules/Section"
import { SectionHeader } from "@/components/molecules/SectionHeader"
import { ServiceCard } from "@/components/molecules/ServiceCard"
import type { Dictionary } from "@/i18n/dictionaries"

export interface HomeServicesProps {
	copy: Dictionary["home"]["services"]
}

export function HomeServices({ copy }: HomeServicesProps) {
	return (
		<Section id="services">
			<SectionHeader
				label="01"
				title={copy.title}
				subtitle={copy.subtitle}
				action={
					<Magnetic>
						<Button href="/#contact" tone="ink">
							{copy.quote}
							<Icon name="arrow-up-right" />
						</Button>
					</Magnetic>
				}
			/>
			<AsideLayout
				aside={
					<Parallax distance={24}>
						<Reveal direction="pop">
							<Cutout photo="thinking" alt="" outline="ink" sizes="(min-width: 1024px) 22rem, 70vw" />
						</Reveal>
					</Parallax>
				}
			>
				<Grid columns={2} gap="md">
					{copy.items.map((item, index) => (
						<Reveal key={item.title} delay={index * 0.08}>
							<Tilt max={5}>
								<ServiceCard index={index} title={item.title} text={item.text} />
							</Tilt>
						</Reveal>
					))}
				</Grid>
			</AsideLayout>
		</Section>
	)
}
