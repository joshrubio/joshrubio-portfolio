import {
    BulletList,
    Callout,
    Carousel,
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
    Takeaways,
} from "@/components/case-study"

export const metadata = {
    title: "Pan de Vida - Multilingual Outreach Site | Josh D. Rubio",
    description: "A welcoming website in Arabic, Spanish and English for a Christian community, with right-to-left layout, a video library and a contact form that emails the team. Designed and developed end to end.",
}

const IMG = "/assets/imgs/projects/pan-de-vida"

export default function PanDeVida() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "Visit Live Site", href: "https://www.pandevidaparati.com/" }}
                status="Live · Arabic, Spanish and English · 2025 to 2026"
                title="Pan de Vida - Multilingual Outreach Site"
                summary="A calm, three-language front door for people who have questions about faith: Arabic first and right to left, with Spanish and English beside it, a library of videos and a form that reaches the team."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Client", value: "Pan de Vida" },
                    { label: "Stack", value: "Next.js, Tailwind CSS, Framer Motion" },
                    { label: "Languages", value: "AR · ES · EN" },
                ]}
                hero={{ src: `${IMG}/hero.webp`, alt: "Pan de Vida home page, English version" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>Pan de Vida (Bread of Life) is a community that wants to answer people&apos;s questions about God, and this site is where they start.</strong> It had to feel welcoming before it said anything, and it had to work in the languages of the people it speaks to.
                    </Paragraph>
                    <Paragraph>
                        I designed and built it for the community: one page with a short, warm path from a first look to a conversation. A Bible to read online, an introduction to who Jesus is, a library of videos, a booklet, and a form to write to the team. The default language is Arabic, with Spanish and English alongside.
                    </Paragraph>
                </Section>

                <Section title="2. What It Needed to Do">
                    <Callout tone="danger" title="⚠️ What it needed to do">
                        <BulletList>
                            <li><strong>Welcome a stranger</strong> in a tone that is sincere and never pushy</li>
                            <li><strong>Read naturally in Arabic</strong>, right to left, not as a translation squeezed into a left-to-right layout</li>
                            <li><strong>Point to good material</strong> that already exists, such as films, a Bible and a booklet, instead of recreating it</li>
                            <li><strong>Let someone write privately</strong>, with a reply that goes to a real person</li>
                            <li><strong>Cost almost nothing to run</strong>, with no admin area and no database to look after</li>
                        </BulletList>
                    </Callout>
                    <Callout tone="success" title="✓ The approach">
                        <Paragraph>
                            <strong>The words live in dictionaries and the pages are generated once per language.</strong> The only code that runs on a server is the one action that sends an email.
                        </Paragraph>
                    </Callout>
                    <ProcessSteps
                        steps={[
                            { label: "ADDRESS", hint: "Any link on the site" },
                            { label: "LANGUAGE", hint: "AR · ES · EN" },
                            { label: "DICTIONARY", hint: "One JSON per language" },
                            { label: "PAGE", hint: "Static, RTL for Arabic" },
                        ]}
                    />
                </Section>

                <Section title="3. Structure">
                    <Paragraph>
                        Every page lives under a language segment, <code>/arabic</code>, <code>/spanish</code> or <code>/english</code>. A small middleware sends any address without a language to the default one, so the bare domain opens in Arabic. Texts come from three JSON dictionaries, and the page sets the reading direction from the language. A short context file in the repository records the structure, the section order and the tone of voice, so later changes keep the same character.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/structure.webp`} alt="From an address to a static page" caption="From an address to a page in the visitor's language" />

                <Section title="4. The Page">
                    <Paragraph>
                        One long page of eight sections, each a component that reads its own part of the dictionary. The look is warm on purpose: cream backgrounds, a wine-red accent, large type and plenty of space.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Hero", text: "A full-height photograph of an open Bible that fades as you scroll, with a one-sentence invitation." },
                            { title: "Read or listen to the Bible", text: "A card that opens an online Bible in the visitor's language." },
                            { title: "Who is Jesus?", text: "A short, plain introduction on a dark red band that breaks the page." },
                            { title: "Videos", text: "A featured film in a dark, cinema-style player over a blurred still, then a row of three more. They are YouTube embeds; nothing is hosted here." },
                            { title: "Your Story", text: "A link to a 36-page booklet that summarises the Bible, in the visitor's language, from its publisher." },
                            { title: "The Good News", text: "Three questions as cards, then a numbered five-part message." },
                            { title: "Who We Are and Contact", text: "The community in its own words, and the contact form." },
                        ]}
                    />
                </Section>
                <Carousel
                    images={[
                        { src: `${IMG}/screen-hero.webp`, alt: "Hero", caption: "1. The hero: an invitation, nothing more" },
                        { src: `${IMG}/screen-bible.webp`, alt: "Bible reading and Who is Jesus", caption: "2. Read the Bible online, and who Jesus is" },
                        { src: `${IMG}/screen-goodnews.webp`, alt: "The Good News", caption: "3. The Good News, starting from three questions" },
                        { src: `${IMG}/screen-about.webp`, alt: "Who We Are", caption: "4. Who We Are, in the community's own words" },
                        { src: `${IMG}/screen-contact.webp`, alt: "Contact form", caption: "5. The contact form" },
                    ]}
                    interval={6000}
                />
                <Figure src={`${IMG}/screen-videos.webp`} alt="Video collection" caption="The video collection: three more stories under the featured film" />

                <Section title="5. Three Languages, Right to Left">
                    <Paragraph>
                        Arabic is the default and the first thing most visitors see. The page switches to a right-to-left layout for it, the brand carries both names (Pan de Vida and خبز الحياة), and the language picker is a dropdown on desktop and three buttons in the phone menu.
                    </Paragraph>
                    <FigureGrid
                        images={[
                            { src: `${IMG}/screen-ar.webp`, alt: "Arabic version, right to left", caption: "Arabic, right to left" },
                            { src: `${IMG}/screen-es.webp`, alt: "Spanish version", caption: "Spanish" },
                        ]}
                    />
                    <FigureGrid
                        images={[
                            { src: `${IMG}/screen-mobile-ar.webp`, alt: "Arabic version on a phone", caption: "Arabic on a phone", narrow: true },
                            { src: `${IMG}/screen-mobile-menu.webp`, alt: "Phone menu with the language buttons", caption: "The phone menu with the language buttons", narrow: true },
                        ]}
                    />
                    <FeatureList
                        items={[
                            { title: "Content that differs by language", text: "The Arabic video list is its own: four programs, including the film in Moroccan Arabic. Spanish and English have their own four videos each." },
                            { title: "A section only one language has", text: "Arabic adds a testimonies section that links to a library of testimonies from Morocco. The page skips it for the other languages because their dictionaries do not define it." },
                            { title: "Same shape, three files", text: "The three dictionaries share their keys, so a text is always edited in all of them together." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/languages.webp`} alt="Dictionaries and sections by language" caption="Sections follow the dictionary: Arabic has one more" />

                <Section title="6. Contact">
                    <Paragraph>
                        The form asks for a name, an email and a message. A server action checks that all three are present and sends the email through Resend, with the visitor&apos;s address as the reply-to, so the team answers the person directly. The destination and the API key stay on the server. The form shows loading, success and error states in the visitor&apos;s language.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/contact.webp`} alt="From the form to the team's inbox" caption="From the form to the team's inbox, with no database" />

                <Section title="7. Key Decisions">
                    <SubHeading>Arabic as the default language</SubHeading>
                    <Paragraph>
                        The site opens in Arabic, which fits the Arabic material it links to, such as the film in Moroccan Arabic and the testimonies from Morocco. The cost is that the bare domain does not look at the browser&apos;s language: a Spanish or English reader lands in Arabic and has to pick their own.
                    </Paragraph>
                    <SubHeading>Dictionaries, not text in components</SubHeading>
                    <Paragraph>
                        The rule is that texts live in the dictionaries, not in components. That keeps three languages honest and makes right-to-left a layout concern instead of a translation one. The cost is manual: every change is made in three files.
                    </Paragraph>
                    <SubHeading>Link out instead of hosting</SubHeading>
                    <Paragraph>
                        Films come from YouTube, the Bible from an online Bible and the booklet from its publisher. The site stays small and has nothing to moderate, and it depends on those services staying available.
                    </Paragraph>
                    <SubHeading>Write the tone down</SubHeading>
                    <Paragraph>
                        The context file names the voice: welcoming, compassionate, direct and honest, never pushy. It is there for whoever edits the site next, human or Claude, so new text sounds like the old.
                    </Paragraph>
                </Section>

                <Section title="8. Outcome and Role">
                    <StatTiles
                        items={[
                            { value: "3", label: "languages, Arabic by default" },
                            { value: "8", label: "sections per page, 9 in Arabic" },
                            { value: "4", label: "videos per language" },
                            { value: "0", label: "databases or admin screens" },
                        ]}
                    />
                    <FeatureList
                        items={[
                            { title: "My part", text: "The design, the three dictionaries and the right-to-left layout, the section components, the motion, the contact action and the deployment, alone." },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Right to left is a design decision", text: "Making Arabic the default, not an afterthought, shaped the whole page." },
                        { title: "Point to what already exists", text: "Linking to films, a Bible and a booklet kept the site small and the message the community's own." },
                        { title: "Put the voice in writing", text: "A tone guide in the repository protects the character of the site as more hands touch it." },
                    ]}
                    next="Choose the first language from the browser setting instead of always opening in Arabic."
                />

                <ProjectCTA
                    links={[
                        { label: "Visit Live Site", href: "https://www.pandevidaparati.com/", icon: "ri-external-link-line" },
                        { label: "View Source Code", href: "https://github.com/joshrubio/Pandevida", icon: "ri-github-fill" },
                        { label: "Lifepoint Church", href: "/projects/lifepoint-church" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
