import { Heading } from "@/components/atoms/Heading"
import LocaleLink from "@/components/atoms/LocaleLink"
import { Logo } from "@/components/atoms/Logo"

export interface BrandMarkProps {
	name: string
	tone?: "ink" | "paper"
}

export function BrandMark({ name, tone = "ink" }: BrandMarkProps) {
	return (
		<LocaleLink href="/" aria-label={name} className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
			<Logo className="transition-transform duration-snap ease-snap group-hover:-rotate-6 group-hover:scale-110" />
			<Heading as="span" size="subhead" width="condensed" tone={tone} className="hidden sm:inline">
				{name}
			</Heading>
		</LocaleLink>
	)
}
