import Link from "@/components/atoms/LocaleLink"
import {
    Callout,
    DataTable,
    FeatureList,
    Figure,
    Paragraph,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    Section,
    StatTiles,
    SubHeading,
    TableOfContents,
    Takeaways,
    Terminal,
} from "@/components/case-study"

export const metadata = {
    title: "Pressroom - Press Release Automation | Josh D. Rubio",
    description: "A markdown-and-git system that lets Claude Code draft Dutch press releases for an independent journalist and remember every contact and message. A public repository with no contacts in it. Designed and built end to end.",
}

const IMG = "/assets/imgs/projects/pressroom"

const SECTIONS = [
    "1. Overview",
    "2. The Data Model",
    "3. The Workflow",
    "4. Style Profiles and Templates",
    "5. Memory",
    "6. Publishing to the Website",
    "7. Public and Private",
    "8. Key Decisions",
    "9. Outcome",
]

export default function Pressroom() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/pressroom" }}
                status="Early scaffold · in use since October 2026"
                title="Pressroom - Press Release Automation"
                summary="A journalist sends material to local media all the time. Pressroom lets Claude draft the Dutch press release from a dump of photos and notes, prepare the emails and messages, and remember who was told what."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Stack", value: "TypeScript, Zod, Vitest" },
                    { label: "Type", value: "Automation for Claude Code" },
                    { label: "Data", value: "Markdown + YAML, in git" },
                ]}
                hero={{ src: `${IMG}/thumbnail.webp`, alt: "A Pressroom press release as a markdown file" }}
            />

            <ProjectBody>
                <TableOfContents items={SECTIONS} />

                <Section title="1. Overview">
                    <Paragraph>
                        <strong>Built for one journalist, in her language.</strong> Carmen Zambrano writes and sends press material in Rotterdam, in Dutch, for outlets that each have their own style. Doing it by hand means rewriting the same structure, hunting for the last email thread and trying to remember who already got the flyer.
                    </Paragraph>
                    <Paragraph>
                        Pressroom is the memory and the rules around that work. Claude Code does the drafting, the repository holds what it needs to draft well, and nothing is sent without a yes in the chat. It is the first piece of a small ecosystem with <Link href="/projects/the-new-paper">The New Paper</Link> and <Link href="/projects/carmen-zambrano">her portfolio</Link>.
                    </Paragraph>
                    <Figure src={`${IMG}/ecosystem.webp`} alt="Pressroom, The New Paper and the portfolio" caption="Pressroom drafts, the newspaper publishes, the portfolio shows" />
                    <Paragraph>
                        Its first real release, about an exhibition in Rotterdam, became an article in the newspaper.
                    </Paragraph>
                </Section>

                <Callout tone="danger" title="⚠️ The Problem">
                    <Paragraph>
                        Every release needs the right tone for the outlet, the right facts from a flyer, the right photos with the right credit, and a record of who was contacted and what they said. That context lives in a head, an inbox and a WhatsApp history, and a tool that forgets all of it has to be told everything again.
                    </Paragraph>
                </Callout>

                <Callout tone="success" title="✓ The Solution">
                    <Paragraph>
                        <strong>Make the memory a set of files.</strong> People, organizations, venues, subjects, releases and conversations are markdown with frontmatter. An AI with file access reads them, drafts from them and writes back to them, and the whole history is versioned in git.
                    </Paragraph>
                </Callout>

                <Section title="2. The Data Model">
                    <Paragraph>
                        Eleven entities, each a markdown file with YAML frontmatter, referencing each other by id. They are validated with Zod every time they load, so a malformed file fails loudly instead of quietly drifting.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/entity-model.webp`} alt="The Pressroom entity model" caption="Who publishes, what it is about, and what happened" />
                <FeatureList
                    items={[
                        { title: "Subjects link the facts", text: "An exhibition points to its organization, the people involved, the venue and its assets, so a release is built from linked records rather than retyped details." },
                        { title: "Assets carry their rights", text: "Every photo has a credit and a rights flag, and only assets marked as cleared are attached to anything." },
                        { title: "A reference check", text: "The store can list every broken reference. It has to come back empty before data is committed, and the tests check it." },
                    ]}
                />

                <Section title="3. The Workflow">
                    <Paragraph>
                        A new release starts with a dump: photos, a flyer, a few notes. Claude creates or reuses the entities, reads the outlet profile, the template for the beat and two or three similar past releases, and drafts the text in Dutch with status <em>draft</em>. Anything the source does not say is marked <code>[TE BEVESTIGEN]</code> instead of being invented.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/workflow.webp`} alt="From a dump to a sent release" caption="Drafting, approval and memory" />
                <Terminal
                    title="pressroom · new release"
                    lines={[
                        { who: "you", text: "new release: the Licht en Water opening, flyer in inbox/2026-11-03" },
                        { who: "dim", text: "reading the outlet profile, the culture template and two similar releases" },
                        { who: "ok", text: "subject, venue and organization created, 1 asset linked" },
                        { who: "agent", text: "Draft saved as data/releases/2026-11-03-licht-en-water.md, in Dutch." },
                        { who: "flag", text: "[TE BEVESTIGEN] ticket price and opening hours are not in the flyer" },
                        { who: "you", text: "approved, prepare the email and the WhatsApp text" },
                        { who: "ok", text: "email saved as a Gmail draft, WhatsApp text ready to copy, thread logged" },
                    ]}
                    caption="Illustrative session with the fictional example from the repository: the steps and the rules are real, the exact wording is an example."
                />

                <Section title="4. Style Profiles and Templates">
                    <Paragraph>
                        Each outlet has a profile that describes how it writes: how a headline is built, how long an intro is, how quotes and sources are handled, what closes a piece. A beat, such as culture, has a template with the ten parts of a release, from headline to editor&apos;s note.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Derived, not copied", text: "A profile is written from samples of the outlet's articles, and contains patterns only. No sentence from those articles is in the repository." },
                            { title: "Partner outlets", text: "The profile of a regional broadcaster points to the culture agenda it partners with, because a cultural release should follow that agenda's style." },
                            { title: "Rules, not just tone", text: "Press text is in Dutch, facts are never invented, and nothing is attached without cleared rights." },
                        ]}
                    />
                </Section>

                <Section title="5. Memory">
                    <Paragraph>
                        Every email and WhatsApp conversation is a thread with its communications, and anything pending is an action. The thread&apos;s status is never typed by hand. It is computed from what is on record, in a fixed order, so it cannot go stale.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/thread-status.webp`} alt="How a thread's status is derived" caption="Six statuses, checked in order" />

                <Section title="6. Publishing to the Website">
                    <Paragraph>
                        One command turns an approved release into an article entry in the newspaper&apos;s content file, placed at the top of its list. The target repository comes from a gitignored environment file, so no local path is ever committed. Nothing is committed or pushed: the diff is reviewed and published from the website&apos;s own repository.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/publish-web.webp`} alt="Publishing a release to the website" caption="From a release to a reviewable diff" />

                <Section title="7. Public and Private">
                    <Paragraph>
                        The repository is public because the system is worth sharing. A journalist&apos;s contacts are not. The code, schemas, profiles, templates and fictional examples are tracked, and everything real lives in folders that git ignores.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/public-private.webp`} alt="What is public and what is private" caption="The system is open, the memory is local" />

                <Section title="8. Key Decisions">
                    <SubHeading>Instructions over code for the drafting</SubHeading>
                    <Paragraph>
                        The drafting is not a pipeline. It is a short, strict set of instructions that Claude Code follows with the repository in reach. The code is only what must be exact: the schemas, the reference check, the status rule and the publishing step.
                    </Paragraph>
                    <SubHeading>Markdown instead of a database</SubHeading>
                    <Paragraph>
                        Files are readable by a person, diffable in git and directly usable by an AI. A database would hide the memory behind queries that nobody would open.
                    </Paragraph>
                    <SubHeading>Derive state, store facts</SubHeading>
                    <Paragraph>
                        Communications and actions are facts. A thread&apos;s status is a conclusion from those facts, so it is computed and never stored.
                    </Paragraph>
                    <SubHeading>Approval is part of the system</SubHeading>
                    <Paragraph>
                        Emails are saved as drafts, WhatsApp messages are text to copy, and a person says yes in the chat first. For a tool that writes in someone&apos;s name, the safest feature is the one that cannot send by itself.
                    </Paragraph>
                </Section>

                <Section title="9. Outcome">
                    <StatTiles
                        items={[
                            { value: "11", label: "entity types" },
                            { value: "2", label: "outlet profiles" },
                            { value: "6", label: "derived thread statuses" },
                            { value: "0", label: "real contacts in the public repo" },
                        ]}
                    />
                    <DataTable
                        head={["Built", "Next"]}
                        rows={[
                            ["Entity models, store and reference check", "A retrieval index over past releases"],
                            ["Thread status, derived", "Deeper Gmail and Drive integration"],
                            ["Two outlet profiles and a culture template", "More beats beyond culture"],
                            ["Release to article conversion", "Templates refined per outlet and type of subject"],
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Memory is the product", text: "The drafting is the visible part, but remembering who was told what is what saves the time." },
                        { title: "A public repository forces good boundaries", text: "Having to keep contacts out of it made the layout of the data cleaner." },
                        { title: "Give the AI files, not a database", text: "What a person can read and diff, an AI can use too." },
                    ]}
                    next="Index past releases for retrieval, connect Gmail and Drive more directly, and add beats beyond culture."
                />

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/pressroom", icon: "ri-github-fill" },
                        { label: "The New Paper", href: "/projects/the-new-paper" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
