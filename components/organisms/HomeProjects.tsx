import { Button } from "@/components/atoms/Button"
import { Icon } from "@/components/atoms/Icon"
import { Magnetic } from "@/components/atoms/Magnetic"
import { Stack } from "@/components/atoms/Stack"
import { ProjectFilter } from "@/components/molecules/ProjectFilter"
import { Section } from "@/components/molecules/Section"
import { SectionHeader } from "@/components/molecules/SectionHeader"
import { projectCategories, type Project } from "@/data/projects"
import { siteLinks } from "@/data/site"
import type { Dictionary } from "@/i18n/dictionaries"

export interface HomeProjectsProps {
	copy: Dictionary["home"]["projects"]
	projects: Project[]
	limit?: number
}

export function HomeProjects({ copy, projects, limit = 6 }: HomeProjectsProps) {
	const categories = projectCategories.map((category) => ({ key: category.key, label: copy.categories[category.key] }))

	return (
		<Section id="projects">
			<SectionHeader
				label="02"
				title={copy.title}
				subtitle={copy.subtitle}
				action={
					<Magnetic>
						<Button href={siteLinks.github} target="_blank" tone="ink">
							{copy.viewGithub}
							<Icon name="github" />
						</Button>
					</Magnetic>
				}
			/>
			<ProjectFilter projects={projects} categories={categories} allLabel={copy.all} limit={limit} />
			<Stack direction="row" justify="center" gap="md" wrap spaceTop="lg">
				<Magnetic>
					<Button href="/work" size="lg">
						{copy.all}
						<Icon name="arrow-right" />
					</Button>
				</Magnetic>
				<Magnetic>
					<Button href={siteLinks.github} target="_blank" size="lg" tone="paper">
						{copy.moreGithub}
						<Icon name="arrow-up-right" />
					</Button>
				</Magnetic>
			</Stack>
		</Section>
	)
}
