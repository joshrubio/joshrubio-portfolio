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
    Takeaways,
    Terminal,
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "Janus - Developer Platform Portal | Josh D. Rubio",
    description: "A self-service developer platform in miniature: service catalog, simulated environment provisioning, pipeline status and a RAG assistant over its own docs. A Siegfried satellite, designed and built end to end.",
}

const IMG = "/assets/imgs/projects/janus"

export default function Janus() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/Janus" }}
                status="Siegfried satellite · 1 of 5"
                title="Janus - Developer Platform Portal"
                summary="The kind of internal tool a platform engineering team builds for its own engineers, in miniature: a service catalog, self-service environments, pipeline status and an assistant that answers from the platform's docs."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Stack", value: "Next.js, Voyage AI, Groq" },
                    { label: "Type", value: "Internal developer platform" },
                    { label: "Identity", value: "Amber · Fraunces" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "Janus" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>Named for the Roman god of gates and transitions</strong>, Janus is the front door to a team&apos;s services, environments and pipelines. It is the first satellite of <a href="/projects/siegfried">Siegfried</a>, and in a way Siegfried&apos;s twin: the same vault, RAG and dashboard ideas, turned outward into a portal another team would use.
                    </Paragraph>
                    <Paragraph>
                        Everything infrastructural is simulated on purpose. The point is the experience of the flows and an AI assistant applied to a real developer-experience problem, not an infrastructure-as-code engine.
                    </Paragraph>
                </Section>

                <Callout tone="danger" title="⚠️ The Problem">
                    <p className="text-300 mb-0">
                        In most engineering teams the answer to &quot;who owns this service&quot;, &quot;how do I get a staging environment&quot; or &quot;why is the pipeline red&quot; lives in a person&apos;s head or in a wiki nobody finds. Every question becomes a message to someone.
                    </p>
                </Callout>

                <Callout tone="success" title="✓ The Solution">
                    <p className="text-300 mb-0">
                        <strong>Four pillars behind one door.</strong> A catalog for ownership, a self-service form for environments, a pipelines view for status, and an assistant that answers from the platform&apos;s own docs and cites them.
                    </p>
                </Callout>

                <ProcessSteps
                    steps={[
                        { label: "CATALOG", hint: "Who owns what" },
                        { label: "PROVISION", hint: "Self-service envs" },
                        { label: "PIPELINES", hint: "CI status" },
                        { label: "ASSISTANT", hint: "RAG over docs" },
                    ]}
                />

                <Section title="2. The Dashboard">
                    <Paragraph>
                        The home page was rebuilt so it can be read in one glance without scrolling: two columns, with stat cards and a runs chart on the left and the service and reliability breakdowns on the right. The deltas are labelled in the interface as a synthetic demo series, not hidden in a code comment.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-dashboard.webp`} alt="Janus dashboard" caption="The dashboard: stats, runs over time, services and reliability" />

                <Section title="3. The Pillars">
                    <SubHeading>Service catalog</SubHeading>
                    <Paragraph>
                        Seven services with owner, type, stack and status, in dense rows rather than cards, each with its own detail page.
                    </Paragraph>
                    <FigureGrid
                        images={[
                            { src: `${IMG}/screen-catalog.webp`, alt: "Service catalog", caption: "The catalog" },
                            { src: `${IMG}/screen-service.webp`, alt: "Service detail", caption: "A service's detail page" },
                        ]}
                    />
                    <SubHeading>Self-service provisioning</SubHeading>
                    <Paragraph>
                        Pick a service and an environment, and the server streams a provisioning log line by line over server-sent events, ending in a preview URL. Nothing is created, and the screen says so.
                    </Paragraph>
                    <Figure src={`${IMG}/screen-provisioning.webp`} alt="Provisioning flow" caption="A simulated environment, streamed step by step" />
                    <SubHeading>Pipelines</SubHeading>
                    <Paragraph>
                        Recent CI runs for every service, grouped into running, failed and succeeded, with commit, message, duration and author.
                    </Paragraph>
                    <Figure src={`${IMG}/screen-pipelines.webp`} alt="Pipelines" caption="Pipeline runs grouped by status" />
                    <SubHeading>Command palette</SubHeading>
                    <Paragraph>
                        ⌘K jumps to any page or service and can open the assistant, which lives in a rail on the left that expands on hover instead of taking a tab of its own.
                    </Paragraph>
                    <Figure src={`${IMG}/screen-command.webp`} alt="Command palette" caption="⌘K over the dashboard" />
                </Section>

                <Section title="4. The Assistant">
                    <Paragraph>
                        The assistant reuses the retrieval pattern from Siegfried, but without its database. Five internal docs make sixteen chunks, which is small enough to embed once, commit as JSON and rank in memory on each question. Groq then writes a short answer from the retrieved excerpts only, and the response lists its sources with their similarity scores.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/rag.png`} alt="RAG without a database" caption="Offline indexing and the live question flow" />
                <Terminal
                    title="janus · assistant"
                    lines={[
                        { who: "you", text: "how do I get a staging environment for billing-api?" },
                        { who: "dim", text: "embedding question · ranking 16 chunks in memory" },
                        { who: "dim", text: "top 4 chunks sent to Groq with the question" },
                        { who: "agent", text: "Open Provisioning, pick billing-api and Staging, and the portal returns a preview URL when the health checks pass." },
                        { who: "ok", text: "sources: provisioning-guide.md, runbook-billing-api.md" },
                    ]}
                    caption="Illustrative exchange: the flow and the sources are real, the wording of the answer is an example."
                />

                <Section title="5. Identity">
                    <Paragraph>
                        Benchmarked against Railway, Linear and Port. The base is the same neutral grayscale as Siegfried, and the identity comes from an amber accent reserved for the active state, the primary button and status dots, an italic Fraunces wordmark paired with Plus Jakarta Sans, and dark mode as the default.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "First attempt, rejected", text: "A warm cream and terracotta theme that only repainted Siegfried. It became the rule for every later satellite: never differentiate by palette alone." },
                            { title: "Structure borrowed, not content", text: "Stat cards with a delta badge, an area chart with a tooltip and segmented status bars, taken as grammar from real dashboards." },
                        ]}
                    />
                </Section>

                <Section title="6. Outcome">
                    <StatTiles
                        items={[
                            { value: "4", label: "pillars" },
                            { value: "7", label: "services in the catalog" },
                            { value: "16", label: "doc chunks indexed" },
                            { value: "0", label: "databases needed" },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Right-size retrieval", text: "For a few dozen chunks, a JSON file and cosine similarity beat a vector database." },
                        { title: "Simulate honestly", text: "The provisioning flow feels real, and the screen is clear that nothing was created." },
                        { title: "Design from references", text: "The identity improved the moment it was grounded in real products instead of a new palette." },
                    ]}
                    next="Let the assistant trigger actions, such as starting a provisioning run, with a confirmation step."
                />

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/Janus", icon: "ri-github-fill" },
                        { label: "Siegfried Case Study", href: "/projects/siegfried" },
                        { label: "Discuss This Project", href: "/#contact" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
