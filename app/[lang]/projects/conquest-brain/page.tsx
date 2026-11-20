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
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "Conquest Brain - YouTube Production Pipeline | Josh D. Rubio",
    description: "An automation system for producing documentary YouTube content: a gated 13-stage workflow, 34 Python tools and a local dashboard that take an episode from idea to a 4K master. Designed and built end to end.",
}

const IMG = "/assets/imgs/projects/conquest-brain"

export default function ConquestBrain() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/Conquest-Brain" }}
                title="Conquest Brain - Content Automation"
                summary="The operating system behind a Spanish-language documentary YouTube channel: standing rules, templates and Python tools that take an idea through research, script, assets, edit and publication, with a human decision at every gate."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Stack", value: "Python, FFmpeg, Whisper" },
                    { label: "Workflow", value: "13 gated stages" },
                    { label: "Type", value: "Automation system" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "Conquest Brain" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>A documentary is a long chain of repeatable decisions, and most of them can be made mechanical.</strong> Is the idea eligible? Does every claim have a source? Do we hold the rights to that footage? Is the edit in sync with the voice? Conquest Brain turns that chain into a documented, gated workflow: Python does the mechanical work at zero token cost, and the system stops at every decision that needs a person.
                    </Paragraph>
                    <Paragraph>
                        It is a repository of rules, templates, per-episode folders and 34 Python tools, driven from a local dashboard. It has been built in about four weeks, with 166 commits, and it is already carrying real episodes through production.
                    </Paragraph>
                </Section>

                <Callout tone="danger" title="⚠️ The Problem">
                    <p className="text-300 mb-2">
                        A small team producing sourced, journalistic documentaries needs four things at once, and each one fails quietly when done by hand:
                    </p>
                    <ul className="text-300 mb-0">
                        <li><strong>Editorial rules that do not drift</strong> between episodes or between people</li>
                        <li><strong>A repeatable path</strong> from an idea to a published 4K video</li>
                        <li><strong>An audit trail</strong> for every source and every image right</li>
                        <li><strong>Low compute and token cost</strong> when an AI agent is in the loop</li>
                    </ul>
                </Callout>

                <Callout tone="success" title="✓ The Solution">
                    <p className="text-300 mb-0">
                        <strong>Plain files as the database, gates as the process.</strong> Every stage produces a file, a review page lets a person decide, and a gate engine advances the episode only when that decision is signed. Judgement work is queued for an AI agent; everything else runs as ordinary Python.
                    </p>
                </Callout>

                <ProcessSteps
                    steps={[
                        { label: "PLAN", hint: "Stages 0-3" },
                        { label: "WRITE", hint: "Stages 4-6" },
                        { label: "PRODUCE", hint: "Stages 7-9" },
                        { label: "SHIP", hint: "Stages 10-12" },
                    ]}
                />

                <Section title="2. Design Principles">
                    <FeatureList
                        items={[
                            { title: "Files are the database", text: "Markdown, CSV, TSV and JSON that people and agents can read, diff and version in git." },
                            { title: "A human at every judgement", text: "Gates have three states (open, exported, signed), and any gate can be signed by one person." },
                            { title: "Mechanical work costs nothing", text: "Anything Python can do never reaches an LLM, and the dashboard server spends no tokens." },
                            { title: "Warn, do not block", text: "Audits report problems loudly but only genuinely uncovered work blocks a render." },
                            { title: "Resumable by default", text: "Long jobs run in chunks so a crash or a sleeping laptop loses minutes, not hours." },
                        ]}
                    />
                </Section>

                <Section title="3. Architecture">
                    <Paragraph>
                        The system has six layers, from the rules that never change to the media stack that renders the video.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Knowledge base", text: "23 numbered documents with YAML frontmatter (summary, stage, read_when) and a routing index, so an agent loads one to three of them instead of all." },
                            { title: "Templates", text: "14 fill-in templates, one per stage." },
                            { title: "Episode folders", text: "One folder per episode with 14 numbered files whose numbers mirror the stages, plus a master status table and an agent task queue." },
                            { title: "Tools", text: "34 Python files, about 16,000 lines, roughly one script per stage. A single pipeline manifest is the source of truth for every stage." },
                            { title: "Dashboard", text: "A stdlib HTTP server on localhost that serves every generated review page and turns each Finish button into a decision that the gate engine applies." },
                            { title: "Media stack", text: "FFmpeg, faster-whisper for word timestamps, and free stock, archive and music APIs with strictly licensed sources." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/architecture.png`} alt="Conquest Brain architecture" caption="System layers and data flow" />
                <Figure src={`${IMG}/episode-folder.png`} alt="Anatomy of an episode folder" caption="Anatomy of an episode folder" />

                <SubHeading>How data flows</SubHeading>
                <Paragraph>
                    A review page exports decisions as a text file. The server stashes them, the gate engine applies them (mechanically in Python, or by queuing a task for an agent), advances the stage, and regenerates the dashboard. The master status table is plain markdown, so the whole state of the channel is one file you can read.
                </Paragraph>

                <Section title="4. The Pipeline">
                    <Paragraph>
                        Thirteen stages, from ideation to a retrospective with real numbers. Each one names what it produces, which tool and review page serve it, what closes its gate, and who acts. Roughly one script serves each stage.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/pipeline.png`} alt="The pipeline" caption="Stages 0-12, their gates and who closes them" />
                <Figure src={`${IMG}/tools-map.png`} alt="Which tool serves which stage" caption="All 34 tools grouped by the stage they serve" />

                <Section title="5. Stage by Stage">
                    <Paragraph>
                        Every review page is generated, self-contained HTML with no external dependencies, served by the local dashboard. The interface is in Spanish because the channel is. The screenshots below are real pages from episodes in production, taken read-only.
                    </Paragraph>

                    <SubHeading>The dashboard</SubHeading>
                    <Paragraph>
                        One card per episode with a stage strip. Every chip explains itself in plain language and opens whatever that stage produced, and the same page shows whether the agent loop is alive and how much LLM usage each stage costs.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/dashboard.png`} alt="Production dashboard" caption="The production dashboard: one card per episode and its stage strip" />

                <SubHeading>Stage 0 · Ideation</SubHeading>
                <Paragraph>
                    Ideas are scored against eight eliminatory filters that must all be yes, and seven criteria scored from zero to three. Twenty-one points is the maximum, fourteen passes, ten to thirteen incubates and anything lower is discarded. Two format tracks are defined by their rights regime rather than by topic: a documentary track that prefers public-domain material, and an essay track built on short, capped clips of a film and its reception. Approving an idea creates the next episode folder with its brief prefilled.
                </Paragraph>
                <Figure src={`${IMG}/dashboard-4.png`} alt="Idea pool review" caption="Idea pool: hook titles, verdict and score for each idea" />

                <SubHeading>Stages 1 and 2 · Brief and research</SubHeading>
                <Paragraph>
                    The brief is an editable header table, one field per row. The research dossier lists each source as a card with its reliability tier, its year and a verify note, and the gate demands at least one top-tier or second-tier source behind every load-bearing claim.
                </Paragraph>
                <FigureGrid
                    images={[
                        { src: `${IMG}/dashboard-5.png`, alt: "Brief review", caption: "Stage 1: the brief as an editable table" },
                        { src: `${IMG}/dashboard-6.png`, alt: "Research review", caption: "Stage 2: sources graded by tier" },
                    ]}
                />

                <SubHeading>Stage 4 · Script</SubHeading>
                <Paragraph>
                    The script is written in a direct editor with a header table and one row per beat. The gate needs an approval with the reviewer&apos;s name and every citation tag in the text to resolve to a source.
                </Paragraph>
                <Figure src={`${IMG}/dashboard-2.png`} alt="Script review" caption="Script review: header table, beats and the finish button" />

                <SubHeading>Stage 5 · Fact-check in two layers</SubHeading>
                <Paragraph>
                    Layer one is deterministic. Every citation tag must resolve to a row in the source log, every source needs a tier and a rights status, sentences that contain a number, date, name or quote without a tag are flagged, and claims backed only by weak sources are called out. Layer two is an AI edit pass that may only tighten, hedge, attribute or cut, never add a fact, and it writes a changelog. Legal and ethical items are deferred to a single human tick at publication, and the accepted residual risk is documented.
                </Paragraph>
                <Figure src={`${IMG}/dashboard-7.png`} alt="Fact-check report" caption="Layer one output: tags, sources by tier, orphan-claim candidates and the verdict" />

                <SubHeading>Stage 6 · Shotlist</SubHeading>
                <Paragraph>
                    Every beat of the script becomes a row on a timeline, classified by type (AI image, stock, archive, on camera or graphic), with its asset id, label, motion and the script fragment it covers. This is the spine that every later stage hangs on.
                </Paragraph>
                <Figure src={`${IMG}/dashboard-8.png`} alt="Shotlist timeline" caption="The shotlist timeline: one row per beat" />

                <SubHeading>Stage 7 · Assets, rights and AI labels</SubHeading>
                <Paragraph>
                    A tab-separated file holds one row per shotlist beat. The tool queries stock, archive and museum APIs and builds a picker with the candidates on one side and the AI prompts on the other. No beat may be left without a row, and once I choose, the tool verifies resolution and appends credits. Anything not freely licensed goes into a rights table that tracks the running share of unlicensed images against a ceiling. Music is limited to open licences, and the soundtrack is only the narrator&apos;s voice plus a licensed bed.
                </Paragraph>
                <Paragraph>
                    AI images are a first-class visual register under one rule set: a single style per episode, a permanent on-screen label burned in at the edit, and never presented as archival. The prompt scaffold, the label and the final audit all live in the pipeline, so the rule is enforced by tooling rather than memory.
                </Paragraph>
                <Figure src={`${IMG}/dashboard-9.png`} alt="Style pass" caption="Style pass for AI beats: the episode style, per-beat prompts and the on-screen label" />

                <SubHeading>Stage 9 · The trim room and the edit room</SubHeading>
                <Paragraph>
                    Word timestamps from faster-whisper drive proposed cuts (silences, standalone fillers and re-said takes), shown on a waveform as draggable red blocks. <strong>Cuts are queued, not rendered:</strong> a soft cut rewrites only the audio in seconds, and the heavy 4K trim happens once at the end. While cuts are pending the room plays a small proxy and skips the cut zones, so picture and voice stay in sync. Every cut is journalled, and Ctrl+Z and Ctrl+Shift+Z undo and redo exactly, even after a reload.
                </Paragraph>
                <Figure src={`${IMG}/dashboard-11.png`} alt="Trim room waveform" caption="Trim room: the take&apos;s waveform with proposed cuts as red blocks" />
                <Paragraph>
                    The edit room adds a block for each beat and an inspector to swap assets, change durations with ripple and set Ken Burns motion. It offers structure operations (add, split, merge, duplicate, delete and reorder) and a mix strip with voice gain, music level and ducking, and it autosaves.
                </Paragraph>
                <Figure src={`${IMG}/dashboard-10.png`} alt="Edit room" caption="Edit room: waveform, one block per beat, inspector and mix" />
                <Figure src={`${IMG}/edit-flow.png`} alt="Stage 9 edit flow" caption="Stage 9 end to end, with queued cuts and a proxy" />
                <SubHeading>Voice re-sync and the resumable 4K master</SubHeading>
                <Paragraph>
                    A global fuzzy matcher aligns each beat&apos;s script line to the recorded words, but only when asked. An independent sync report then checks whether each line is actually spoken inside its window and warns below 60%. After a re-trim or a re-record the room shows a banner and never re-aligns silently, and a pickup room lets me re-record a single line in the browser, loudness-matched to the original.
                </Paragraph>
                <Paragraph>
                    The master renders in chunks of ten beats, each encoded once and kept, so a crash, a sleep or a cancel loses at most one chunk. It runs at below-normal priority on about 60% of the cores, keeps the PC awake and refuses a second render of the same episode. Before every final render an audit reports out-of-order beats, low sync, an opening mismatch, assets whose rights are still pending and AI images without a label. It warns and never blocks.
                </Paragraph>

                <SubHeading>Stage 10 · Package</SubHeading>
                <Paragraph>
                    Three title candidates with character counts, the thumbnail slot and an editable description with chapters. The gate requires that the title is honest and that three people approve.
                </Paragraph>
                <Figure src={`${IMG}/dashboard-12.png`} alt="Package review" caption="Package review: title candidates, thumbnail and description" />

                <SubHeading>Stages 3, 8, 11 and 12</SubHeading>
                <Paragraph>
                    The outline is drafted by an agent, the recording and the publication are offline steps with a checklist (including the legal tick), and the retrospective closes the loop with the numbers at 48 hours and 30 days.
                </Paragraph>

                <SubHeading>Keeping an eye on the cost</SubHeading>
                <Paragraph>
                    A cost page estimates the LLM usage of each stage against a plan. The tool that refreshes it does not invent numbers.
                </Paragraph>
                <Figure src={`${IMG}/dashboard-3.png`} alt="Cost page" caption="The cost page: LLM usage per stage" />

                <Section title="6. Under the Hood">
                    <SubHeading>Gate engine</SubHeading>
                    <Paragraph>
                        The engine applies a stage&apos;s exported decisions and signs its gate. Moving on requires a signed gate, resets it, queues the next agent stage and removes the stale one, so an old task can never run twice. A drain mode processes every episode up to its own auto-advance ceiling. It even works without the server: the finish button downloads a file and the command line folds it in.
                    </Paragraph>
                    <SubHeading>A design system in one file</SubHeading>
                    <Paragraph>
                        The whole visual language (a warm dark base with a gold accent, serif chapter cards and a typewriter case-file device) lives in a single theme module, so agents never load styled markup, and a house colour grade is generated from a handful of constants.
                    </Paragraph>
                </Section>

                <Section title="7. Decision Records">
                    <SubHeading>Plain files instead of a database</SubHeading>
                    <Paragraph>
                        Diffable, readable by people and agents and versioned with the code. The price is hand-rolled parsers and a few Spanish column names.
                    </Paragraph>
                    <SubHeading>Fold kinds keep tokens for judgement</SubHeading>
                    <Paragraph>
                        Each gate declares how it is closed: mechanically in Python, by verifying an artifact exists, by queuing an agent, or by a person marking it done. Only the agent stages ever consume tokens, and an idle agent tick is a single small file read.
                    </Paragraph>
                    <SubHeading>Design quarantined in a theme module</SubHeading>
                    <Paragraph>
                        Gate folds and queue drains never load styled HTML, which keeps agent context small.
                    </Paragraph>
                    <SubHeading>The timeline is authored, not derived</SubHeading>
                    <Paragraph>
                        The script and the transcript seed the timeline once, and my edits survive rebuilds. The trade-off is that a re-record needs an explicit re-sync.
                    </Paragraph>
                    <SubHeading>Queue the heavy work</SubHeading>
                    <Paragraph>
                        Cheap soft cuts and a proxy make editing instant, and the expensive render runs once.
                    </Paragraph>
                    <SubHeading>Automated fact-check with documented risk</SubHeading>
                    <Paragraph>
                        Tagging every claim to a graded source, a mechanical first layer and a legal tick at publication reduce the risk, and the docs state plainly what remains.
                    </Paragraph>
                    <SubHeading>Local only</SubHeading>
                    <Paragraph>
                        Everything binds to localhost with no authentication, and the render is tuned to be gentle on a laptop.
                    </Paragraph>
                </Section>

                <Section title="8. A Worked Example">
                    <Paragraph>
                        Numbers from real artifacts of the episodes in production show what the gates actually check.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Fact-check", text: "One script carried 53 citation tags pointing to 12 distinct sources, 13 rows in the source log split as 7 top-tier, 5 second-tier and 1 third-tier, and passed layer one." },
                            { title: "Trim", text: "On one take, the trim room proposed 100 cuts that removed 3 minutes 43 seconds and kept 21 minutes 11 seconds, all as reviewable red blocks." },
                            { title: "Rights", text: "For one episode the running share of unlicensed images was around 2.5%, against a ceiling of about 30%." },
                            { title: "Several episodes at once", text: "The dashboard tracks four episodes at different stages, from one at publication to one still at shotlist with an agent task queued." },
                        ]}
                    />
                </Section>

                <Section title="9. Outcome">
                    <StatTiles
                        items={[
                            { value: "34", label: "Python tools" },
                            { value: "16k", label: "lines of code" },
                            { value: "13", label: "gated stages" },
                            { value: "23", label: "rule documents" },
                            { value: "166", label: "commits in 4 weeks" },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Gates make quality repeatable", text: "Every hard decision has an owner and a record, so the process no longer depends on remembering it." },
                        { title: "Spend intelligence only where it matters", text: "Routing mechanical work to Python kept the AI for judgement and kept the running cost close to zero." },
                        { title: "Warnings beat walls", text: "Audits that explain a problem were used, while blocking ones would have been bypassed." },
                        { title: "Documentation is part of the product", text: "Routing docs by frontmatter let an agent read a few files instead of the whole knowledge base." },
                    ]}
                    next="A three-way merge so a re-recorded take can be re-synced without redoing the edit, which the docs already list as planned."
                />

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/Conquest-Brain", icon: "ri-github-fill" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
