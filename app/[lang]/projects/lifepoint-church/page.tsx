import {
    Callout,
    DataTable,
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
    title: "Lifepoint Church - From WordPress to a Custom Platform | Josh D. Rubio",
    description: "How a church website grew from a WordPress theme into a four-language platform: a NestJS API, a content console and a Next.js site with accessibility, dark mode and Arabic right-to-left support. Built with Oswaldo.",
}

const IMG = "/assets/imgs/projects/lifepoint-church"

const SECTIONS = [
    "1. Overview",
    "2. Evolution",
    "3. Goals of the Rebuild",
    "4. Architecture",
    "5. Lifepoint Web",
    "6. Lifepoint Console",
    "7. Lifepoint API",
    "8. Accessibility and Performance",
    "9. Delivery",
    "10. Key Decisions",
    "11. Outcome",
    "12. Team and Role",
]

export default function LifepointChurch() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "Visit Live Site", href: "https://iglesialifepoint.com/" }}
                status="Version 2 · 2026 · rebuilt from the WordPress original"
                title="Lifepoint Church - From WordPress to a Custom Platform"
                summary="The website of an evangelical church in Almería, Spain, rebuilt as three apps that share one content model: a public site in four languages, a console where the team edits it, and the API behind both."
                meta={[
                    { label: "Role", value: "Design Direction & Public Site" },
                    { label: "Team", value: "Built with Oswaldo" },
                    { label: "Stack", value: "Next.js, NestJS, PostgreSQL" },
                    { label: "Timeline", value: "2024 → 2026" },
                ]}
                hero={{ src: `${IMG}/thumbnail.webp`, alt: "The Lifepoint Church website on desktop and phone" }}
            />

            <ProjectBody>
                <TableOfContents items={SECTIONS} />

                <Section title="1. Overview">
                    <Paragraph>
                        <strong>This project has two lives.</strong> In 2024 I designed and built Lifepoint&apos;s first website on WordPress. In 2026 it was rebuilt from scratch as a small platform: a public website, a content console and an API, in a single repository.
                    </Paragraph>
                    <Paragraph>
                        The platform was built together with Oswaldo, who owns the repository and wrote most of its foundations. This page starts with the current version and then goes back to where it began.
                    </Paragraph>
                </Section>

                <Section title="2. Evolution">
                    <Paragraph>
                        The first site did its job: a warm, clear and accessible home online for newcomers, built on the Faith Connect WordPress theme with custom PHP and Tailwind adjustments, a navigation designed for first-time visitors, and a Docker environment that moved to a production-ready EC2 instance. What changed is what the team now asks of it.
                    </Paragraph>
                    <ProcessSteps
                        steps={[
                            { label: "WORDPRESS", hint: "2024 · Version 1" },
                            { label: "DOCKER + EC2", hint: "Production-ready" },
                            { label: "REBUILD", hint: "2026 · Version 2" },
                            { label: "REDESIGN", hint: "October 2026" },
                        ]}
                    />
                    <Figure src={`${IMG}/evolution.png`} alt="Version 1 and Version 2 compared" caption="What changed between the WordPress site and the rebuild" />
                    <Paragraph>
                        A walkthrough of the original site is still online: <a href="https://youtu.be/c_OGHS6QcT8" target="_blank" rel="noopener noreferrer">watch Version 1</a>.
                    </Paragraph>
                </Section>

                <Section title="3. Goals of the Rebuild">
                    <Callout tone="danger" title="⚠️ What the site needed to do">
                        <ul className="text-300 mb-0">
                            <li><strong>Four languages</strong>: Spanish, German, English and Arabic, which is written right to left</li>
                            <li><strong>Edited by non-developers</strong>, in each language, without breaking the layout</li>
                            <li><strong>Accessible to everyone</strong>, including people who zoom, force their own fonts or use a screen reader</li>
                            <li><strong>Fast on modest connections</strong>, with a lot of photography</li>
                        </ul>
                    </Callout>
                    <Callout tone="success" title="✓ The approach">
                        <p className="text-300 mb-0">
                            <strong>The design lives in code, the words live in the database.</strong> Every page is a fixed list of typed sections. Editors change the text, images and visibility of each section in all four languages from a console, and cannot change the layout by accident.
                        </p>
                    </Callout>
                </Section>

                <Section title="4. Architecture">
                    <Paragraph>
                        A monorepo with three apps and one shared package. The API is the only thing that talks to the database; the console and the website use a typed client generated from the API&apos;s own Swagger document, so a change to a field shows up as a compile error everywhere it matters.
                    </Paragraph>
                    <Figure src={`${IMG}/architecture.png`} alt="Lifepoint architecture" caption="One content model, three apps" />
                </Section>

                <Section title="5. Lifepoint Web">
                    <Paragraph>
                        The public site: Next.js 16 and React 19 with Tailwind v4 and next-intl. It renders what the API serves and nothing else, and it is the part I worked on most.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-web-hero.webp`} alt="Home page hero" caption="Home: a slow photo montage behind the title, with the service time as a rolling label" />

                <SubHeading>A hero that moves without slowing the page</SubHeading>
                <Paragraph>
                    The background is a montage of sixteen photos from a church retreat that slowly zoom and cross-fade. The HTML contains only the first photo, so the page paints as fast as a static one; the rest are downloaded one at a time, just before their turn, in WebP at two widths. The montage stops when the tab is hidden or the hero is off screen, and it never starts for people who ask for reduced motion or have data saving on.
                </Paragraph>
                <Paragraph>
                    The service time is a small label that rolls vertically between the summer and the winter hour. It is pure CSS: both lines are always in the page for screen readers, it pauses on hover and focus, and with reduced motion the two lines simply stack.
                </Paragraph>

                <SubHeading>Ministries as a mosaic</SubHeading>
                <Paragraph>
                    The ministries went from a carousel to a mosaic, with the youth ministry as the large tile. Hover and keyboard focus are animated with GSAP, guarded by a media query so nothing moves for reduced motion or on touch devices. The focus animation only runs for keyboard focus, not on click.
                </Paragraph>
                <Figure src={`${IMG}/screen-web-mosaic.webp`} alt="Ministries mosaic" caption="Ministries: one large tile and five small ones, one scrim over the whole card" />

                <SubHeading>Giving, with a card you can copy</SubHeading>
                <Paragraph>
                    The giving page ends in a bank-card-shaped block with the church&apos;s account and a copy button. The copy button only appears when the browser allows clipboard access, and it copies the number without spaces, which banks accept more reliably.
                </Paragraph>
                <FigureGrid
                    images={[
                        { src: `${IMG}/screen-web-giving.webp`, alt: "Giving section, light", caption: "Light theme" },
                        { src: `${IMG}/screen-web-giving-dark.webp`, alt: "Giving section, dark", caption: "Dark theme: every surface shares one black" },
                    ]}
                />

                <SubHeading>One black, a fallback that does not break the layout</SubHeading>
                <Paragraph>
                    In dark mode the sections used to land on three slightly different blacks, which looked like three different pages. They now share one. The handwritten font used for taglines also got a safety net: if it cannot load, the page falls back to a system italic serif resized to the same footprint, which I measured against the font itself, instead of dropping to a sans-serif at the wrong size.
                </Paragraph>
                <Figure src={`${IMG}/screen-web-mobile.webp`} alt="Home page on a phone" caption="The same hero on a phone" narrow />

                <Section title="6. Lifepoint Console">
                    <Paragraph>
                        The console is where the team works: a Next.js app with sign-in and four roles (admin, editor, translator and viewer). Everything the site says is listed as a section, with its state in each of the four languages.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Sections by page", text: "Twenty-eight sections grouped by page, each showing whether it is original, translated or pending in every language, and whether it is visible on the site." },
                            { title: "Side-by-side editing", text: "The Spanish original sits next to the German, English and Arabic versions of every field, with the Arabic field set right to left." },
                            { title: "Translation coverage", text: "A dashboard that counts what is complete and what is waiting for review, per language and per resource. What shows as incomplete there is also what blocks publishing." },
                            { title: "Images with alt text", text: "Every image carries its alternative text in all four languages. Only decorative images can go without it." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/screen-console-sections.webp`} alt="Console: pages and sections" caption="Pages and sections, with the state of each language" />
                <FigureGrid
                    images={[
                        { src: `${IMG}/screen-console-editor.webp`, alt: "Console: section editor", caption: "Editor: four languages side by side" },
                        { src: `${IMG}/screen-console-translations.webp`, alt: "Console: translation coverage", caption: "Translation coverage" },
                    ]}
                />

                <Section title="7. Lifepoint API">
                    <Paragraph>
                        A NestJS 11 service over PostgreSQL with Prisma. It exposes a public API for the website and an admin API for the console, both documented with Swagger.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-api-docs.webp`} alt="Swagger documentation of the API" caption="Interactive API documentation, generated from the code" />
                <FeatureList
                    items={[
                        { title: "A registry of sections", text: "Each section is declared once, with a strict schema: its fields, which ones are shared across languages and which page it belongs to. The console builds its forms from it and the API rejects anything else." },
                        { title: "Migrations as history", text: "Content changes that have to reach production, such as a translation or the removal of a block, are written as reviewed SQL migrations and applied by the deploy." },
                        { title: "Images", text: "Uploads are served back as AVIF and WebP at several widths, and the website picks the right one." },
                        { title: "Cache that follows edits", text: "When an editor saves, the API tells the website to revalidate the affected pages instead of waiting for a timer." },
                    ]}
                />

                <Section title="8. Accessibility and Performance">
                    <Paragraph>
                        Accessibility was treated as an engineering constraint, and the site carries a published accessibility statement. It is a self-assessment made by the team that built it, not an independent audit, and it says so, including the one known gap.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Measured against WCAG 2.2", text: "Every page in every language, in light and dark, at 320 and 1280 pixels, plus a walkthrough with the NVDA screen reader." },
                            { title: "Zoom-friendly layout", text: "Breakpoints and spacing are in rem, and the type scale is capped so text can still reach 200% zoom." },
                            { title: "Right to left", text: "Arabic uses logical CSS properties, its own fonts and its own spacing, rather than a mirrored copy of the Latin layout." },
                            { title: "Motion on request", text: "Every animation, from the hero montage to the rolling hours, respects reduced motion." },
                            { title: "Security headers", text: "A content security policy with a per-request nonce, and fonts and images served from the site itself." },
                        ]}
                    />
                </Section>

                <Section title="9. Delivery">
                    <Paragraph>
                        A single script deploys from the main branch. It validates the monorepo, builds a minimal Docker image per app, tests each image before uploading it, and ships it over SSH without a registry. For the API it takes a database dump first, runs migrations in a disposable container and only then swaps the container; if the new one does not answer, the previous one comes back. Versions are produced from changesets.
                    </Paragraph>
                </Section>

                <Section title="10. Key Decisions">
                    <SubHeading>Fixed sections instead of a page builder</SubHeading>
                    <Paragraph>
                        A page builder gives editors freedom the design cannot afford. A registry gives them the words, the images and visibility, and keeps spacing, type and layout in code, where they can be reviewed and tested.
                    </Paragraph>
                    <SubHeading>Fonts and images from the same origin</SubHeading>
                    <Paragraph>
                        Self-hosting avoids third-party requests and keeps the content security policy strict. The cost is paying attention to what happens when a font is blocked, which is why the fallback is measured.
                    </Paragraph>
                    <SubHeading>Archive, do not delete</SubHeading>
                    <Paragraph>
                        People who leave the team page are archived rather than removed, because a ministry can still list them as its leader. It keeps the history without keeping them on the public page.
                    </Paragraph>
                    <SubHeading>Where an image lives</SubHeading>
                    <Paragraph>
                        Photos the church replaces often live in the console. The hero montage lives in the code instead, optimized at build time, because it is part of the design and has to be fast. It is a trade-off, and the next step is to decide whether the team should manage it.
                    </Paragraph>
                </Section>

                <Section title="11. Outcome">
                    <StatTiles
                        items={[
                            { value: "4", label: "languages, one in RTL" },
                            { value: "3", label: "apps and a shared client" },
                            { value: "28", label: "editable sections" },
                            { value: "202", label: "content rows tracked" },
                            { value: "12", label: "database migrations" },
                            { value: "~32k", label: "lines of TypeScript" },
                        ]}
                    />
                    <Paragraph>
                        The numbers are for the whole platform, which was a team effort.
                    </Paragraph>
                </Section>

                <Section title="12. Team and Role">
                    <FeatureList
                        items={[
                            { title: "Version 1 (2024)", text: "Design and development of the WordPress site, alone: information architecture, theme customization, accessibility, content and the Docker and EC2 setup." },
                            { title: "Version 2 (2026), with Oswaldo", text: "Oswaldo, the repository owner, built the platform: the API, the console and the foundations of the public site." },
                            { title: "My part in Version 2", text: "Design direction and the October 2026 redesign of the public site: the hero montage, the rolling hours, the ministries mosaic, the giving page, the dark mode, the page headers and the font fallback. I also keep the church's content up to date from the console." },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "A theme is a good start", text: "WordPress let us launch quickly and learn what the church actually needed. The rebuild was possible because Version 1 had already answered that." },
                        { title: "Constraints make editing safe", text: "A strict registry meant a new language or a new section could not break the layout." },
                        { title: "Fallbacks are part of the design", text: "A site that looks right only when everything loads is not finished." },
                    ]}
                    next="Move the hero montage into the console if the team wants to manage it, and add an automated accessibility check to the deploy."
                />

                <ProjectCTA
                    links={[
                        { label: "Visit Live Site", href: "https://iglesialifepoint.com/", icon: "ri-external-link-line" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
