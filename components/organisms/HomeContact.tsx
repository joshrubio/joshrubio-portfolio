import { Cutout } from "@/components/atoms/Cutout"
import { Grid } from "@/components/atoms/Grid"
import { Heading } from "@/components/atoms/Heading"
import { Reveal } from "@/components/atoms/Reveal"
import { SplitText } from "@/components/atoms/SplitText"
import { Stack } from "@/components/atoms/Stack"
import { ContactForm } from "@/components/molecules/ContactForm"
import { ContactLink } from "@/components/molecules/ContactLink"
import { Panel } from "@/components/molecules/Panel"
import { Section } from "@/components/molecules/Section"
import { SectionHeader } from "@/components/molecules/SectionHeader"
import { siteLinks } from "@/data/site"
import type { Dictionary } from "@/i18n/dictionaries"

export interface HomeContactProps {
	copy: Dictionary["home"]["contact"]
}

export function HomeContact({ copy }: HomeContactProps) {
	return (
		<Section id="contact" tone="ink" torn="top">
			<SectionHeader label="07" title={copy.title} subtitle={copy.subtitle} tone="ink" />
			<Grid columns={2} gap="lg" align="start">
				<Stack gap="xl">
					<Stack gap="lg">
						<ContactLink icon="phone" label="Phone Number" value="+34-643-529-116" href={`tel:${siteLinks.phone}`} />
						<ContactLink icon="mail" label="Email" value={siteLinks.email} href={`mailto:${siteLinks.email}`} />
						<ContactLink icon="github" label="GitHub" value="@joshrubio" href={siteLinks.github} external />
						<ContactLink icon="linkedin" label="LinkedIn" value="Josh D. Rubio" href={siteLinks.linkedin} external />
					</Stack>
					<Reveal direction="pop">
						<Cutout photo="sitting-floor" alt="" size="md" sizes="20rem" />
					</Reveal>
				</Stack>
				<Reveal direction="left">
					<Panel title="mail.app">
						<ContactForm copy={copy} recipient={siteLinks.email} />
					</Panel>
				</Reveal>
			</Grid>
			<Heading as="p" size="display" width="condensed" tone="strokePaper" aria-hidden="true" align="center">
				<SplitText text="josh.rubio" by="char" playful />
			</Heading>
		</Section>
	)
}
