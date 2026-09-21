import {
    FeatureList,
    Figure,
    FigureGrid,
    Paragraph,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    Section,
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "RX Library Homepage - Work in Progress | Josh D. Rubio",
    description: "Marketing homepage for the RX Library telehealth platform, built with Next.js, Tailwind CSS and a Three.js animation. Designed and developed end to end.",
}

const IMG = "/assets/imgs/projects/rxlibrary-homepage"

export default function RxLibraryHomepage() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View Live Site", href: "https://rxlibrary-homepage-prototype.vercel.app" }}
                status="Work in progress"
                title="RX Library - Homepage"
                summary="The public face of the RX Library telehealth platform: a fast, animated marketing page that explains the product and points visitors to the patient, provider and operator experiences."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Stack", value: "Next.js, Tailwind, Three.js" },
                    { label: "Deploy", value: "Vercel" },
                    { label: "Status", value: "In progress" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "RX Library homepage" }}
            />

            <ProjectBody>
                <Section title="Overview">
                    <Paragraph>
                        This homepage is designed and built entirely by me and keeps evolving alongside the platform it presents (see the <a href="/projects/rx-library">RX Library</a> project). It lives as a standalone Next.js app that deploys as a static marketing page: no Docker, no backend, no internal packages.
                    </Paragraph>
                    <Paragraph>
                        It is extracted from the main application and stays in sync with it, so the marketing site and the product share the same components and look.
                    </Paragraph>
                </Section>

                <Section title="Highlights">
                    <FeatureList
                        items={[
                            { title: "3D storytelling", text: "Black-and-gold Three.js cubes open and close the page, with a narrative cube that tells the product story." },
                            { title: "One platform, one diagram", text: "A hub diagram shows how the pieces of the platform connect around a single core." },
                            { title: "White-label showcase", text: "A carousel demonstrates how each operator can ship the platform under their own brand." },
                            { title: "Built for every role", text: "Patient, clinician and operator previews in browser frames show what each user gets." },
                            { title: "Scroll-reveal motion", text: "Fade-up transitions keep dense sections light and readable." },
                            { title: "Lightweight by design", text: "Static deployment on Vercel with automatic deploys on every push." },
                        ]}
                    />
                </Section>

                <Figure src={`${IMG}/narrative.png`} alt="Platform hub diagram" caption="Platform hub diagram" />
                <FigureGrid
                    images={[
                        { src: `${IMG}/previews.png`, alt: "Role previews", caption: "Built for every role" },
                        { src: `${IMG}/mobile.png`, alt: "Mobile view", caption: "Mobile" },
                    ]}
                />

                <ProjectCTA
                    links={[
                        { label: "View Live Site", href: "https://rxlibrary-homepage-prototype.vercel.app", icon: "ri-external-link-line" },
                        { label: "Source Code", href: "https://github.com/joshrubio/rxlibrary-homepage-prototype", icon: "ri-github-fill" },
                        { label: "Contact Me", href: "/#contact" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
