import {
    BulletList,
    Callout,
    Figure,
    NumberedFeatures,
    Paragraph,
    ProcessSteps,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    ScreenStrip,
    Section,
    SubHeading,
    TagList,
    Takeaways,
} from "@/components/case-study"

export const metadata = {
    title: "Teller - AI Writing Assistant | Josh D. Rubio",
    description: "A cross-platform writing experience that allows writers to explore ideas while writing. UX/UI Design case study.",
}

export default function Teller() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View Prototype", href: "https://www.figma.com/proto/rBnrusq6jGdPM7fiNS4y8H/Teller%3A-Writting-API?node-id=243-20136&p=f&t=tzbvNxZIUuJCffH2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=243%3A20136&show-proto-sidebar=1" }}
                title="Teller - AI Writing Assistant"
                summary="<em>Get inspired, write more, inspire others.</em> A cross-platform AI writing assistant that empowers storytellers to craft better narratives."
                meta={[
                    { label: "Role", value: "UX Designer" },
                    { label: "Duration", value: "4 Weeks" },
                    { label: "Tools", value: "Figma + AI" },
                    { label: "Type", value: "Case Study" },
                ]}
                hero={{ src: "/assets/imgs/projects/teller/thumbnail.webp", alt: "Teller Hero" }}
            />

            <ProjectBody>
                <Section title="1. Project Overview">
                    <Paragraph><strong>Bridging creativity and structure.</strong> Generative AI is reshaping how we write, yet many writing platforms still rely on outdated tools. I saw an opportunity: <strong>what if writers could access professional-grade AI assistance directly within their favorite communities?</strong></Paragraph>

                    <Paragraph>Teller is a speculative case study exploring how AI can integrate seamlessly into platforms like <strong>Wattpad, WebNovel, and Royal Road</strong>—transforming their text editors into intelligent creative companions that help writers refine plots, develop characters, and elevate their craft.</Paragraph>

                    <Callout tone="danger" title="⚠️ The Problem">
                        <SubHeading>What's broken in today's writing experience?</SubHeading>

                        <Paragraph>Writing communities attract millions of passionate storytellers, but they're held back by <strong>fragmented workflows</strong>:</Paragraph>

                        <BulletList>
                            <li><strong>Basic text processors</strong> lack essential features for storytelling (plot tracking, pacing analysis, character consistency)</li>
                            <li><strong>Subscription plans don't deliver</strong> comprehensive editing tools or AI-powered feedback</li>
                            <li>Writers juggle <strong>multiple services</strong> just to get basic manuscript support</li>
                        </BulletList>

                        <Paragraph><strong>The result?</strong> Writers spend more time managing tools than actually writing.</Paragraph>
                    </Callout>

                    <Figure src="/assets/imgs/projects/teller/challenge.webp" alt="User Frustrations" />

                    <Callout tone="success" title="✓ The Solution">
                        <Paragraph><strong>AI-powered storytelling, directly where writers create.</strong> Teller leverages generative AI to provide:</Paragraph>

                        <NumberedFeatures
                            items={[
                                { title: "Context-aware feedback", text: "Plot structure, pacing, character arcs" },
                                { title: "Manuscript consistency", text: "Character details, timeline tracking" },
                                { title: "Visual plot mapping", text: "Story arc visualization" },
                                { title: "One unified platform", text: "No switching between tools" },
                            ]}
                        />
                    </Callout>

                    <Figure src="/assets/imgs/projects/teller/thumbnail-2.webp" alt="Teller Solution UI" />
                </Section>

                <Section title="2. My Process">
                    <ProcessSteps
                        steps={[
                            { label: "DEFINE", hint: "Scope" },
                            { label: "RESEARCH", hint: "Activities" },
                            { label: "IDEATE", hint: "Features" },
                            { label: "DESIGN", hint: "Iterate" },
                        ]}
                    />
                </Section>

                <Section title="3. Defining the Scope">
                    <SubHeading>Why focus on writing communities?</SubHeading>

                    <Paragraph>I started with an open canvas—too many possibilities. But I knew my passion: <strong>storytelling</strong>. As someone who writes and constantly switches between tools, I asked: <em>What if AI could bridge creativity and structure?</em></Paragraph>

                    <Paragraph>The sweet spot emerged at the intersection of <strong>my interests (writing + AI)</strong>, <strong>market demand (millions of writers)</strong>, and <strong>a clear gap</strong> (platforms lack advanced tools).</Paragraph>

                    <Figure src="/assets/imgs/projects/teller/scope.webp" alt="Project Scope Venn Diagram" />
                </Section>

                <Section title="4. Understanding the Current Experience">
                    <SubHeading>UX Audit</SubHeading>

                    <Paragraph>I analyzed the top writing communities to understand their workflows. Through <strong>user journey mapping</strong>, I identified critical pain points and opportunities where Teller could add value.</Paragraph>

                    <ScreenStrip
                        images={[
                            { src: "/assets/imgs/projects/teller/flow-1.webp", alt: "User Flow 1" },
                            { src: "/assets/imgs/projects/teller/flow-2.webp", alt: "User Flow 2" },
                            { src: "/assets/imgs/projects/teller/flow-3.webp", alt: "User Flow 3" },
                            { src: "/assets/imgs/projects/teller/flow-4.webp", alt: "User Flow 4" },
                        ]}
                    />
                </Section>

                <Section title="5. Deep Research">
                    <Paragraph>To validate Teller's market fit, I investigated existing tools, analyzed workflows, and created data-informed personas.</Paragraph>

                    <Callout tone="info" title="🎯 Research Goals">
                        <BulletList>
                            <li>Map current workflows through <strong>user journeys and personas</strong></li>
                            <li>Analyze the competitive landscape to find <strong>gaps and opportunities</strong></li>
                            <li>Define clear user needs based on <strong>real behavior and pain points</strong></li>
                        </BulletList>
                    </Callout>

                    <TagList items={["UX Audits", "Competitive Analysis", "Persona Development"]} />

                    <SubHeading>Competitive Audit</SubHeading>

                    <Paragraph>I researched tools writers already use—<strong>Grammarly, Sudowrite, ProWritingAid</strong>—to understand their strengths and limitations. This revealed opportunities for Teller to differentiate through <strong>deeper context awareness and platform integration</strong>.</Paragraph>

                    <Figure src="/assets/imgs/projects/teller/competitive-audit.webp" alt="Competitive Audit Table" />

                    <SubHeading>Personas Development</SubHeading>

                    <Paragraph>I created two personas representing distinct writing styles: <strong>Planners ("Plotters")</strong> and <strong>Improvisers ("Pantsers")</strong>. Understanding their workflows helped shape features that serve both approaches.</Paragraph>

                    <Figure src="/assets/imgs/projects/teller/pantser-plotter.webp" alt="Pantser vs Plotter Writing Behaviors" />

                    <Figure src="/assets/imgs/projects/teller/personas.webp" alt="Maria Torres and Alex Carter Personas" />

                    <Figure src="/assets/imgs/projects/teller/user-needs.webp" alt="User Needs Statement" />

                    <SubHeading>From Needs to Features</SubHeading>

                    <Paragraph>Using insights from research, I mapped <strong>user needs directly to features</strong>. Each feature addresses a specific pain point and supports clear user tasks—ensuring Teller solves real problems.</Paragraph>

                    <Figure src="/assets/imgs/projects/teller/need-to-feature.webp" alt="Need-to-Feature Matrix" />

                    <SubHeading>User Journeys</SubHeading>

                    <Paragraph>I visualized complete user journeys for both personas, tracking their actions, pain points, and emotional states. This informed where and how Teller should intervene.</Paragraph>

                    <Figure src="/assets/imgs/projects/teller/user-journeys-main.webp" alt="Teller User Journeys Overview" />

                    <ScreenStrip
                        images={[
                            { src: "/assets/imgs/projects/teller/user-journey-1.webp", alt: "User Journey 1" },
                            { src: "/assets/imgs/projects/teller/user-journey-2.webp", alt: "User Journey 2" },
                            { src: "/assets/imgs/projects/teller/user-journey-3.webp", alt: "User Journey 3" },
                        ]}
                    />
                </Section>

                <Section title="6. Crafting the Experience">
                    <Paragraph>With research complete, I translated insights into a <strong>cohesive visual and functional design</strong>—one that feels native to writing platforms while introducing powerful AI capabilities.</Paragraph>

                    <SubHeading>Information Architecture</SubHeading>

                    <Paragraph>I structured Teller's navigation to <strong>mirror familiar writing workflows</strong> on platforms like Wattpad and Royal Road. The goal: make AI assistance feel like a natural extension, not a disruption.</Paragraph>

                    <Figure src="/assets/imgs/projects/teller/information-architecture.webp" alt="Teller Information Architecture" />

                    <SubHeading>Design System</SubHeading>

                    <Paragraph>I built a <strong>scalable design system</strong> inspired by tools like Notion and ChatGPT. The system balances <strong>professional polish with minimal distraction</strong>—letting writers stay focused on their stories.</Paragraph>

                    <Figure src="/assets/imgs/projects/teller/design-system.webp" alt="Teller Design System" />

                    <SubHeading>Key Features & Screens</SubHeading>

                    <Paragraph>I designed a <strong>clean, flexible workspace</strong> with an infinite canvas, interactive AI chatbox, and color-coded features. The interface draws from familiar design tools while innovating on AI-assisted writing.</Paragraph>

                    <Paragraph><strong>Core design principles:</strong> Intuitive navigation • Distraction-free writing • Contextual AI guidance • Visual clarity</Paragraph>

                    <Figure src="/assets/imgs/projects/teller/screen-plotting.webp" alt="Plotting Flow Screen" caption="Plotting Flow" />

                    <Figure src="/assets/imgs/projects/teller/screen-rewriting.webp" alt="Re-writing Flow Screen" caption="Re-writing Flow" />

                    <Figure src="/assets/imgs/projects/teller/screen-brainstorming.webp" alt="Brainstorming Flow Screen" caption="Brainstorming Flow" />

                    <Takeaways
                        title="💡 Key Takeaways"
                        items={[
                            { title: "User research drives differentiation", text: <>The competitive audit revealed that while tools like Grammarly focus on grammar and ProWritingAid on style, there's a gap for <em>narrative-focused AI assistance</em>. Understanding this white space shaped Teller's unique value proposition.</> },
                            { title: "Planners and improvisers need different support", text: <>Discovering the Plotter vs. Pantser distinction was crucial. Rather than forcing one workflow, Teller adapts—offering structure for planners and flexibility for improvisers. This insight came from deep persona development, not assumptions.</> },
                            { title: "Integration beats disruption", text: <>Writers already have established workflows on platforms like Wattpad and Royal Road. Teller succeeds by <em>enhancing</em> their existing experience, not replacing it. Familiarity reduces friction and increases adoption.</> },
                            { title: "AI needs context to truly help", text: <>Generic AI tools miss the nuance of storytelling. By mapping user journeys and understanding <em>when</em> writers struggle (plot consistency, pacing, character development), Teller can intervene at the right moments with the right guidance.</> },
                        ]}
                        next={<>User testing with real writers from Wattpad and Royal Road to validate feature priorities and refine the AI interaction model.</>}
                    />
                </Section>

                <ProjectCTA
                    links={[
                        { label: "View Live Prototype", href: "https://www.figma.com/proto/rBnrusq6jGdPM7fiNS4y8H/Teller%3A-Writting-API?node-id=243-20136&p=f&t=tzbvNxZIUuJCffH2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=243%3A20136&show-proto-sidebar=1", icon: "ri-external-link-line" },
                        { label: "Let's Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
