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
    title: "Athena - Drone Swarm Mission Planner | Josh D. Rubio",
    description: "A drone swarm mission planner on a real map: boustrophedon coverage paths computed with Turf.js, split across a fleet and played back in a kinematic simulation. A Siegfried satellite, designed and built end to end.",
}

const IMG = "/assets/imgs/projects/athena"

export default function Athena() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/Athena" }}
                status="Siegfried satellite · 4 of 5"
                title="Athena - Drone Swarm Mission Planner"
                summary="Draw an area on a real map, choose a fleet size and get a coverage plan: real computational geometry splits the area into lanes, deals them across the drones and plays the mission back."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Stack", value: "Next.js, MapLibre, Turf.js" },
                    { label: "Type", value: "Geospatial planning UI" },
                    { label: "Identity", value: "Phosphor · Space Grotesk" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "Athena" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>Named for the goddess of strategy, planning rather than brute force</strong>, Athena is a planning tool: waypoints, coverage areas and the coordination of several drones. It is a satellite of <a href="/projects/siegfried">Siegfried</a>, and the first one built to be visually dense on purpose, after earlier satellites drifted toward minimalism.
                    </Paragraph>
                    <Paragraph>
                        It does not try to fly anything. There is no flight-controller protocol, no physics and no airspace or battery-reserve validation, as there would be in QGroundControl or DJI FlightHub 2. The map, the geometry and the reference photos are real; the flight is a disclosed simulation.
                    </Paragraph>
                </Section>

                <Callout tone="danger" title="⚠️ The Problem">
                    <p className="text-300 mb-0">
                        Covering an area with several drones by hand means drawing dozens of parallel legs, balancing them across the fleet and estimating whether each drone can finish. It is slow, and easy to get wrong.
                    </p>
                </Callout>

                <Callout tone="success" title="✓ The Solution">
                    <p className="text-300 mb-0">
                        <strong>Draw the outline, let the geometry do the rest.</strong> The planner computes the sweep lanes, assigns them round-robin and chains each drone&apos;s lanes into one continuous path, with distance, time and battery per drone before take-off.
                    </p>
                </Callout>

                <ProcessSteps
                    steps={[
                        { label: "DRAW", hint: "Area or waypoints" },
                        { label: "GENERATE", hint: "Coverage lanes" },
                        { label: "ASSIGN", hint: "Across the fleet" },
                        { label: "SIMULATE", hint: "Play and scrub" },
                    ]}
                />

                <Section title="2. The Coverage Algorithm">
                    <Paragraph>
                        A boustrophedon, or lawnmower, sweep. Turf.js intersects horizontal sweep lines, spaced 40 metres apart, with the drawn polygon&apos;s boundary; each pair of crossings becomes a lane. Lanes are dealt round-robin across the fleet, and every other lane is reversed so that each drone&apos;s legs connect end to end.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/coverage.png`} alt="Coverage algorithm" caption="From a drawn polygon to one connected path per drone" />

                <Section title="3. The Mission View">
                    <Paragraph>
                        The layout borrows QGroundControl&apos;s grammar (a tool strip on the left, an editor panel, stats along the bottom) and DJI FlightHub 2&apos;s floating glass tiles over a dark map.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Tool strip", text: "Waypoint or coverage mode, the active drone, a fleet-size stepper and Generate." },
                            { title: "KPI tiles", text: "Drones, waypoints, covered area and estimated time." },
                            { title: "Fleet panel", text: "Waypoints, distance, time and battery for each drone." },
                            { title: "Bottom bar", text: "Altitude profile or mission stats, with play, pause, speed and a scrubber." },
                        ]}
                    />
                </Section>
                <FigureGrid
                    images={[
                        { src: `${IMG}/screen-draw.webp`, alt: "Drawing a coverage area", caption: "Drawing the area" },
                        { src: `${IMG}/screen-plan.webp`, alt: "Generated plan", caption: "Four drones, lanes generated" },
                    ]}
                />
                <Figure src={`${IMG}/screen-flight.webp`} alt="Mission playback" caption="Playback, scrubbed to the middle of the mission (basemap simplified for these captures)" />

                <SubHeading>A simulation that says it is one</SubHeading>
                <Paragraph>
                    Positions come from walking each path&apos;s cumulative distance at a constant cruise speed of about 43 km/h, battery drains linearly, and altitude holds flat after a short take-off ramp. It is enough to compare plans, and the docs page states exactly that.
                </Paragraph>
                <Figure src={`${IMG}/screen-stats.webp`} alt="Mission stats" caption="Mission stats in the bottom bar" />

                <SubHeading>Ground truth from real photos</SubHeading>
                <Paragraph>
                    Clicking the map asks Mapillary for the nearest public street-level photo within 50 metres, through a server route so the token never reaches the browser. It is labelled as a real photo for context, never as the drone&apos;s camera, and &quot;nothing within 50 m&quot; is shown honestly, because it is the common case.
                </Paragraph>

                <Section title="4. Engineering Notes">
                    <FeatureList
                        items={[
                            { title: "MapLibre under Turbopack", text: "The library's worker does not resolve under Turbopack, so it is served from public/ and set explicitly before the first map is created." },
                            { title: "A collapsing map", text: "MapLibre's own stylesheet overrides absolute positioning on the container, so the map is sized with full width and height inside a positioned wrapper." },
                            { title: "Markers after a remount", text: "Strict mode recreates the map in development; tracked markers are cleared in the same cleanup that removes the map, or they silently never come back." },
                        ]}
                    />
                </Section>

                <Section title="5. Outcome">
                    <StatTiles
                        items={[
                            { value: "40 m", label: "lane spacing" },
                            { value: "1-6", label: "drones per plan" },
                            { value: "3", label: "real layers: map, geometry, photos" },
                            { value: "0", label: "API keys for the map" },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Real geometry earns trust", text: "Lanes computed from actual intersections behave correctly on any shape a user draws." },
                        { title: "Density can be calm", text: "Many panels work when the accent is kept for signals and everything else stays gray." },
                        { title: "Name the limits", text: "The sweep is never rotated to the polygon's narrowest axis, and the docs say so instead of hiding it." },
                    ]}
                    next="Rotate the sweep to the minimum-width axis to cut turns, and add a battery reserve check per drone."
                />

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/Athena", icon: "ri-github-fill" },
                        { label: "Siegfried Case Study", href: "/projects/siegfried" },
                        { label: "Discuss This Project", href: "/#contact" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
