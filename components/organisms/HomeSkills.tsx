import { Grid } from "@/components/atoms/Grid"
import { Reveal } from "@/components/atoms/Reveal"
import { Stack } from "@/components/atoms/Stack"
import { Panel } from "@/components/molecules/Panel"
import { Section } from "@/components/molecules/Section"
import { SectionHeader } from "@/components/molecules/SectionHeader"
import { SkillGroup } from "@/components/molecules/SkillGroup"
import { ToolTile } from "@/components/molecules/ToolTile"
import { skillItems, toolLogos } from "@/data/site"
import type { Dictionary } from "@/i18n/dictionaries"

export interface HomeSkillsProps {
	copy: Dictionary["home"]["skills"]
}

export function HomeSkills({ copy }: HomeSkillsProps) {
	return (
		<Section id="skills" tone="ink" torn="both">
			<SectionHeader label="04" title={copy.title} tone="ink" />
			<Reveal>
				<Panel title="toolbox">
					<Grid columns={2} gap="lg" align="start">
						<Grid columns="tiles" gap="md">
							{toolLogos.map((logo, index) => (
								<Reveal key={logo.name} direction="pop" delay={index * 0.06}>
									<ToolTile logo={logo} showName />
								</Reveal>
							))}
						</Grid>
						<Stack gap="lg">
							{copy.groups.map((label, index) => (
								<SkillGroup key={label} label={label} items={skillItems[index] ?? []} />
							))}
						</Stack>
					</Grid>
				</Panel>
			</Reveal>
		</Section>
	)
}
