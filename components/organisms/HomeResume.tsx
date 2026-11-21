import { Button } from "@/components/atoms/Button"
import { Grid } from "@/components/atoms/Grid"
import { Heading } from "@/components/atoms/Heading"
import { Icon } from "@/components/atoms/Icon"
import { Magnetic } from "@/components/atoms/Magnetic"
import { Marquee } from "@/components/atoms/Marquee"
import { Reveal } from "@/components/atoms/Reveal"
import { Stack } from "@/components/atoms/Stack"
import { Panel } from "@/components/molecules/Panel"
import { ResumeEntry } from "@/components/molecules/ResumeEntry"
import { Section } from "@/components/molecules/Section"
import { SectionHeader } from "@/components/molecules/SectionHeader"
import { siteLinks } from "@/data/site"
import type { Dictionary } from "@/i18n/dictionaries"

export interface HomeResumeProps {
	copy: Dictionary["home"]["resume"]
}

export function HomeResume({ copy }: HomeResumeProps) {
	return (
		<Section id="resume" spacing="default">
			<SectionHeader
				label="03"
				title={copy.title}
				subtitle={copy.subtitle}
				action={
					<Magnetic>
						<Button href="/#contact" tone="ink">
							{copy.cta}
							<Icon name="arrow-up-right" />
						</Button>
					</Magnetic>
				}
			/>
			<Grid columns={2} gap="lg" align="start">
				<Reveal direction="right">
					<Panel title={copy.education}>
						<Stack gap="lg">
							<ResumeEntry period="2014 - 2017" title={copy.degree} subtitle="IUTPJAA" />
							<ResumeEntry period={copy.certification} title="Google UX Design Professional" subtitle="Coursera / Google" href={siteLinks.credly} />
							<ResumeEntry period={copy.certification} title={copy.efset} subtitle="EF Standard English Test" href={siteLinks.efset} aside="72/100" />
						</Stack>
					</Panel>
				</Reveal>
				<Reveal direction="left" delay={0.1}>
					<Panel title={copy.experience}>
						<Stack gap="lg">
							{copy.jobs.map((job) => (
								<ResumeEntry key={job.company + job.period} period={job.period} title={job.role} subtitle={job.company} />
							))}
						</Stack>
					</Panel>
				</Reveal>
			</Grid>
			<Marquee spaceTop="xl" direction="left">
				<Heading as="p" size="display" width="condensed" tone="stroke" aria-hidden="true">
					{copy.stroke}
				</Heading>
			</Marquee>
		</Section>
	)
}
