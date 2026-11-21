import { Grid } from "@/components/atoms/Grid"
import { Heading } from "@/components/atoms/Heading"
import { Reveal } from "@/components/atoms/Reveal"
import { SplitText } from "@/components/atoms/SplitText"
import { Stack } from "@/components/atoms/Stack"
import { FaqItem } from "@/components/molecules/FaqItem"
import { PricingCard } from "@/components/molecules/PricingCard"
import { Section } from "@/components/molecules/Section"
import type { FaqEntry, PricingPlan } from "@/data/pricing"

export interface PricingPlansProps {
	plans: readonly PricingPlan[]
	faq: readonly FaqEntry[]
}

export function PricingPlans({ plans, faq }: PricingPlansProps) {
	return (
		<Section id="pricing-plans">
			<Grid columns={2} gap="lg">
				{plans.map((plan, index) => (
					<Reveal key={plan.name} direction="pop" delay={index * 0.1}>
						<PricingCard {...plan} />
					</Reveal>
				))}
			</Grid>
			<Stack gap="lg" spaceTop="xl">
				<Heading size="title" width="condensed">
					<SplitText text="Common Questions" />
				</Heading>
				<Stack gap="md">
					{faq.map((entry) => (
						<FaqItem key={entry.question} question={entry.question} answer={entry.answer} />
					))}
				</Stack>
			</Stack>
		</Section>
	)
}
