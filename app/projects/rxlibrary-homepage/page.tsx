import {
    Callout,
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
    Takeaways,
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "RX Library Website - Interactive Marketing Site | Josh D. Rubio",
    description: "The marketing website of the RX Library telehealth platform: a scroll-driven Three.js narrative, a modular product story and interactive role previews. Designed and developed end to end, section by section.",
}

const IMG = "/assets/imgs/projects/rxlibrary-homepage"

export default function RxLibraryWebsite() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View Live Site", href: "https://rxlibrary-homepage-prototype.vercel.app" }}
                title="RX Library - Interactive Marketing Website"
                summary="The public face of the RX Library telehealth platform: a scroll-driven story that explains a complex infrastructure product to enterprise buyers, led by a single 3D object that follows the visitor down the page."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Stack", value: "Next.js, Three.js, Tailwind" },
                    { label: "Deploy", value: "Vercel" },
                    { label: "Scope", value: "11 hand-tuned sections" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "RX Library website hero" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>A product page that behaves like the product: precise, layered and alive.</strong> RX Library is the multi-tenant telehealth platform described in <a href="/projects/rx-library">its own case study</a>. This is its website, and I designed and built every part of it, from the visual language to each animation, with very fine control section by section.
                    </Paragraph>
                    <Paragraph>
                        It is a standalone Next.js app that deploys as a static marketing page: no backend, no internal packages. Around 3,900 lines of TypeScript carry eleven sections, two Three.js scenes and all of their motion.
                    </Paragraph>
                </Section>

                <Callout tone="danger" title="⚠️ The Challenge">
                    <p className="text-300 mb-2">
                        The audience is not a patient any more. It is an organization deciding whether to build on a healthcare distribution platform, and the product is infrastructure, which is hard to show.
                    </p>
                    <ul className="text-300 mb-0">
                        <li><strong>Abstract product:</strong> rules, integrations and data models have no natural picture</li>
                        <li><strong>Many audiences:</strong> employers, providers, pharmacies and brands each need to see themselves in it</li>
                        <li><strong>Trust:</strong> a regulated space punishes anything that looks improvised</li>
                    </ul>
                </Callout>

                <Callout tone="success" title="✓ The Solution">
                    <p className="text-300 mb-0">
                        <strong>Make the abstract tangible, one section at a time.</strong> A 3D cube gives the platform a body and travels with the visitor. Each section then proves one claim with something you can watch or touch: a diagram of nodes, a carousel of brands, an order that moves itself through its lifecycle, live product screens that switch by role.
                    </p>
                </Callout>

                <Section title="2. Design Language">
                    <FeatureList
                        items={[
                            { title: "Neumorphism", text: "Paired dark and white offset shadows give cards and buttons a soft, physical depth, and the whole site uses them consistently." },
                            { title: "Palette", text: "Near-black surfaces, a light grey field and a single warm yellow accent, with a few status colours reserved for meaning." },
                            { title: "Type", text: "A system font stack with tight tracking, 800-weight display headlines and fluid sizes that scale with the viewport." },
                            { title: "Data-driven sections", text: "Arrays of brands, steps, roles, personas, cards and testimonials feed the sections, so copy changes never touch layout." },
                        ]}
                    />
                </Section>

                <Section title="3. One Cube for the Whole Page">
                    <Paragraph>
                        A single fixed Three.js canvas shows a 3×3×3 cube whose 27 pieces are rounded extruded boxes with glowing stickers, lit by an amber point light and a few fills. A scroll-threshold state machine moves it between key positions (hero, orbital section, white label, off-screen) and interpolates the camera, position, scale and light every frame. Positions are recomputed from the viewport on resize, the pixel ratio is capped, and the renderer is disposed on unmount. Using one canvas for the whole page means one WebGL context instead of one per section.
                    </Paragraph>
                </Section>

                <Section title="4. Section by Section">
                    <Paragraph>
                        Every section below was tuned on its own. Here is what each one does and what went into it.
                    </Paragraph>

                    <SubHeading>Hero</SubHeading>
                    <Paragraph>
                        A full-height dark stage with a radial amber glow and one sentence: the operating system for modern healthcare distribution. The headline, sub-copy and the two calls to action fade in on a staggered timeline with a custom easing, type scales fluidly between 34 and 68 px, and the cube starts as a frozen explosion of pieces scattered radially that drift into place.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/mobile.png`} alt="Hero on mobile" caption="The hero at 390 px" narrow />

                <SubHeading>Trust strip</SubHeading>
                <Paragraph>
                    A quiet row of compliance and coverage badges with custom inline SVG icons at low opacity and a tracked uppercase label, revealed with an IntersectionObserver-driven rise so it never competes with the hero.
                </Paragraph>
                <Figure src={`${IMG}/section-02-trust.png`} alt="Trust strip" caption="Trust strip" />

                <SubHeading>Platform architecture</SubHeading>
                <Paragraph>
                    The first big idea: one platform for every stakeholder. A tall gradient bridges from the dark hero into a light field, and eight orbital nodes (ICHRA, clinician, e-prescribing, pharmacy, provider network, payments, patient and admin) sit on SVG rings with glow filters, each as a neumorphic card with its own accent colour and a staggered entrance. The 3D cube sits at the centre and performs random 90-degree face-slice turns: nine slices around a pivot group that snap back into place.
                </Paragraph>
                <Figure src={`${IMG}/section-03-platform.png`} alt="Platform architecture" caption="Eight nodes orbiting the cube" />

                <SubHeading>White label</SubHeading>
                <Paragraph>
                    &quot;Your brand.&quot; cycles through a six-colour palette on a ten-second loop, in step with the cube&apos;s own colour cycle. Below it, an elliptic 3D carousel presents six fictional brands, computing a translate, rotation, depth and scale for every position and entering from the right direction. Each card previews its own font pairing and colour chips, using sixteen imported Google fonts, with a three-second autoplay and pagination pills.
                </Paragraph>
                <Figure src={`${IMG}/section-04-whitelabel.png`} alt="White label carousel" caption="The 3D carousel and the colour-cycling cube" />
                <Figure src={`${IMG}/section-04b-whitelabel.png`} alt="White label carousel, another brand" caption="A different active brand: the cube and the headline recolour together" />

                <SubHeading>Care network</SubHeading>
                <Paragraph>
                    A deliberately asymmetric layout: a two-column grid where the right column is an 800 px dark card, and behind it a six-by-three field of eighteen bento cards fades out through a gradient mask. Three cards at a time flash an energy stroke, applied straight to the DOM classes so nothing re-renders, and the four headline figures count up one after another with a requestAnimationFrame counter and cubic easing, triggered when the section is 40% visible.
                </Paragraph>
                <Figure src={`${IMG}/section-05-care.png`} alt="Care network" caption="Care network: dark card over a fading bento field" />

                <SubHeading>End-to-end automation</SubHeading>
                <Paragraph>
                    An order tracker that runs itself: an eight-step card from intake to delivery advances every two and a half seconds, holds on the final state, and shows a progress percentage, a status pill, a cascade of dots and a pop with a green pulse when the order is complete. A floating product card hovers beside it on a slow vertical loop.
                </Paragraph>
                <FigureGrid
                    images={[
                        { src: `${IMG}/section-06-e2e.png`, alt: "Order tracker mid-flow", caption: "Mid-flow: consult complete" },
                        { src: `${IMG}/section-06b-e2e.png`, alt: "Order tracker delivered", caption: "Delivered" },
                    ]}
                />

                <SubHeading>See it in action</SubHeading>
                <Paragraph>
                    The centrepiece is a 320vh scroll track with a sticky full-height stage. Scroll progress, computed from the section&apos;s bounding box, drives a browser-chrome card that tilts in (a 20-degree rotation flattening while it scales up over the first fifth), then switches role at one third and two thirds: patient, clinician, admin. Three real product screens crossfade through <code>next/image</code>, the copy remounts with its own entrance, and a segmented indicator tracks the three roles.
                </Paragraph>
                <Figure src={`${IMG}/section-07-seeit-patient.png`} alt="See it in action: patient" caption="Patient" />
                <FigureGrid
                    images={[
                        { src: `${IMG}/section-07b-seeit-clinician.png`, alt: "See it in action: clinician", caption: "Clinician" },
                        { src: `${IMG}/section-07c-seeit-admin.png`, alt: "See it in action: admin", caption: "Admin" },
                    ]}
                />

                <SubHeading>From stall to resolved</SubHeading>
                <Paragraph>
                    Directly below the sticky stage, four story cards (stall detected, auto-flagged, reassigned, resolved) turn a boring exception into a narrative, with red, yellow and green status dots, a highlighted active card and a progress line with nodes.
                </Paragraph>
                <Figure src={`${IMG}/section-08-stall.png`} alt="Stall story" caption="From stall to resolved, automatically" />

                <SubHeading>Built for your world</SubHeading>
                <Paragraph>
                    One section that morphs for four audiences: employers, retail providers, pharmacies and brands. It auto-cycles every five seconds with a progress bar, pauses on hover, and lets you switch manually, re-entering with staggered bullets. The headline changes with the persona, and so does a dark UI card: an HR dashboard with utilization bars, a patient queue, a fulfillment pipeline and a brand configurator.
                </Paragraph>
                <FigureGrid
                    images={[
                        { src: `${IMG}/section-09-adapt-employers.png`, alt: "Employers", caption: "Employers: benefits dashboard" },
                        { src: `${IMG}/section-09b-adapt-providers.png`, alt: "Retail providers", caption: "Retail providers: patient queue" },
                        { src: `${IMG}/section-09c-adapt-pharmacies.png`, alt: "Pharmacies", caption: "Pharmacies: fulfillment pipeline" },
                        { src: `${IMG}/section-09d-adapt-brands.png`, alt: "Brands", caption: "Brands: configuration" },
                    ]}
                />

                <SubHeading>The network speaks</SubHeading>
                <Paragraph>
                    Social proof as motion: two full-bleed marquee rows of fourteen quotes, in cards offset from each other and scrolling in opposite directions at different speeds, accelerated on the compositor with <code>will-change</code> and paused on hover. The headline is embossed with a text shadow on the light field.
                </Paragraph>
                <Figure src={`${IMG}/section-10-testimonials.png`} alt="Testimonials marquee" caption="Two counter-scrolling marquees" />

                <SubHeading>Call to action and footer</SubHeading>
                <Paragraph>
                    The page closes on a dark two-column call to action beside a second, self-contained Three.js scene: a levitating cube with a slow rotation and a glow pulse. Its render loop pauses through an IntersectionObserver whenever it is off-screen.
                </Paragraph>
                <Figure src={`${IMG}/section-11-cta.png`} alt="Call to action and footer" caption="Call to action with the footer cube" />

                <Section title="5. Technical Decisions">
                    <SubHeading>One canvas, a state machine</SubHeading>
                    <Paragraph>
                        A single fixed canvas driven by scroll thresholds avoids a WebGL context per section, and interpolating toward each key position keeps the motion smooth whatever the scroll speed.
                    </Paragraph>
                    <SubHeading>Bypass React where it would hurt</SubHeading>
                    <Paragraph>
                        The random energy blinks toggle CSS classes directly on the DOM and the counters run on requestAnimationFrame, so continuous animation never triggers a re-render.
                    </Paragraph>
                    <SubHeading>Pause what you cannot see</SubHeading>
                    <Paragraph>
                        The footer scene stops rendering off-screen, the carousel and the persona cycle pause on hover, and the heavy 3D component is loaded on the client only.
                    </Paragraph>
                    <SubHeading>Static deployment</SubHeading>
                    <Paragraph>
                        The site has no backend, deploys to Vercel and updates on every push. It is extracted from the main application and stays in sync with it.
                    </Paragraph>
                </Section>

                <Section title="6. How It Evolved">
                    <Paragraph>
                        The history shows how fine-grained the work was. After the standalone extraction, a visual overhaul introduced the neumorphic language, a key position for the cube and the font carousel. The care-network dark card, button hover effects, the footer cube and the sequential stat animations followed, and a final redesign added the testimonials carousel and section theming. In this repository the page roughly doubled in size in three days, from about 1,400 to 2,900 lines.
                    </Paragraph>
                    <StatTiles
                        items={[
                            { value: "11", label: "sections" },
                            { value: "2", label: "Three.js scenes" },
                            { value: "27", label: "cube pieces" },
                            { value: "14", label: "testimonials" },
                            { value: "3.9k", label: "lines of TypeScript" },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Give the abstract a body", text: "A single recurring 3D object made an infrastructure product feel like one thing." },
                        { title: "One claim per section", text: "Each section proves exactly one idea with something the visitor can watch or touch." },
                        { title: "Performance is part of the design", text: "One canvas, direct DOM updates and paused loops kept a very animated page light." },
                    ]}
                />

                <ProjectCTA
                    links={[
                        { label: "View Live Site", href: "https://rxlibrary-homepage-prototype.vercel.app", icon: "ri-external-link-line" },
                        { label: "Source Code", href: "https://github.com/joshrubio/rxlibrary-homepage-prototype", icon: "ri-github-fill" },
                        { label: "Contact Me", href: "/#contact" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
