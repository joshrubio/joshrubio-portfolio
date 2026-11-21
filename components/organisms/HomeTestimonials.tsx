import { Grid } from "@/components/atoms/Grid"
import { Reveal } from "@/components/atoms/Reveal"
import { Section } from "@/components/molecules/Section"
import { SectionHeader } from "@/components/molecules/SectionHeader"
import { TestimonialCard } from "@/components/molecules/TestimonialCard"
import type { Dictionary } from "@/i18n/dictionaries"

export interface HomeTestimonialsProps {
	copy: Dictionary["home"]["testimonials"]
}

export function HomeTestimonials({ copy }: HomeTestimonialsProps) {
	return (
		<Section id="testimonials" tone="accent" torn="both">
			<SectionHeader label="05" title={copy.title} subtitle={copy.subtitle} tone="accent" />
			<Grid columns={2} gap="lg">
				{copy.items.map((item, index) => (
					<Reveal key={item.name} direction="pop" delay={index * 0.1}>
						<TestimonialCard quote={item.quote} name={item.name} role={item.role} tilt={index % 2 === 0 ? "left" : "right"} />
					</Reveal>
				))}
			</Grid>
		</Section>
	)
}
