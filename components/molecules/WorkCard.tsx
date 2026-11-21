import Image from "next/image"

import { Heading } from "@/components/atoms/Heading"
import { Stack } from "@/components/atoms/Stack"
import { Tag } from "@/components/atoms/Tag"
import { Text } from "@/components/atoms/Text"
import LocaleLink from "@/components/atoms/LocaleLink"
import type { Project } from "@/data/projects"
import type { Dictionary } from "@/i18n/dictionaries"

export interface WorkCardProps {
	project: Project
	labels: Dictionary["card"]
}

export function WorkCard({ project, labels }: WorkCardProps) {
	const rows = [
		{ label: labels.client, value: project.client },
		...(project.duration ? [{ label: labels.completion, value: project.duration }] : []),
		{ label: labels.tools, value: project.tools.join(", ") },
	]

	return (
		<article className="group relative grid border-2 border-ink bg-white shadow-sticker transition-transform duration-snap ease-snap hover:-translate-x-1 hover:-translate-y-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
			<div className="overflow-hidden border-b-2 border-ink md:border-b-0 md:border-r-2">
				<Image
					src={project.thumbnail.src}
					width={project.thumbnail.width}
					height={project.thumbnail.height}
					sizes="(min-width: 768px) 40vw, 100vw"
					alt={project.title}
					className="size-full object-cover transition-transform duration-500 ease-snap group-hover:scale-105"
				/>
			</div>
			<Stack gap="md" className="p-6 md:p-8">
				<Tag tone="accent" className="self-start">
					{project.label}
				</Tag>
				<Heading as="h3" size="heading" width="condensed">
					<LocaleLink href={`/projects/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-accent">
						{project.workTitle}
					</LocaleLink>
				</Heading>
				<Text tone="soft">{project.description}</Text>
				<dl className="mt-auto grid gap-3 border-t-2 border-ink pt-4">
					{rows.map((row) => (
						<div key={row.label} className="grid gap-1 sm:grid-cols-[9rem_minmax(0,1fr)]">
							<Text as="span" size="label" tone="accent" weight="bold">
								<dt>{row.label}</dt>
							</Text>
							<Text as="span" size="small" tone="soft">
								<dd>{row.value}</dd>
							</Text>
						</div>
					))}
				</dl>
			</Stack>
		</article>
	)
}
