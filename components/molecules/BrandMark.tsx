import { Heading } from "@/components/atoms/Heading"
import LocaleLink from "@/components/atoms/LocaleLink"

export interface BrandMarkProps {
	name: string
	tone?: "ink" | "paper"
}

export function BrandMark({ name, tone = "ink" }: BrandMarkProps) {
	return (
		<LocaleLink href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
			<span className="flex size-10 items-center justify-center border-2 border-ink bg-accent shadow-sticker">
				<Heading as="span" size="subhead" tone="paper" className="leading-none">
					J
				</Heading>
			</span>
			<Heading as="span" size="subhead" width="condensed" tone={tone} className="hidden sm:inline">
				{name}
			</Heading>
		</LocaleLink>
	)
}
