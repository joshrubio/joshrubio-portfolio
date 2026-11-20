import {
    Callout,
    DataTable,
    FeatureList,
    Figure,
    FigureGrid,
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
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "Learn by Doing - A Claude Code Plugin | Josh D. Rubio",
    description: "A Claude Code plugin that turns every commit Claude makes into short lessons, saved as Markdown notes and studied later in a personal study space with spaced review and a 3D map of what you know. Designed and built end to end.",
}

const IMG = "/assets/imgs/projects/learn-by-doing"

const SECTIONS = [
    "1. Overview",
    "2. How It Works",
    "3. A Lesson",
    "4. The Study Space",
    "5. Project Memory",
    "6. Kinds of Project",
    "7. The Map",
    "8. Privacy and Limits",
    "9. Key Decisions",
    "10. Outcome",
]

export default function LearnByDoing() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/learn-by-doing" }}
                status="Prototype · v0.9.0 · November 2026"
                title="Learn by Doing - A Claude Code Plugin"
                summary="Most of your code will be written by AI. What you need is the ability to read it, review it and decide. This plugin turns every commit Claude makes into a few short lessons, and a study space that remembers what you know."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Stack", value: "Node.js, MCP, Claude Artifacts" },
                    { label: "Type", value: "Claude Code plugin" },
                    { label: "Language", value: "Spanish interface, for now" },
                ]}
                hero={{ src: `${IMG}/thumbnail.webp`, alt: "The Learn by Doing study space" }}
            />

            <ProjectBody>
                <TableOfContents items={SECTIONS} />

                <Section title="1. Overview">
                    <Paragraph>
                        <strong>A tutor that learns from the code you actually shipped.</strong> People who learn to code by working with AI end up with a repository they only half understand. Learn by Doing closes that gap without getting in the way: every time Claude makes a git commit in a repo you turned on, the plugin writes one to three lessons about the code that was really written.
                    </Paragraph>
                    <Paragraph>
                        The lessons are plain Markdown notes. You study them later, in your own time, in a study space that remembers what you know across all your projects. The exercises train reading and judgment, so you never have to write code if you do not want to. Everything in the screenshots below is a demo with lessons about this portfolio&apos;s own code.
                    </Paragraph>
                </Section>

                <Callout tone="danger" title="⚠️ The Problem">
                    <p className="text-300 mb-0">
                        Learning from AI-written code is easy to postpone. The explanation scrolls away in a chat, the commit is a patch nobody re-reads, and a tutorial teaches an example project instead of yours.
                    </p>
                </Callout>

                <Callout tone="success" title="✓ The Solution">
                    <p className="text-300 mb-0">
                        <strong>Study the code you already have.</strong> Lessons come from your own commits, wait until you open the study space, and ask you to predict before they explain.
                    </p>
                </Callout>

                <Section title="2. How It Works">
                    <Paragraph>
                        Four steps: work as usual, the plugin writes lessons, you run <code>/study</code>, and you study. A hook watches for commits, a skill writes the lessons, a small MCP server saves them as notes, and a command syncs them to the study space.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/how-it-works.png`} alt="From a commit to a lesson" caption="Nothing interrupts the work: lessons wait until you open the study space" />
                <Terminal
                    title="claude · after a commit"
                    lines={[
                        { who: "you", text: "commit this" },
                        { who: "ok", text: "committed 6e7a1dc: shared case-study components" },
                        { who: "dim", text: "learn-by-doing · repo is on · reading the project memory" },
                        { who: "agent", text: "2 lecciones guardadas, 7 pendientes de sincronizar. Ejecuta /study." },
                    ]}
                    caption="Illustrative: the final line is what the plugin really adds after a commit in a repo that is turned on."
                />
                <FeatureList
                    items={[
                        { title: "Per-repo consent", text: "The first time in each repo, Claude asks once whether to learn from it and tells you the kind of project it detected. If the answer is no, the plugin stays silent there and spends no tokens." },
                        { title: "Large commits are split", text: "A big commit is divided by area and only the most valuable lessons are kept: one to three, up to four for a large one." },
                        { title: "Works on every system", text: "The hook and scripts are plain Node with no packages to install, and there are no shell scripts, so it runs the same on Windows, macOS and Linux." },
                    ]}
                />

                <Section title="3. A Lesson">
                    <Paragraph>
                        Every lesson has the same shape and only the exercise changes, so the method always feels familiar. You commit to a guess before reading the explanation, and the lesson keeps a short &quot;what actually happens&quot; to compare against.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/lesson-anatomy.png`} alt="Anatomy of a lesson" caption="Six steps, and exercises in three families" />
                <Figure src={`${IMG}/screen-lesson.webp`} alt="A lesson page" caption="A lesson: the project, where the change lives, a small map, the code and the prediction" />
                <SubHeading>You choose how to practise</SubHeading>
                <Paragraph>
                    The exercises are grouped by what they train, and an optional three-minute diagnostic on twelve topics recommends where to start. Topics you already master are skipped, and rusty ones are taught as a short refresher. Open answers are graded against key points by Claude, with your consent. If that is unavailable you compare with a model answer and rate yourself.
                </Paragraph>

                <Section title="4. The Study Space">
                    <Paragraph>
                        The study space is a single-page app published as a private Artifact in your own claude.ai account. It has six sections: the home with a dashboard, the lessons, spaced review, the concepts you have seen, the map, and your profile. Your answers and progress are saved live.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-home.webp`} alt="Study space home" caption="Home: what the tool is, and a dashboard of lessons, reviews and progress per project" />
                <FigureGrid
                    images={[
                        { src: `${IMG}/screen-lessons.webp`, alt: "Lessons grouped by commit", caption: "Lessons, grouped by commit" },
                        { src: `${IMG}/screen-projects.webp`, alt: "Lessons grouped by project", caption: "The same lessons, by project" },
                    ]}
                />
                <Figure src={`${IMG}/screen-review.webp`} alt="Spaced review" caption="Review: a concept that has gone rusty comes back with one exercise" />
                <Paragraph>
                    Review follows intervals of 1, 3, 7, 16 and 35 days. A concept you got wrong goes back to the start, a partly right one stays where it is, and each concept has one state shared by all your projects: new, learning, rusty or mastered.
                </Paragraph>

                <Section title="5. Project Memory">
                    <Paragraph>
                        Lessons written one commit at a time can feel random, because the hook only sees a patch and cannot tell what is central to the project. So the plugin keeps a short memory of each repo you turn on.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "A memory", text: "What the project is, where things live, its main flow, and the three to eight concepts that matter most in it." },
                            { title: "Base lessons", text: "Four to six lessons about the project as a whole, such as what it is, how it is laid out and the main flow. They appear first on the project's card, as the place to start." },
                            { title: "Every later commit uses it", text: "The summary places each lesson in the project, the core concepts are favoured, and lessons already taught in that repo are listed so they are not repeated." },
                            { title: "Variety", text: "The hook also reports how recent lessons were spread over exercises and types, so the plugin stops defaulting to the same one." },
                        ]}
                    />
                </Section>

                <Section title="6. Kinds of Project">
                    <Paragraph>
                        What you need to learn depends on what you are building. A classic app needs the architecture inside its framework, design patterns and infrastructure. A plugin or an MCP server needs the contract with the other side, and the language weighs less. So every repo gets a kind, and every lesson gets tags for its languages and frameworks.
                    </Paragraph>
                    <DataTable
                        head={["Kind", "What the lessons favour"]}
                        rows={[
                            ["app", "Architecture, patterns and infrastructure inside its framework"],
                            ["plugin, mcp", "The contract with the host, hooks, schemas and error handling"],
                            ["integracion", "The other system's contract, authentication, retries and data mapping"],
                            ["libreria, script, infraestructura", "Public API and versioning, exit codes and entry points, environments and secrets"],
                        ]}
                    />
                    <Paragraph>
                        The kind is detected, not guessed: a script reads manifests such as <code>package.json</code>, <code>pyproject.toml</code> or <code>.claude-plugin/</code> and the file extensions, so Node, nodejs and Node.js never become three tags. In a monorepo it works per package. You confirm the kind once, when you turn the repo on.
                    </Paragraph>
                </Section>

                <Section title="7. The Map">
                    <Paragraph>
                        Lessons answer &quot;what did I learn in this commit&quot;. The map answers &quot;where am I, and what is next&quot;. It is built on a catalog of 85 concepts in 15 branches, with the prerequisites between them, and each concept is in one of four states: discovered by a lesson, known from the diagnostic, on the frontier because you have everything it needs, or unexplored.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-map.webp`} alt="The 3D concept map" caption="The map as a 3D graph: lit nodes are what you have seen, the dim ones are what is still ahead" />
                <FeatureList
                    items={[
                        { title: "Three layers", text: "Prerequisites between concepts, lessons related to each other, and the repo each lesson was taught in. A repo pulls its concepts into a cluster, so you can see what each project taught you." },
                        { title: "Hover and select", text: "The rest dims and the node's neighbours stay lit with their names, and more names appear as you zoom in." },
                        { title: "Accessible fallback", text: "A list view shows the same concepts as text grouped by state. It is the way in for keyboard and screen-reader users, and what you get when the browser cannot do WebGL." },
                    ]}
                />

                <Section title="8. Privacy and Limits">
                    <FeatureList
                        items={[
                            { title: "Local first", text: "Notes are generated and stored on your machine. Only /study uploads anything, and only to your own private Artifact." },
                            { title: "Only repos you said yes to", text: "If a repo belongs to an employer or client, the README says to check that it may upload its code to a service of your own before turning learning on." },
                            { title: "No secrets in lessons", text: "The skill is told to include only the few lines that illustrate a concept, never whole files, secrets or personal data. That is an instruction to a model, so the README says to skim notes before sharing the Artifact." },
                            { title: "Honest about what is untested", text: "It was tested end to end in headless mode. Nobody has used it interactively yet, so permission prompts and the question dialog are untested, and the README says so." },
                            { title: "Sync is manual", text: "A published page could not reach the plugin's local MCP server in the desktop app, so new lessons reach the study space when you run /study. A reminder line after each commit is the chosen compromise." },
                        ]}
                    />
                </Section>

                <Section title="9. Key Decisions">
                    <SubHeading>Markdown notes as the source of truth</SubHeading>
                    <Paragraph>
                        Lessons are files you can open in Obsidian, search with grep and version with git, and your edits are synced back by content hash. The study space is built from the notes, and only your progress lives there.
                    </Paragraph>
                    <SubHeading>Predict before you read</SubHeading>
                    <Paragraph>
                        Committing to a guess first is the cheapest way to turn reading into learning, and it makes the explanation answer a question you already have.
                    </Paragraph>
                    <SubHeading>Give the hook context instead of smarts</SubHeading>
                    <Paragraph>
                        A hook only sees a patch. Rather than make it clever, the plugin feeds it what matters: your profile, the repo&apos;s kind, a memory of the project and the concepts that fit.
                    </Paragraph>
                    <SubHeading>Consent per repo, not per plugin</SubHeading>
                    <Paragraph>
                        Learning from a repository sends its code through a model. Asking once in each repo, and staying silent until you say yes, respects both your tokens and your clients.
                    </Paragraph>
                </Section>

                <Section title="10. Outcome">
                    <StatTiles
                        items={[
                            { value: "19", label: "commits in two days" },
                            { value: "5", label: "commands" },
                            { value: "85", label: "catalog concepts, 15 branches" },
                            { value: "0", label: "packages to install" },
                        ]}
                    />
                    <DataTable
                        head={["Command", "What it does"]}
                        rows={[
                            ["/study", "Syncs new and edited notes, then opens the study space"],
                            ["/learn-repo", "Turns learning on or off for the current repo"],
                            ["/learn-setup", "Chooses how you practise, without opening the study space"],
                            ["/learn-from-history", "Turns the most instructive past commits into lessons"],
                            ["/learn-project", "Builds a memory of the project and a few base lessons"],
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Learning needs context, not volume", text: "The lessons improved when the hook knew what the project was, not when it was given more code." },
                        { title: "Say what is untested", text: "A prototype that lists its own limits earns more trust than one that claims to work everywhere." },
                        { title: "Files outlive tools", text: "Plain Markdown notes keep their value if the study space changes or disappears." },
                    ]}
                    next="More catalog branches such as Go, Rust and Vue, an import button so notes can reach the study space without Claude Code, and an English interface."
                />

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/learn-by-doing", icon: "ri-github-fill" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
