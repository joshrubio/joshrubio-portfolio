import { Button } from "@/components/atoms/Button"
import { Heading } from "@/components/atoms/Heading"
import { Icon } from "@/components/atoms/Icon"
import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"
import type { PricingPlan } from "@/data/pricing"

export function PricingCard({ name, price, unit, features }: PricingPlan) {
	return (
		<Stack as="article" gap="lg" className="h-full border-2 border-ink bg-white p-6 shadow-sticker md:p-8">
			<Stack gap="xs">
				<Text as="span" size="label" tone="accent" weight="bold">
					{name}
				</Text>
				<Stack direction="row" align="baseline" gap="xs">
					<Heading as="p" size="title" width="condensed">
						{price}
					</Heading>
					<Text as="span" size="label" tone="soft">
						{unit}
					</Text>
				</Stack>
			</Stack>
			<Stack as="ul" gap="sm" className="border-t-2 border-ink pt-4">
				{features.map((feature) => (
					<li key={feature} className="flex gap-3">
						<Icon name="check" size="sm" className="mt-1 text-accent" />
						<Text as="span" size="small">
							{feature}
						</Text>
					</li>
				))}
			</Stack>
			<Button href="/#contact" tone="ink" className="mt-auto self-start">
				Order Now
				<Icon name="arrow-up-right" size="sm" />
			</Button>
		</Stack>
	)
}
