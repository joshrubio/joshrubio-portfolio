import { Grid } from "@/components/atoms/Grid"
import { Reveal } from "@/components/atoms/Reveal"
import { Section } from "@/components/molecules/Section"
import { StatCounter } from "@/components/molecules/StatCounter"
import type { Dictionary } from "@/i18n/dictionaries"
import type { HomeStats as HomeStatsValues } from "@/lib/stats"

export interface HomeStatsProps {
	labels: Dictionary["home"]["stats"]
	values: HomeStatsValues
}

export function HomeStats({ labels, values }: HomeStatsProps) {
	const items = [
		{ value: values.years, label: labels.years },
		{ value: values.projects, label: labels.projects },
		{ value: values.web, label: labels.web },
		{ value: values.automation, label: labels.automation },
		{ value: values.wordpress, label: labels.wordpress },
	] as const

	return (
		<Section tone="ink" torn="both" spacing="tight" overlap="up">
			<Grid columns={5} gap="lg" align="start">
				{items.map((item, index) => (
					<Reveal key={item.label[0]} delay={index * 0.08}>
						<StatCounter value={item.value} label={item.label} />
					</Reveal>
				))}
			</Grid>
		</Section>
	)
}
