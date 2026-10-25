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
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "Argus - Simulated Operations Console | Josh D. Rubio",
    description: "A map-first operations console: a seeded simulation of drones and sensors, a live event feed and a rules engine that explains every recommendation. The last Siegfried satellite, built by a remote cloud agent from one brief.",
}

const IMG = "/assets/imgs/projects/argus"

export default function Argus() {
    return (
        <ProjectPage>
            <ProjectHeader
                status="Siegfried satellite · 5 of 5"
                title="Argus - Simulated Operations Console"
                summary="One dense operator screen: a live map with moving assets, a status bar, an asset list, an event feed and a panel of recommended actions, each one showing the rule that produced it."
                meta={[
                    { label: "Role", value: "Design & Direction" },
                    { label: "Stack", value: "Next.js, MapLibre, TypeScript" },
                    { label: "Built by", value: "Remote cloud agent" },
                    { label: "Identity", value: "Signal red · Inter" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "Argus" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>Named for the hundred-eyed giant of Greek myth</strong>, Argus fuses many simulated eyes, five drones and three fixed sensors, into one picture. It is the fifth and last satellite of <a href="/projects/siegfried">Siegfried</a>.
                    </Paragraph>
                    <Paragraph>
                        Every feed is synthetic and the app says so on every screen. It is inspired by the general shape of situational-awareness tools, not a specific product, and its events are framed as operations and logistics (verify a position, recall to recharge, dispatch diagnostics), never as anything resembling targeting.
                    </Paragraph>
                </Section>

                <Callout tone="danger" title="⚠️ The Problem">
                    <p className="text-300 mb-0">
                        An operator watching many assets at once drowns in signals. A suggestion system helps only if the operator can see why it suggests something; an opaque &quot;AI says so&quot; gets ignored or, worse, trusted blindly.
                    </p>
                </Callout>

                <Callout tone="success" title="✓ The Solution">
                    <p className="text-300 mb-0">
                        <strong>Explainable rules over a live picture.</strong> Four if/then rules rank the actions every tick, and each recommendation names its rule and cites the exact numbers that triggered it.
                    </p>
                </Callout>

                <ProcessSteps
                    steps={[
                        { label: "SIMULATE", hint: "8 assets" },
                        { label: "DETECT", hint: "Event feed" },
                        { label: "RANK", hint: "4 rules" },
                        { label: "ACT", hint: "Operator decides" },
                    ]}
                />

                <Section title="2. The Console">
                    <Paragraph>
                        Map first, with docked panels: the structure comes from MarineTraffic&apos;s redesign, the dense telemetry panels from NASA&apos;s Open MCT, and the near-black surfaces with a single reserved accent from Grafana&apos;s dark theme. Everything is visible and moving at once, on purpose.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-dashboard-2.webp`} alt="Argus console" caption="The console a few minutes into the simulation (basemap simplified for these captures)" />
                <FeatureList
                    items={[
                        { title: "Status bar", text: "Simulated clock, counts by severity and average link quality." },
                        { title: "Map", text: "MapLibre over the coastline near Almería, with patrol orbits and sensor ranges." },
                        { title: "Assets", text: "Battery, link quality, sector and state for every asset." },
                        { title: "Event feed", text: "Geofence drift, low battery, link loss, sensor faults, calibration drift and weather." },
                        { title: "Recommendations", text: "Up to six actions, ranked, each with its rule and the assets involved." },
                    ]}
                />

                <Section title="3. The Engine">
                    <Paragraph>
                        There is no WebSocket server and no database. A browser interval advances a seeded simulation about once a second, events are drawn at low and tunable probabilities, and the rules are evaluated against the new state.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/loop.png`} alt="Argus engine" caption="The tick loop and the four rules" />
                <DataTable
                    head={["Rule", "Fires when", "Suggests"]}
                    rows={[
                        ["Critical asset", "An asset is offline or critical", "Re-establish contact, recall or run diagnostics"],
                        ["Coverage gap", "A drone returns to base or drops out", "Reassign the nearest nominal drone"],
                        ["Unacknowledged event", "A breach or fault in the last 3 minutes", "Verify position or schedule diagnostics"],
                        ["Battery trend", "A drone on task reaches caution level", "Plan a relief asset ahead of time"],
                    ]}
                />
                <SubHeading>Why not an LLM</SubHeading>
                <Paragraph>
                    A model reasoning over numbers that are already synthetic would only add a layer of pretend intelligence. A transparent rule is more honest, needs no API key and is easy to audit.
                </Paragraph>

                <Section title="4. Built by an Agent">
                    <Paragraph>
                        Argus is the only satellite I did not build in my own session. I dispatched it to a remote Claude Code agent with one self-contained brief: the benchmark-first process, the Next.js 16 pattern, the demo auth gate and every gotcha already recorded in Siegfried&apos;s vault, restated inline because the remote sandbox could not read the vault. The agent researched, designed, built and pushed the repository; I then reviewed the live app, checked the framing of every event, registered it in Siegfried and wrote its spec.
                    </Paragraph>
                    <Paragraph>
                        The lesson: a brief that says &quot;follow the usual pattern&quot; fails silently in a remote agent, because there is no &quot;usual&quot; it can see. The playbook had to be complete enough to stand on its own.
                    </Paragraph>
                </Section>

                <Section title="5. Honesty Page">
                    <Paragraph>
                        As in every satellite, a docs page lists what is real (the map, the geography and the login gate) and what is simulated (every asset, the live feel, the events, the recommendations and the login itself), along with the known limits of the simulation.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/screen-docs.webp`} alt="Argus docs page" caption="What is real and what is simulated" />

                <Section title="6. Outcome">
                    <StatTiles
                        items={[
                            { value: "8", label: "simulated assets" },
                            { value: "~1 s", label: "simulation tick" },
                            { value: "4", label: "explainable rules" },
                            { value: "1", label: "brief to a remote agent" },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Explain every suggestion", text: "Showing the rule and its numbers turns a recommendation into something an operator can check." },
                        { title: "Framing is a design decision", text: "Neutral, logistics language kept a surveillance-style interface clearly an asset-coordination tool." },
                        { title: "Delegation needs a real playbook", text: "The remote build only worked because the conventions were written down completely." },
                    ]}
                    next="A basemap that follows the light theme, and acknowledging events from the feed so rule three can be closed by the operator."
                />

                <ProjectCTA
                    links={[
                        { label: "Siegfried Case Study", href: "/projects/siegfried" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
