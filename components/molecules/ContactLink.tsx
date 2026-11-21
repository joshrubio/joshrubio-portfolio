import { Icon, type IconName } from "@/components/atoms/Icon"
import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"
import LocaleLink from "@/components/atoms/LocaleLink"

export interface ContactLinkProps {
	icon: IconName
	label: string
	value: string
	href: string
	external?: boolean
}

export function ContactLink({ icon, label, value, href, external = false }: ContactLinkProps) {
	return (
		<LocaleLink
			href={href}
			target={external ? "_blank" : undefined}
			rel={external ? "noopener noreferrer" : undefined}
			className="group flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
		>
			<span className="flex size-14 shrink-0 items-center justify-center border-2 border-paper bg-accent text-white shadow-sticker transition-transform duration-snap ease-snap group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
				<Icon name={icon} size="lg" />
			</span>
			<Stack gap="xs">
				<Text as="span" size="label" tone="paper">
					{label}
				</Text>
				<Text as="span" weight="bold" tone="paper">
					{value}
				</Text>
			</Stack>
		</LocaleLink>
	)
}
