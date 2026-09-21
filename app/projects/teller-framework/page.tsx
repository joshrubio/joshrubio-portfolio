import {
    Callout,
    DataTable,
    FeatureList,
    Figure,
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
    title: "Teller Framework - AI Story Bible | Josh D. Rubio",
    description: "A file-based story bible framework for AI-assisted fiction writing. Plain markdown nodes declare their own dependencies so any AI with file access can write with precision. Designed and built end to end.",
}

const IMG = "/assets/imgs/projects/teller-framework"

export default function TellerFramework() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/Teller" }}
                title="Teller Framework - AI Story Bible"
                summary="A directory of markdown files that lets any AI with file access write consistent, canon-accurate fiction across sessions, projects and models. No memory, no plugins, no special setup."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Stack", value: "Markdown, YAML, Claude Code" },
                    { label: "Type", value: "Writing automation" },
                    { label: "Status", value: "Actively used" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "Teller Framework" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>The structure of the files tells the AI what to load.</strong> Teller is a story bible built from plain markdown. Each concept lives in its own file, called a node, and declares which other files must be loaded with it. Any AI that can read files can then work on a long story with precision, without relying on memory.
                    </Paragraph>
                    <Paragraph>
                        It is the evolution of my <a href="/projects/teller">Teller UX/UI case study</a>: the same problem, context-aware AI for fiction writers, solved this time as an engine instead of an interface. I built it for my own long-form universe, which today spans two books and more than 115 tracked chapters.
                    </Paragraph>
                </Section>

                <Callout tone="danger" title="⚠️ The Problem">
                    <p className="text-300 mb-2">
                        A long story outgrows any context window, and chat memory drifts. Characters change their voice between sessions, a rule of the world is quietly contradicted, and every new session starts by pasting the same background again.
                    </p>
                    <ul className="text-300 mb-0">
                        <li><strong>Loading everything</strong> is noisy and expensive, and more context also means more chances to contradict it</li>
                        <li><strong>Loading too little</strong> breaks continuity across chapters</li>
                        <li><strong>Relying on the model to remember</strong> fails across sessions and across models</li>
                    </ul>
                </Callout>

                <Section title="2. Why Not the Alternatives">
                    <DataTable
                        head={["Approach", "What goes wrong"]}
                        rows={[
                            ["Paste the whole bible", "Noise, cost and contradictions grow with the story."],
                            ["Rely on chat memory", "Drift between sessions and models; nothing is auditable."],
                            ["Plugins or a vector store", "Extra infrastructure, fuzzy retrieval and files nobody can read or diff."],
                            ["Teller: files that declare their dependencies", "Exact, portable, human-readable and versioned in git."],
                        ]}
                    />
                </Section>

                <Callout tone="success" title="✓ The Idea">
                    <p className="text-300 mb-0">
                        <strong>A node knows its own dependencies.</strong> When the AI opens a character, that node already declares which system, world and voice files come along, so nothing important is forgotten and nothing else is loaded.
                    </p>
                </Callout>

                <ProcessSteps
                    steps={[
                        { label: "REQUEST", hint: "What the writer asks" },
                        { label: "BUNDLE", hint: "Task preset" },
                        { label: "NODES", hint: "Load only what is needed" },
                        { label: "CLOSE", hint: "Update the canon" },
                    ]}
                />

                <Section title="3. Core Concepts">
                    <DataTable
                        head={["Concept", "What it is"]}
                        rows={[
                            ["Node", "One concept per markdown file, with YAML frontmatter: id, type, project, module, tags, relations, load-with and updated."],
                            ["Module", "A category folder inside a project: characters, world, system, plot, relations, voice, themes, bestiary and chapters."],
                            ["Bundle", "A task preset that says which nodes an AI task loads: write, plan, edit, continuity check, update nodes, develop and dashboard."],
                            ["load-with", "The frontmatter field where a node declares its own dependencies. The key to precision."],
                            ["state.md", "Per-project file that tracks the current position, the last chapter written and the plan for the next one."],
                            ["Chapters index", "One row per chapter with its number, title, point of view, key characters and a one-line summary."],
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/node-example.png`} alt="Example node with load-with" caption="A node declaring its dependencies" />
                <Figure src={`${IMG}/data-model.png`} alt="Teller data model" caption="Data model: nodes, modules, bundles and project state" />

                <Section title="4. Architecture">
                    <Paragraph>
                        Three layers keep the framework separate from the story it serves.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Agent instructions", text: "A short root file that acts as a router, the agent specification, and five slash commands. It is the only thing the AI reads automatically." },
                            { title: "Framework", text: "Bundles, node templates and the path conventions. It contains no story data." },
                            { title: "Project data", text: "One folder per project with its state, index and module folders. Planning notes and spin-off pitches live outside the projects, so they are never loaded while writing." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/architecture.png`} alt="How a request flows through Teller" caption="How a request flows through the framework" />
                <Figure src={`${IMG}/repo-structure.png`} alt="Repository structure" caption="Framework and project data side by side" />

                <Section title="5. Keeping the Context Small">
                    <Paragraph>
                        The whole design is a set of rules about what not to load.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Session start", text: "Only each project's state file is read, never the full bible." },
                            { title: "Writing default", text: "A chapter is written with the state file and the voice guide, and nothing else loads automatically." },
                            { title: "Demand-driven nodes", text: "A node loads only if the writer names it, the scene requires it and the agent asks, or the writer asks mid-scene." },
                            { title: "Depth capped", text: "Dependencies are followed one level deep. Excess context is treated as noise." },
                            { title: "Per-task bundles", text: "Planning at chapter level loads arcs, state and conflicts only, and editing loads only the relevant book's voice section." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/load-with.png`} alt="A request resolving through bundle and load-with" caption="Resolving a request: bundle, named nodes, then one level of load-with (file counts are illustrative)" />

                <Section title="6. The Session Lifecycle">
                    <Paragraph>
                        A session opens in Claude Code at the repository root. The agent reads the project states and greets the writer, unprompted, with a table of projects, the available actions and the next step. The writer then writes, plans, edits or runs a continuity check, and every finished chapter ends with a prompt to close the session.
                    </Paragraph>
                    <SubHeading>Closing a session</SubHeading>
                    <Paragraph>
                        The close command runs nine steps and asks for confirmation before every write: it stops if there are unresolved continuity flags, proposes the new state and the new chapter-index row, updates the story structure only if arcs moved, offers a canon update, detects the end of a book, and finally proposes a commit message before committing and pushing. Nothing is applied without approval.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/session-lifecycle.png`} alt="Session lifecycle" caption="From opening a session to the gated close" />
                <Figure src={`${IMG}/commands.png`} alt="Commands reference" caption="Actions and commands, and what each one loads, reads and writes" />

                <Section title="7. Features in Depth">
                    <Paragraph>
                        What follows is how each feature feels in a real session. The conversations replay as you scroll, and they are <strong>illustrative</strong>: the commands, prompts and output formats are the real ones, while the story content is placeholder and not taken from my manuscripts.
                    </Paragraph>

                    <SubHeading>Continuity checking: flags, never rewrites</SubHeading>
                    <Paragraph>
                        The bundle loads the arcs, the relationships, the rules of the world and the characters present in the scene, then compares the chapter against them. It only raises flags, and the session cannot close while one is unresolved.
                    </Paragraph>
                    <Terminal
                        title="claude · teller · continuity-check"
                        lines={[
                            { who: "you", text: "verifica continuidad del cap 12" },
                            { who: "agent", text: "Loading arcs, conflicts, system rules and the 3 characters in the scene..." },
                            { who: "flag", text: '"Ada lit the lamp with her bare hand" contradicts [characters/ada: canonical gestures]' },
                            { who: "dim", text: "reason: she never touches a flame directly" },
                            { who: "flag", text: '"The tide rose at noon" contradicts [world/tides: rules]' },
                            { who: "dim", text: "reason: tides only rise at dusk" },
                            { who: "agent", text: "2 flags. Nothing was rewritten. /session-close stays blocked until both are resolved." },
                        ]}
                    />

                    <SubHeading>Canon updates as a reviewed diff</SubHeading>
                    <Paragraph>
                        Closing a session walks through gated steps, and each write needs a yes. The canon is updated as a list of proposed changes that the writer approves or rejects one by one.
                    </Paragraph>
                    <Terminal
                        title="claude · teller · /session-close"
                        lines={[
                            { who: "you", text: "/session-close 12" },
                            { who: "agent", text: "Any open continuity flags?" },
                            { who: "you", text: "resolved" },
                            { who: "agent", text: "Proposed state.md update: last written -> cap 12, next -> cap 13. Apply?" },
                            { who: "you", text: "yes" },
                            { who: "ok", text: "state.md updated" },
                            { who: "agent", text: "Proposed canon changes (update-nodes):" },
                            { who: "dim", text: "1. characters/ada > Personality > now distrusts the harbour master (cap 12)" },
                            { who: "dim", text: "2. world/lighthouse > Canon details > the east lamp is broken (cap 12)" },
                            { who: "you", text: "approve 1, reject 2" },
                            { who: "ok", text: "1 applied, 1 skipped. Nothing else was touched." },
                        ]}
                    />

                    <SubHeading>Editing without side effects</SubHeading>
                    <Paragraph>
                        Editing an old chapter is deliberately isolated. It never touches the project state and never suggests closing the session, so a late fix cannot corrupt the active progress.
                    </Paragraph>
                    <Terminal
                        title="claude · teller · edit"
                        lines={[
                            { who: "you", text: "edita el cap 4" },
                            { who: "agent", text: "Chapter 4 belongs to Book 1 (found through chapters/index.md)." },
                            { who: "dim", text: "loading: Book 1 voice, the characters in the scene, the manuscript" },
                            { who: "ok", text: "edit applied to the manuscript" },
                            { who: "agent", text: "The chapter summary changed. Update its row in chapters/index.md?" },
                            { who: "you", text: "yes" },
                            { who: "ok", text: "index row updated" },
                            { who: "dim", text: "state.md untouched. No /session-close suggested for a past edit." },
                        ]}
                    />

                    <SubHeading>Planning at the right granularity</SubHeading>
                    <Paragraph>
                        There are no separate commands for planning levels. The bundle reads the phrasing and decides whether it is looking at a chapter, a batch, an arc, a book or a single event.
                    </Paragraph>
                    <Terminal
                        title="claude · teller · plan"
                        lines={[
                            { who: "you", text: "planifiquemos el cap 13" },
                            { who: "agent", text: "Level: chapter -> beat sheet" },
                            { who: "you", text: "planifiquemos el arco 2" },
                            { who: "agent", text: "Level: arc -> dramatic question and three acts" },
                            { who: "you", text: "planifiquemos el libro 2" },
                            { who: "agent", text: "Level: book -> structural skeleton only" },
                            { who: "you", text: "que sigue?" },
                            { who: "agent", text: "Ambiguous. Default: the next 3 chapters from state.md, as a flow table." },
                        ]}
                    />

                    <SubHeading>Multiple books, one universe</SubHeading>
                    <Paragraph>
                        A new book versions only the voice, the themes and the plot. The world, the system and the characters stay shared, and existing content is wrapped, never overwritten. A spin-off goes further and declares its parent, so shared characters and world load only when a scene requires them.
                    </Paragraph>
                    <Terminal
                        title="claude · teller · /new-book 2"
                        lines={[
                            { who: "you", text: "/new-book 2" },
                            { who: "agent", text: "Six steps, each one confirmed before writing. First: voice, rhythm and themes for Book 2?" },
                            { who: "ok", text: 'voice/style.md: "## Book 2" added, Book 1 preserved' },
                            { who: "ok", text: "themes/writing-rules.md: same treatment" },
                            { who: "ok", text: "plot/arcs-book2.md created" },
                            { who: "ok", text: "state.md: active-libro set to 2" },
                            { who: "dim", text: "shared with Book 1: world, system, characters" },
                        ]}
                    />

                    <SubHeading>Voice as data</SubHeading>
                    <Paragraph>
                        Voice lives in files: a versioned style guide per book and a voice node per point-of-view character, plus a list of patterns to eliminate. Writing loads almost nothing by default and pulls a node in only when the scene needs it.
                    </Paragraph>
                    <Terminal
                        title="claude · teller · write"
                        lines={[
                            { who: "you", text: "escribe el cap 13" },
                            { who: "agent", text: "Loading state.md and voice/style.md." },
                            { who: "dim", text: "nothing else loads automatically" },
                            { who: "agent", text: "The scene is from Ada's point of view. Load voice/pov-ada?" },
                            { who: "you", text: "yes" },
                            { who: "agent", text: "Ada's node declares load-with: world/lighthouse, system/rules. Following one level deep." },
                            { who: "ok", text: "drafting in Ada's voice. Canon gaps are flagged, never invented." },
                        ]}
                    />
                </Section>

                <Section title="8. Decision Records">
                    <SubHeading>Plain files instead of a database or plugin</SubHeading>
                    <Paragraph>
                        Files are portable, diffable in git (every session ends in a commit) and readable by both people and any AI. The trade-off is that there is no query engine, so integrity depends on conventions and on the agent following them.
                    </Paragraph>
                    <SubHeading>Dependencies declared by the node, not the caller</SubHeading>
                    <Paragraph>
                        Bundles stay short and dependencies are not forgotten, because the file that needs a dependency is the one that names it. Retrieval is exact rather than semantic, and capped at one level.
                    </Paragraph>
                    <SubHeading>Human in the loop</SubHeading>
                    <Paragraph>
                        Agents read freely, propose changes as structured diffs and never apply them without approval. There are no parallel writes and no shared memory between agents.
                    </Paragraph>
                    <SubHeading>Model-agnostic in principle, Claude Code in practice</SubHeading>
                    <Paragraph>
                        Any AI with file access can navigate the structure, while the shipped orchestration (the auto-read instructions and the slash commands) targets Claude Code.
                    </Paragraph>
                </Section>

                <Section title="9. How It Evolved">
                    <Paragraph>
                        Most of the design came from friction, and the commit history shows it: the always-loaded instruction file was slimmed down to a minimal router, node loading moved from preloading to on-demand, multi-project support arrived as a refactor with the parent-project pattern, and a structural map of book, arc and chapter was added when the index and the arcs drifted apart. Seventy-five commits in about seven weeks, part of them produced through parallel Claude Code worktrees.
                    </Paragraph>
                    <StatTiles
                        items={[
                            { value: "170+", label: "files tracked" },
                            { value: "2", label: "projects" },
                            { value: "10", label: "bundle files" },
                            { value: "5", label: "slash commands" },
                            { value: "115+", label: "chapters tracked" },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Structure beats memory", text: "Making the dependencies explicit worked better than hoping the model would remember them." },
                        { title: "What not to load is the real design", text: "Every rule that keeps context small also removed a source of contradictions." },
                        { title: "Confirmation gates build trust", text: "Because nothing is applied without approval, the canon can be trusted after months of sessions." },
                        { title: "Conventions need care", text: "Without a query engine, documentation can drift from behaviour, as my own notes show, so keeping the docs in sync is part of the work." },
                    ]}
                    next="Measure the effect on consistency more rigorously, for example by counting the canon flags caught per chapter, and reconcile the remaining documentation drift."
                />

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/Teller", icon: "ri-github-fill" },
                        { label: "Teller UX Case Study", href: "/projects/teller" },
                        { label: "Discuss This Project", href: "/#contact" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
