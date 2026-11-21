import { Heading } from "@/components/atoms/Heading"
import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"
import type { ServiceDetail } from "@/data/services"

export interface ServiceDetailCardProps extends ServiceDetail {
	index: number
}

export function ServiceDetailCard({ index, title, tagline, details }: ServiceDetailCardProps) {
	return (
		<Stack as="article" gap="lg" className="h-full border-2 border-ink bg-white p-6 shadow-sticker transition-transform duration-snap ease-snap hover:-translate-x-1 hover:-translate-y-1 md:p-8">
			<Stack gap="xs">
				<Text as="span" size="label" tone="accent" weight="bold">
					{String(index + 1).padStart(2, "0")}
				</Text>
				<Heading as="h3" size="heading" width="condensed">
					{title}
				</Heading>
				<Text as="span" size="hand" tone="soft">
					{tagline}
				</Text>
			</Stack>
			{details.length > 0 ? (
				<dl className="grid gap-4 border-t-2 border-ink pt-4">
					{details.map((detail) => (
						<div key={detail.label}>
							<Text as="span" size="label" weight="bold">
								<dt>{detail.label}</dt>
							</Text>
							<Text as="span" size="small" tone="soft">
								<dd>{detail.text}</dd>
							</Text>
						</div>
					))}
				</dl>
			) : null}
		</Stack>
	)
}
