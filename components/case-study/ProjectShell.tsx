import type { ReactNode } from "react"

import { Button } from "@/components/atoms/Button"
import { Grid } from "@/components/atoms/Grid"
import { Heading } from "@/components/atoms/Heading"
import { Icon, type IconName } from "@/components/atoms/Icon"
import { Reveal } from "@/components/atoms/Reveal"
import { SplitText } from "@/components/atoms/SplitText"
import { Stack } from "@/components/atoms/Stack"
import { Tag } from "@/components/atoms/Tag"
import { Text } from "@/components/atoms/Text"
import { Section } from "@/components/molecules/Section"

import { Figure } from "./Figures"

export function ProjectPage({ children }: { children: ReactNode }) {
	return <Section spacing="default">{children}</Section>
}

export interface ProjectLink {
	label: string
	href: string
	icon?: string
}

const remixIcons: Record<string, IconName> = {
	"ri-arrow-right-line": "arrow-right",
	"ri-external-link-line": "arrow-up-right",
	"ri-github-fill": "github",
}

interface HeaderProps {
	badge?: ProjectLink
	status?: string
	title: string
	summary: string
	meta: { label: string; value: ReactNode }[]
	hero?: { src: string; alt: string }
}

export function ProjectHeader({ badge, status, title, summary, meta, hero }: HeaderProps) {
	return (
		<Stack gap="lg" align="center" className="text-center">
			{badge ? (
				<Reveal direction="pop" className="inline-block">
					<Button href={badge.href} target={badge.href.startsWith("http") ? "_blank" : undefined} tone="ink" size="sm">
						{badge.label}
					</Button>
				</Reveal>
			) : null}
			{status ? (
				<Tag tone="accent" wobble>
					{status}
				</Tag>
			) : null}
			<Heading as="h1" size="title" width="condensed" align="center" className="max-w-4xl">
				<SplitText text={title} />
			</Heading>
			<Text tone="soft" align="center" measure="wide">
				{summary}
			</Text>
			<Grid columns={4} gap="md" className="w-full max-w-4xl py-6">
				{meta.map((item) => (
					<Stack key={item.label} gap="xs" className="border-2 border-ink bg-white px-4 py-3 text-left shadow-sticker">
						<Text as="span" size="label" tone="accent" weight="bold">
							{item.label}
						</Text>
						<Text as="span" size="small" weight="bold">
							{item.value}
						</Text>
					</Stack>
				))}
			</Grid>
			{hero ? <Figure src={hero.src} alt={hero.alt} priority /> : null}
		</Stack>
	)
}

export function ProjectBody({ children }: { children: ReactNode }) {
	return <div className="mx-auto mt-12 w-full max-w-narrow">{children}</div>
}

export function ProjectCTA({ links }: { links: ProjectLink[] }) {
	return (
		<Stack direction="row" gap="md" wrap spaceTop="lg">
			{links.map((link, index) => {
				const external = link.href.startsWith("http")
				const icon = link.icon ? remixIcons[link.icon] : undefined
				return (
					<Button key={link.label} href={link.href} target={external ? "_blank" : undefined} tone={index === 0 ? "accent" : "paper"}>
						{link.label}
						{icon ? <Icon name={icon} size="sm" /> : null}
					</Button>
				)
			})}
		</Stack>
	)
}
