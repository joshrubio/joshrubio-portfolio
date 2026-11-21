import Image from "next/image"

import { Heading } from "@/components/atoms/Heading"
import { Icon } from "@/components/atoms/Icon"
import { Stack } from "@/components/atoms/Stack"
import { Tag } from "@/components/atoms/Tag"
import { Text } from "@/components/atoms/Text"
import LocaleLink from "@/components/atoms/LocaleLink"
import type { Project, ProjectCategory } from "@/data/projects"

export interface ProjectCardProps {
	project: Project
	categoryLabels: Record<ProjectCategory, string>
}

export function ProjectCard({ project, categoryLabels }: ProjectCardProps) {
	const href = `/projects/${project.slug}`
	return (
		<article className="group relative flex h-full flex-col border-2 border-ink bg-white shadow-sticker transition-transform duration-snap ease-snap hover:-translate-x-1 hover:-translate-y-1">
			<div className="overflow-hidden border-b-2 border-ink">
				<Image
					src={project.thumbnail.src}
					width={project.thumbnail.width}
					height={project.thumbnail.height}
					sizes="(min-width: 1024px) 560px, 100vw"
					alt={project.title}
					className="h-auto w-full transition-transform duration-500 ease-snap group-hover:scale-105"
				/>
			</div>
			<Stack gap="md" className="flex-1 p-6">
				<Stack direction="row" gap="sm" wrap>
					{project.categories.map((category) => (
						<Tag key={category}>{categoryLabels[category]}</Tag>
					))}
				</Stack>
				<Stack direction="row" justify="between" align="start" gap="md">
					<Stack gap="xs">
						<Heading as="h3" size="heading" width="condensed">
							<LocaleLink href={href} className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-accent">
								{project.title}
							</LocaleLink>
						</Heading>
						<Text size="small" tone="soft">
							{project.subtitle}
						</Text>
					</Stack>
					<Icon name="arrow-up-right" size="lg" className="text-accent transition-transform duration-snap ease-snap group-hover:translate-x-1 group-hover:-translate-y-1" />
				</Stack>
			</Stack>
		</article>
	)
}
