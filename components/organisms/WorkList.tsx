import { Reveal } from "@/components/atoms/Reveal"
import { Stack } from "@/components/atoms/Stack"
import { Section } from "@/components/molecules/Section"
import { WorkCard } from "@/components/molecules/WorkCard"
import type { Project } from "@/data/projects"
import type { Dictionary } from "@/i18n/dictionaries"

export interface WorkListProps {
	projects: Project[]
	labels: Dictionary["card"]
}

export function WorkList({ projects, labels }: WorkListProps) {
	return (
		<Section id="work-list" spacing="default">
			<Stack gap="xl">
				{projects.map((project) => (
					<Reveal key={project.slug}>
						<WorkCard project={project} labels={labels} />
					</Reveal>
				))}
			</Stack>
		</Section>
	)
}
