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
		<article className="group relative grid border-2 border-ink bg-white shadow-sticker transition-transform duration-snap ease-snap hover:-translate-x-1 hover:-translate-y-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
			<div className="overflow-hidden border-b-2 border-ink lg:border-b-0 lg:border-r-2">
				<Image
					src={project.thumbnail.src}
					width={project.thumbnail.width}
					height={project.thumbnail.height}
					sizes="(min-width: 1024px) 58vw, 100vw"
					alt={project.title}
					className="h-auto w-full transition-transform duration-500 ease-snap group-hover:scale-105 lg:size-full lg:object-cover"
				/>
			</div>
			<Stack gap="md" justify="center" className="p-6 lg:p-8">
				<Tag tone="accent" className="self-start">
					{project.label}
				</Tag>
				<Heading as="h3" size="heading" width="condensed">
					<LocaleLink href={`/projects/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-accent">
						{project.workTitle}
					</LocaleLink>
				</Heading>
				<Text tone="soft">{project.description}</Text>
			</Stack>
			<dl className="grid gap-4 border-t-2 border-ink p-6 sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] lg:col-span-2 lg:px-8">
				{rows.map((row) => (
					<div key={row.label} className="grid gap-1">
						<Text as="span" size="label" tone="accent" weight="bold">
							<dt>{row.label}</dt>
						</Text>
						<Text as="span" size="small" tone="soft">
							<dd>{row.value}</dd>
						</Text>
					</div>
				))}
			</dl>
		</article>
	)
}
