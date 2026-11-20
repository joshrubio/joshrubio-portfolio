import Link from "@/components/elements/LocaleLink"
import {
    Callout,
    FeatureList,
    Figure,
    FigureGrid,
    Paragraph,
    ProcessSteps,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    Section,
    StatTiles,
    SubHeading,
    TableOfContents,
    Takeaways,
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "Carmen Zambrano - Journalist Portfolio | Josh D. Rubio",
    description: "A trilingual portfolio for a journalist with over 30 years of experience, rebuilt from WordPress into a fast Next.js site with motion, dark and light themes and no database. Designed and developed end to end.",
}

const IMG = "/assets/imgs/projects/carmen-zambrano"

const SECTIONS = [
    "1. Overview",
    "2. Evolution",
    "3. Goals of the Rebuild",
    "4. Structure",
    "5. The Page",
    "6. Motion and Themes",
    "7. Languages and Search",
    "8. Key Decisions",
    "9. Outcome",
    "10. Role",
]

export default function CarmenZambrano() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "Visit Live Site", href: "https://carmenmazambrano.nl/" }}
                status="Version 2 · November 2026 · rebuilt from the WordPress original"
                title="Carmen Zambrano - Journalist Portfolio"
                summary="The digital home of a veteran journalist, rebuilt from a WordPress site into a static, trilingual Next.js portfolio with dark and light themes, and a clear door to the newspaper she founded."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Client", value: "Carmen Zambrano" },
                    { label: "Stack", value: "Next.js, Framer Motion, GSAP" },
                    { label: "Languages", value: "ES · EN · NL" },
                ]}
                hero={{ src: `${IMG}/thumbnail.webp`, alt: "Carmen Zambrano's portfolio, dark theme" }}
            />

            <ProjectBody>
                <TableOfContents items={SECTIONS} />

                <Section title="1. Overview">
                    <Paragraph>
                        <strong>This project has two lives.</strong> I first designed her portfolio on WordPress and Elementor. In November 2026 I rebuilt it from scratch as a static site, now on its own domain, carmenmazambrano.nl.
                    </Paragraph>
                    <Paragraph>
                        Carmen Zambrano is a social communicator with over thirty years in press, government and corporate journalism, radio and television. Today she lives in Rotterdam, works as an independent journalist and edits <Link href="/projects/the-new-paper">The New Paper</Link>. The portfolio has one job: let her story and her work take centre stage. This page starts with the current version and goes back to where it began.
                    </Paragraph>
                </Section>

                <Section title="2. Evolution">
                    <Paragraph>
                        The first site did what a portfolio needs: a clear structure for decades of work (About, Portfolio, Blog, Contact), a clean look that reflects her authority, and Elementor so she could update content herself. What changed is the context around it.
                    </Paragraph>
                    <ProcessSteps
                        steps={[
                            { label: "WORDPRESS", hint: "Version 1 · Elementor" },
                            { label: "THE NEWSPAPER", hint: "Her own paper grows" },
                            { label: "OWN DOMAIN", hint: "carmenmazambrano.nl" },
                            { label: "NEXT.JS", hint: "Version 2 · Nov 2026" },
                        ]}
                    />
                    <Paragraph>
                        Her newspaper, The New Paper, started as a newspaper-style portfolio and became a publication of its own. That left the portfolio to be rebuilt as what it should always have been: a calm, fast, personal site that points to the paper instead of competing with it.
                    </Paragraph>
                    <Figure src={`${IMG}/ecosystem.png`} alt="Pressroom, The New Paper and the portfolio" caption="Three pieces of software around one journalist" />
                </Section>

                <Section title="3. Goals of the Rebuild">
                    <Callout tone="danger" title="⚠️ What the site needed to do">
                        <ul className="text-300 mb-0">
                            <li><strong>Tell thirty years of work</strong> without overwhelming a visitor who has one minute</li>
                            <li><strong>Speak three languages</strong>: Spanish, English and Dutch, since she writes, works and lives across all three</li>
                            <li><strong>Point to The New Paper</strong> clearly, as her current work, without confusing the two sites</li>
                            <li><strong>Load instantly</strong> and need no database, no login and no yearly maintenance</li>
                        </ul>
                    </Callout>
                    <Callout tone="success" title="✓ The approach">
                        <p className="text-300 mb-0">
                            <strong>The words live in dictionaries, the facts live in one file.</strong> The page is generated once per language, so there is nothing to run on a server and nothing to hack.
                        </p>
                    </Callout>
                </Section>

                <Section title="4. Structure">
                    <Paragraph>
                        A small proxy picks the language from the visitor&apos;s cookie or browser setting and redirects to <code>/es</code>, <code>/en</code> or <code>/nl</code>. Each is a static page. Texts come from three dictionaries that must share the same keys, and everything that does not depend on language, such as roles, dates and skills, lives in a single data file. The site needs no environment variables to deploy.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/structure.png`} alt="How the portfolio is structured" caption="From a visitor's language to a static page" />

                <Section title="5. The Page">
                    <Paragraph>
                        One long page with five anchors: Home, Story, Experience, Skills and Blog. A profile card sits beside the content on desktop and moves above it on a phone.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Hero and counters", text: "A photograph of Rotterdam's Erasmus Bridge, served at two sizes, with three numbers that summarise a career: 30+ years, 14 roles, 3 working languages." },
                            { title: "The New Paper", text: "A card, labelled as an advertisement, that presents the newspaper and links to it." },
                            { title: "Experience as a timeline", text: "Fourteen roles from a radio station in 1993 to independent journalism today, each with place, period and a short description." },
                            { title: "Voices from the newsroom", text: "A carousel of quotes about published articles." },
                            { title: "Latest publications", text: "Four recent articles with their original Dutch titles, linking to the paper." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/screen-newspaper.webp`} alt="The New Paper section" caption="The newspaper, presented as her current work" />
                <Figure src={`${IMG}/screen-experience.webp`} alt="Experience timeline" caption="Experience: fourteen roles on one timeline" />
                <Figure src={`${IMG}/screen-blog.webp`} alt="Latest publications" caption="Latest publications, with the original Dutch titles" />

                <Section title="6. Motion and Themes">
                    <Paragraph>
                        The site is dark by default, with a light theme one click away. The choice is remembered in the browser. Motion is a layer on top of content: sections reveal once as they enter the screen with Framer Motion, GSAP and ScrollTrigger animate the hero title and its cover photograph, and Lenis smooths scrolling and anchor jumps. A short preloader plays on the first visit of a session and is skipped afterwards.
                    </Paragraph>
                    <FigureGrid
                        images={[
                            { src: `${IMG}/thumbnail.webp`, alt: "Dark theme", caption: "Dark, the default" },
                            { src: `${IMG}/screen-light.webp`, alt: "Light theme", caption: "Light" },
                        ]}
                    />
                    <Figure src={`${IMG}/screen-mobile.webp`} alt="The portfolio on a phone" caption="On a phone, the profile card moves above the content" narrow />
                </Section>

                <Section title="7. Languages and Search">
                    <FigureGrid
                        images={[
                            { src: `${IMG}/screen-es.webp`, alt: "Spanish version", caption: "Spanish" },
                            { src: `${IMG}/screen-nl.webp`, alt: "Dutch version", caption: "Dutch" },
                        ]}
                    />
                    <FeatureList
                        items={[
                            { title: "Same keys in three files", text: "Spanish, English and Dutch dictionaries are edited together, so no language can quietly fall behind." },
                            { title: "Article titles stay in Dutch", text: "The articles are published in Dutch, so titles are not translated and the link carries the visitor's language prefix." },
                            { title: "Search and sharing", text: "Per-language metadata and alternates, a sitemap and robots file, structured data for the person and her newspaper (with no email or phone in it), and a share image." },
                        ]}
                    />
                </Section>

                <Section title="8. Key Decisions">
                    <SubHeading>Files instead of a page builder</SubHeading>
                    <Paragraph>
                        Elementor let Carmen edit her own page. The rebuild gives that up on purpose: the content is stable, and a file in git is faster, safer and free to host. The cost is real, since a change now goes through me, and that is acceptable for a portfolio that changes a few times a year.
                    </Paragraph>
                    <SubHeading>Static pages, one per language</SubHeading>
                    <Paragraph>
                        Generating the three languages at build time means no server work per visit and no runtime translation. Adding a fourth language is a dictionary and a line in the configuration.
                    </Paragraph>
                    <SubHeading>Two sites, two jobs</SubHeading>
                    <Paragraph>
                        The newspaper is a product with a console and a mailing list. The portfolio is a person. Keeping them apart lets each one stay simple and lets the portfolio link to the paper as her current work.
                    </Paragraph>
                </Section>

                <Section title="9. Outcome">
                    <StatTiles
                        items={[
                            { value: "3", label: "languages, one page each" },
                            { value: "14", label: "roles on the timeline" },
                            { value: "30+", label: "years of work told" },
                            { value: "0", label: "databases or environment variables" },
                        ]}
                    />
                </Section>

                <Section title="10. Role">
                    <FeatureList
                        items={[
                            { title: "Version 1", text: "Information architecture, visual identity, WordPress and Elementor implementation, and a responsive reading experience, alone." },
                            { title: "Version 2", text: "The rebuild: the design, the three dictionaries, the motion, the themes, the search metadata and the deployment, alone." },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Rebuild when the context changes", text: "Version 1 was not wrong. A newspaper of her own changed what her portfolio had to be." },
                        { title: "Give up editing deliberately", text: "Trading a page builder for files is a good deal only when the cost is named and accepted." },
                        { title: "Keep motion on top of content", text: "The page reads fully before anything animates." },
                    ]}
                    next="Respect the reduced-motion setting across every animation, and add her latest articles automatically from the newspaper."
                />

                <ProjectCTA
                    links={[
                        { label: "Visit Live Site", href: "https://carmenmazambrano.nl/", icon: "ri-external-link-line" },
                        { label: "The New Paper Case Study", href: "/projects/the-new-paper" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
