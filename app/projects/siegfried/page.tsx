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
    Takeaways,
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "Siegfried - Development Control Plane | Josh D. Rubio",
    description: "A markdown vault with RAG search over Supabase and pgvector, plus an operational kanban that took five satellite apps (Janus, Siren, Themis, Athena and Argus) from idea to launch. Designed and built end to end.",
}

const IMG = "/assets/imgs/projects/siegfried"

export default function Siegfried() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/Siegfried" }}
                title="Siegfried - Development Control Plane"
                summary="The base I built to research, document and ship a series of five small products: a markdown vault that works as long-term memory, semantic search over it, and a kanban that tracks every satellite project from idea to launch."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Stack", value: "Next.js, Supabase, pgvector" },
                    { label: "Scope", value: "1 hub + 5 satellites" },
                    { label: "Timeline", value: "18 days" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "Siegfried" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>Siegfried is a project about building projects.</strong> I wanted a set of focused demos, each in a domain that is not my own (developer platforms, underwater acoustics, compliance, drone planning and operations consoles), and I wanted them to come out consistent, honest and fast. So before the first one I built the place where they would be planned, written down and tracked.
                    </Paragraph>
                    <Paragraph>
                        It is three things in one Next.js app: a vault of markdown notes with frontmatter, a RAG search over that vault backed by Supabase and pgvector, and an operational dashboard with a card and a checklist per satellite. Each satellite then lives in its own repository, with its own mythological name and its own visual identity.
                    </Paragraph>
                </Section>

                <Figure src={`${IMG}/ecosystem.png`} alt="Siegfried and its five satellites" caption="The hub and the five satellites it tracks" />

                <Callout tone="danger" title="⚠️ The Problem">
                    <p className="text-300 mb-2">
                        Building several small products in a row fails in predictable ways:
                    </p>
                    <ul className="text-300 mb-0">
                        <li><strong>Lessons get lost</strong> between builds, so the same Next.js and tooling traps cost time again</li>
                        <li><strong>Every app looks the same</strong>, or worse, looks like a recolour of the previous one</li>
                        <li><strong>Status lives in your head</strong> and drifts between machines</li>
                        <li><strong>Demos overclaim</strong>: a simulated feed quietly presented as a real system</li>
                    </ul>
                </Callout>

                <Callout tone="success" title="✓ The Solution">
                    <p className="text-300 mb-0">
                        <strong>Write it down, make it searchable, track it live.</strong> Every decision and gotcha becomes a vault note, the vault is indexed for semantic search, and each satellite&apos;s stage and checklist sit in a shared database. A written playbook (benchmark first, then identity, then build, then an honest docs page) made each new app start from where the last one ended.
                    </p>
                </Callout>

                <ProcessSteps
                    steps={[
                        { label: "WRITE", hint: "Vault notes" },
                        { label: "INDEX", hint: "Embeddings" },
                        { label: "SEARCH", hint: "pgvector" },
                        { label: "TRACK", hint: "Kanban" },
                    ]}
                />

                <Section title="2. The Dashboard">
                    <Paragraph>
                        The home page is a hero with live counts and a project grid filtered by stage. Every card shows the project&apos;s concept, its stage and the progress of its production checklist.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-home-dark.webp`} alt="Siegfried home page" caption="Home: the hero with live counts" />
                <Figure src={`${IMG}/screen-projects-dark.webp`} alt="Project grid" caption="All five satellites, launched" />
                <Paragraph>
                    Each project has a detail page in the spirit of a Vercel project card: links to the repository and to the vault spec, the deploy state, a stage selector and the editable checklist. Changes are written straight to Supabase, so the local app and a deployed one always show the same state.
                </Paragraph>
                <FigureGrid
                    images={[
                        { src: `${IMG}/screen-project-dark.webp`, alt: "Project detail, dark", caption: "Project detail: stage and checklist" },
                        { src: `${IMG}/screen-project-light.webp`, alt: "Project detail, light", caption: "The same page in light mode" },
                    ]}
                />

                <Section title="3. The Vault">
                    <Paragraph>
                        The vault is a folder of markdown files split into research, projects, decisions and docs. Every note carries the same frontmatter (type, project, tags, status and dates), and the dashboard renders it with a sidebar that expands on hover. A <code>private/</code> folder holds personal job-search research: it is gitignored and is never indexed, locally or in the cloud.
                    </Paragraph>
                </Section>
                <FigureGrid
                    images={[
                        { src: `${IMG}/screen-vault-dark.webp`, alt: "Vault sidebar", caption: "The vault sidebar, expanded on hover" },
                        { src: `${IMG}/screen-note-light.webp`, alt: "A vault note", caption: "A note rendered in the reader" },
                    ]}
                />
                <SubHeading>A sidebar that does not jump</SubHeading>
                <Paragraph>
                    The collapsed rail and the expanded panel share a fixed header zone and the same content offset, and the expanded panel overlays the page instead of pushing it. It sounds small, but every earlier version jumped on hover, and the same pattern was later reused for Janus&apos;s assistant.
                </Paragraph>

                <Section title="4. Architecture">
                    <Paragraph>
                        The files stay the source of truth, and the database only holds what has to be shared live.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Indexer", text: "Splits each note by ## heading, embeds every chunk with Voyage (voyage-4-lite, 1024 dimensions) and replaces that note's rows. It paces itself for the free tier and retries on rate limits." },
                            { title: "Search", text: "An API route embeds the question and calls a match_vault_chunks SQL function, with optional project and type filters. It returns ranked chunks and no generated text: the vault is for finding my own notes, not for chatting with them." },
                            { title: "Project state", text: "A satellite_projects table with the stage and a five-item checklist replaced an earlier projects.json file, which would not survive an ephemeral deploy." },
                            { title: "Access", text: "A cookie gate in proxy.ts and the new Supabase secret-key format, used only on the server." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/architecture.png`} alt="Siegfried architecture" caption="From markdown files to search and live status" />

                <Section title="5. The Satellite Playbook">
                    <Paragraph>
                        The most useful thing in the vault turned out to be a document of recurring patterns, updated after every build. It covers Next.js 16 with Cache Components (where Suspense is needed, which runtime flags break the build), MapLibre under Turbopack, lint rules that only <code>eslint</code> catches, and a habit of precomputing small corpora into static files instead of standing up a database per app.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/playbook.png`} alt="The satellite playbook" caption="Six steps per satellite, three stages in the tracker" />

                <SubHeading>Design: one family, five identities</SubHeading>
                <Paragraph>
                    The first version of Janus only swapped Siegfried&apos;s palette for a warm one, and it read as a reskin. The rule that replaced it: a shared neutral base for every surface, and a difference made of an accent reserved for functional signals, a type pairing, a corner radius and a layout grammar. Each identity started from two or three real products in that domain, studied from screenshots rather than from memory.
                </Paragraph>
                <Figure src={`${IMG}/identities.png`} alt="Satellite identity system" caption="The shared base and each satellite's accent, type and radius" />

                <Section title="6. The Satellites">
                    <DataTable
                        head={["Project", "What it shows"]}
                        rows={[
                            ["Janus", "A developer platform portal with a RAG assistant over its own docs."],
                            ["Siren", "An interpretation layer over a real underwater vessel-noise classifier."],
                            ["Themis", "LLM-generated NIST SP 800-171 findings on infrastructure-as-code."],
                            ["Athena", "A drone swarm mission planner with real coverage-path geometry."],
                            ["Argus", "A simulated operations console with an explainable rules engine."],
                        ]}
                    />
                    <Paragraph>
                        Each one has its own case study: <a href="/projects/janus">Janus</a>, <a href="/projects/siren">Siren</a>, <a href="/projects/themis">Themis</a>, <a href="/projects/athena">Athena</a> and <a href="/projects/argus">Argus</a>.
                    </Paragraph>
                    <Paragraph>
                        Argus, the last one, was built entirely by a remote cloud agent from a single self-contained brief. The remote environment could not see the vault, so the brief had to restate the whole playbook, which was a good test of how complete that playbook had become.
                    </Paragraph>
                </Section>

                <Section title="7. Decision Records">
                    <SubHeading>Hosted pgvector over a local vector store</SubHeading>
                    <Paragraph>
                        Local and production share one live database, so there is no sync step and no drift.
                    </Paragraph>
                    <SubHeading>Retrieval only, no generation</SubHeading>
                    <Paragraph>
                        Siegfried returns ranked chunks and lets me open the note. Janus is where generation on top of retrieval was explored.
                    </Paragraph>
                    <SubHeading>Sibling repositories, not a monorepo or submodules</SubHeading>
                    <Paragraph>
                        Each satellite is independent and shares patterns, not code. The tracker table does the job submodules would have done, with none of their fragility.
                    </Paragraph>
                    <SubHeading>Three stages and one checklist</SubHeading>
                    <Paragraph>
                        Unlike my <a href="/projects/conquest-brain">Conquest Brain</a> pipeline with thirteen gated stages, the satellites are homogeneous small web apps, so ideation, production and launched, plus a five-item checklist, were enough.
                    </Paragraph>
                </Section>

                <Section title="8. Outcome">
                    <StatTiles
                        items={[
                            { value: "6", label: "apps shipped" },
                            { value: "18", label: "days, start to finish" },
                            { value: "~11k", label: "lines of code" },
                            { value: "16", label: "vault notes indexed" },
                            { value: "5", label: "visual identities" },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Write the gotcha down once", text: "Each satellite was faster than the one before, mostly because its traps were already in the vault." },
                        { title: "Identity is more than a palette", text: "Accent, type, radius and layout made five apps feel distinct while still clearly coming from the same designer." },
                        { title: "Honesty is a feature", text: "Every satellite has a page that says what is real and what is simulated, and that is part of what each one demonstrates." },
                        { title: "Right-size the infrastructure", text: "Only Siegfried needed a database. The satellites precompute small corpora into static files." },
                    ]}
                    next="One-click deploys from the project page through the Vercel API, and a check that warns when vault notes are newer than the last index."
                />

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/Siegfried", icon: "ri-github-fill" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
