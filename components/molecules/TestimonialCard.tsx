import { cva, type VariantProps } from "class-variance-authority"

import { Icon } from "@/components/atoms/Icon"
import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"

const cardStyles = cva("h-full border-2 border-ink bg-paper p-6 shadow-sticker", {
	variants: {
		tilt: {
			left: "-rotate-1",
			right: "rotate-1",
			none: "",
		},
	},
	defaultVariants: { tilt: "none" },
})

export interface TestimonialCardProps extends VariantProps<typeof cardStyles> {
	quote: string
	name: string
	role: string
}

export function TestimonialCard({ quote, name, role, tilt }: TestimonialCardProps) {
	return (
		<figure className={cardStyles({ tilt })}>
			<Stack gap="md" className="h-full">
				<Icon name="quote" size="xl" className="text-accent" />
				<blockquote>
					<Text>{quote}</Text>
				</blockquote>
				<figcaption className="mt-auto border-t-2 border-ink pt-4">
					<Text as="span" size="label" weight="bold" className="block">
						{name}
					</Text>
					<Text as="span" size="label" tone="soft">
						{role}
					</Text>
				</figcaption>
			</Stack>
		</figure>
	)
}
