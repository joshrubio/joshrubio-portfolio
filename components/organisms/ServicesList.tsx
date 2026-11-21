import { Grid } from "@/components/atoms/Grid"
import { Reveal } from "@/components/atoms/Reveal"
import { Section } from "@/components/molecules/Section"
import { ServiceDetailCard } from "@/components/molecules/ServiceDetailCard"
import type { ServiceDetail } from "@/data/services"

export interface ServicesListProps {
	services: readonly ServiceDetail[]
}

export function ServicesList({ services }: ServicesListProps) {
	return (
		<Section id="services-list">
			<Grid columns={2} gap="lg">
				{services.map((service, index) => (
					<Reveal key={service.title} delay={(index % 2) * 0.1}>
						<ServiceDetailCard index={index} {...service} />
					</Reveal>
				))}
			</Grid>
		</Section>
	)
}
