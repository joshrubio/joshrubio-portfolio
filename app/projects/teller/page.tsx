import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "Teller - AI Writing Assistant | Josh D. Rubio",
    description: "A cross-platform writing experience that allows writers to explore ideas while writing. UX/UI Design case study.",
}

export default function Teller() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="https://www.figma.com/proto/rBnrusq6jGdPM7fiNS4y8H/Teller%3A-Writting-API?node-id=243-20136&p=f&t=tzbvNxZIUuJCffH2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=243%3A20136&show-proto-sidebar=1" target="_blank" className="btn btn-gradient d-inline-block text-uppercase">
                                            View Prototype
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            Teller - AI Writing Assistant
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            <em>Get inspired, write more, inspire others.</em> A cross-platform AI writing assistant that empowers storytellers to craft better narratives.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Role</p>
                                        <h6>UX Designer</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Duration</p>
                                        <h6>4 Weeks</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Tools</p>
                                        <h6>Figma + AI</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>Case Study</h6>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="col-12 mb-5">
                                    <img src="/assets/imgs/work/img-teller.png" alt="Teller Hero" className="w-100 rounded-3" />
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    {/* OVERVIEW */}
                                    <h5 className="fs-5 fw-medium mb-3">1. Project Overview</h5>
                                    <p className="text-300 fs-6 mb-3">
                                        <strong>Bridging creativity and structure.</strong> Generative AI is reshaping how we write, yet many writing platforms still rely on outdated tools. I saw an opportunity: <strong>what if writers could access professional-grade AI assistance directly within their favorite communities?</strong>
                                    </p>
                                    <p className="text-300">
                                        Teller is a speculative case study exploring how AI can integrate seamlessly into platforms like <strong>Wattpad, WebNovel, and Royal Road</strong>—transforming their text editors into intelligent creative companions that help writers refine plots, develop characters, and elevate their craft.
                                    </p>

                                    {/* THE PROBLEM */}
                                    <div className="mt-8 p-4 bg-light rounded-3 border-start border-danger border-4">
                                        <h5 className="fs-5 fw-medium text-danger mb-3">⚠️ The Problem</h5>
                                        <h6 className="mt-3 fw-semibold">What's broken in today's writing experience?</h6>
                                        <p className="text-300 mb-2">
                                            Writing communities attract millions of passionate storytellers, but they're held back by <strong>fragmented workflows</strong>:
                                        </p>
                                        <ul className="text-300">
                                            <li><strong>Basic text processors</strong> lack essential features for storytelling (plot tracking, pacing analysis, character consistency)</li>
                                            <li><strong>Subscription plans don't deliver</strong> comprehensive editing tools or AI-powered feedback</li>
                                            <li>Writers juggle <strong>multiple services</strong> just to get basic manuscript support</li>
                                        </ul>
                                        <p className="text-300 mt-3 mb-0">
                                            <strong>The result?</strong> Writers spend more time managing tools than actually writing.
                                        </p>
                                    </div>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/teller/challenge.png" alt="User Frustrations" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* THE SOLUTION */}
                                    <div className="mt-6 p-4 bg-light rounded-3 border-start border-success border-4">
                                        <h5 className="fs-5 fw-medium text-success mb-3">✓ The Solution</h5>
                                        <p className="text-300 mb-2">
                                            <strong>AI-powered storytelling, directly where writers create.</strong> Teller leverages generative AI to provide:
                                        </p>
                                        <div className="row g-3 mt-2">
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-start">
                                                    <span className="badge bg-success me-2 mt-1">1</span>
                                                    <div>
                                                        <strong>Context-aware feedback</strong>
                                                        <p className="mb-0 small text-300">Plot structure, pacing, character arcs</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-start">
                                                    <span className="badge bg-success me-2 mt-1">2</span>
                                                    <div>
                                                        <strong>Manuscript consistency</strong>
                                                        <p className="mb-0 small text-300">Character details, timeline tracking</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-start">
                                                    <span className="badge bg-success me-2 mt-1">3</span>
                                                    <div>
                                                        <strong>Visual plot mapping</strong>
                                                        <p className="mb-0 small text-300">Story arc visualization</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-flex align-items-start">
                                                    <span className="badge bg-success me-2 mt-1">4</span>
                                                    <div>
                                                        <strong>One unified platform</strong>
                                                        <p className="mb-0 small text-300">No switching between tools</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/teller/thumbnail-2.png" alt="Teller Solution UI" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* PROCESS */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-4">2. My Process</h5>
                                    <div className="row text-center mt-4 mb-5 g-3">
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-300 fs-5">01</div>
                                                <div className="fw-semibold text-300 mt-2">DEFINE</div>
                                                <div className="text-force-gray text-uppercase small mt-1">Scope</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-300 fs-5">02</div>
                                                <div className="fw-semibold text-300 mt-2">RESEARCH</div>
                                                <div className="text-force-gray text-uppercase small mt-1">Activities</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-300 fs-5">03</div>
                                                <div className="fw-semibold text-300 mt-2">IDEATE</div>
                                                <div className="text-force-gray text-uppercase small mt-1">Features</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-300 fs-5">04</div>
                                                <div className="fw-semibold text-300 mt-2">DESIGN</div>
                                                <div className="text-force-gray text-uppercase small mt-1">Iterate</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SCOPE */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-3">3. Defining the Scope</h5>
                                    <h6 className="mt-4 fw-semibold">Why focus on writing communities?</h6>
                                    <p className="text-300">
                                        I started with an open canvas—too many possibilities. But I knew my passion: <strong>storytelling</strong>. As someone who writes and constantly switches between tools, I asked: <em>What if AI could bridge creativity and structure?</em>
                                    </p>
                                    <p className="text-300">
                                        The sweet spot emerged at the intersection of <strong>my interests (writing + AI)</strong>, <strong>market demand (millions of writers)</strong>, and <strong>a clear gap</strong> (platforms lack advanced tools).
                                    </p>
                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/teller/scope.png" alt="Project Scope Venn Diagram" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* UX AUDIT */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-3">4. Understanding the Current Experience</h5>
                                    <h6 className="mt-4 fw-semibold">UX Audit</h6>
                                    <p className="text-300">
                                        I analyzed the top writing communities to understand their workflows. Through <strong>user journey mapping</strong>, I identified critical pain points and opportunities where Teller could add value.
                                    </p>

                                    {/* User Flows Gallery */}
                                    <div className="d-flex overflow-auto gap-3 my-4 pb-3" style={{ scrollSnapType: 'x mandatory' }}>
                                        <div className="flex-shrink-0" style={{ width: '280px', scrollSnapAlign: 'center' }}>
                                            <img src="/assets/imgs/projects/teller/flow-1.png" alt="User Flow 1" className="w-100 rounded-3 border shadow-sm" />
                                        </div>
                                        <div className="flex-shrink-0" style={{ width: '280px', scrollSnapAlign: 'center' }}>
                                            <img src="/assets/imgs/projects/teller/flow-2.png" alt="User Flow 2" className="w-100 rounded-3 border shadow-sm" />
                                        </div>
                                        <div className="flex-shrink-0" style={{ width: '280px', scrollSnapAlign: 'center' }}>
                                            <img src="/assets/imgs/projects/teller/flow-3.png" alt="User Flow 3" className="w-100 rounded-3 border shadow-sm" />
                                        </div>
                                        <div className="flex-shrink-0" style={{ width: '280px', scrollSnapAlign: 'center' }}>
                                            <img src="/assets/imgs/projects/teller/flow-4.png" alt="User Flow 4" className="w-100 rounded-3 border shadow-sm" />
                                        </div>
                                    </div>

                                    {/* RESEARCH */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-3">5. Deep Research</h5>
                                    <p className="text-300">
                                        To validate Teller's market fit, I investigated existing tools, analyzed workflows, and created data-informed personas.
                                    </p>

                                    <div className="p-4 rounded-3 mt-4">
                                        <h6 className="fw-semibold mb-3">🎯 Research Goals</h6>
                                        <ul className="text-300 mb-0">
                                            <li>Map current workflows through <strong>user journeys and personas</strong></li>
                                            <li>Analyze the competitive landscape to find <strong>gaps and opportunities</strong></li>
                                            <li>Define clear user needs based on <strong>real behavior and pain points</strong></li>
                                        </ul>
                                    </div>

                                    <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 my-5 text-center">
                                        <span className="badge bg-primary text-white fw-normal py-2 px-4 fs-6">UX Audits</span>
                                        <span className="badge bg-primary text-white fw-normal py-2 px-4 fs-6">Competitive Analysis</span>
                                        <span className="badge bg-primary text-white fw-normal py-2 px-4 fs-6">Persona Development</span>
                                    </div>

                                    {/* COMPETITIVE AUDIT */}
                                    <h6 className="mt-6 fw-semibold">Competitive Audit</h6>
                                    <p className="text-300">
                                        I researched tools writers already use—<strong>Grammarly, Sudowrite, ProWritingAid</strong>—to understand their strengths and limitations. This revealed opportunities for Teller to differentiate through <strong>deeper context awareness and platform integration</strong>.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/teller/competitive-audit.png" alt="Competitive Audit Table" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* PERSONAS */}
                                    <h6 className="mt-6 fw-semibold">Personas Development</h6>
                                    <p className="text-300">
                                        I created two personas representing distinct writing styles: <strong>Planners ("Plotters")</strong> and <strong>Improvisers ("Pantsers")</strong>. Understanding their workflows helped shape features that serve both approaches.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/teller/pantser-plotter.png" alt="Pantser vs Plotter Writing Behaviors" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/teller/personas.png" alt="Maria Torres and Alex Carter Personas" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/teller/user-needs.png" alt="User Needs Statement" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* NEED-TO-FEATURE */}
                                    <h6 className="mt-6 fw-semibold">From Needs to Features</h6>
                                    <p className="text-300">
                                        Using insights from research, I mapped <strong>user needs directly to features</strong>. Each feature addresses a specific pain point and supports clear user tasks—ensuring Teller solves real problems.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/teller/need-to-feature.png" alt="Need-to-Feature Matrix" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* USER JOURNEYS */}
                                    <h6 className="mt-6 fw-semibold">User Journeys</h6>
                                    <p className="text-300">
                                        I visualized complete user journeys for both personas, tracking their actions, pain points, and emotional states. This informed where and how Teller should intervene.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/teller/user-journeys-main.png" alt="Teller User Journeys Overview" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* User Journeys Gallery */}
                                    <div className="d-flex overflow-auto gap-3 my-4 pb-3" style={{ scrollSnapType: 'x mandatory' }}>
                                        <div className="flex-shrink-0" style={{ width: '280px', scrollSnapAlign: 'center' }}>
                                            <img src="/assets/imgs/projects/teller/user-journey-1.png" alt="User Journey 1" className="w-100 rounded-3 border shadow-sm" />
                                        </div>
                                        <div className="flex-shrink-0" style={{ width: '280px', scrollSnapAlign: 'center' }}>
                                            <img src="/assets/imgs/projects/teller/user-journey-2.png" alt="User Journey 2" className="w-100 rounded-3 border shadow-sm" />
                                        </div>
                                        <div className="flex-shrink-0" style={{ width: '280px', scrollSnapAlign: 'center' }}>
                                            <img src="/assets/imgs/projects/teller/user-journey-3.png" alt="User Journey 3" className="w-100 rounded-3 border shadow-sm" />
                                        </div>
                                    </div>

                                    {/* DESIGN */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-3">6. Crafting the Experience</h5>
                                    <p className="text-300">
                                        With research complete, I translated insights into a <strong>cohesive visual and functional design</strong>—one that feels native to writing platforms while introducing powerful AI capabilities.
                                    </p>

                                    {/* INFO ARCHITECTURE */}
                                    <h6 className="mt-6 fw-semibold">Information Architecture</h6>
                                    <p className="text-300">
                                        I structured Teller's navigation to <strong>mirror familiar writing workflows</strong> on platforms like Wattpad and Royal Road. The goal: make AI assistance feel like a natural extension, not a disruption.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/teller/information-architecture.png" alt="Teller Information Architecture" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* DESIGN SYSTEM */}
                                    <h6 className="mt-6 fw-semibold">Design System</h6>
                                    <p className="text-300">
                                        I built a <strong>scalable design system</strong> inspired by tools like Notion and ChatGPT. The system balances <strong>professional polish with minimal distraction</strong>—letting writers stay focused on their stories.
                                    </p>

                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/teller/design-system.png" alt="Teller Design System" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* SCREENS */}
                                    <h6 className="mt-6 fw-semibold">Key Features & Screens</h6>
                                    <p className="text-300">
                                        I designed a <strong>clean, flexible workspace</strong> with an infinite canvas, interactive AI chatbox, and color-coded features. The interface draws from familiar design tools while innovating on AI-assisted writing.
                                    </p>
                                    <p className="text-300">
                                        <strong>Core design principles:</strong> Intuitive navigation • Distraction-free writing • Contextual AI guidance • Visual clarity
                                    </p>

                                    {/* Screens - Fully Visible */}
                                    <div className="row g-4 my-4">
                                        <div className="col-12">
                                            <div className="position-relative">
                                                <img src="/assets/imgs/projects/teller/screen-plotting.png" alt="Plotting Flow Screen" className="w-100 rounded-3 border shadow-sm" />
                                                <div className="position-absolute top-0 start-0 m-3">
                                                    <span className="badge bg-success">Plotting Flow</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="position-relative">
                                                <img src="/assets/imgs/projects/teller/screen-rewriting.png" alt="Re-writing Flow Screen" className="w-100 rounded-3 border shadow-sm" />
                                                <div className="position-absolute top-0 start-0 m-3">
                                                    <span className="badge bg-warning">Re-writing Flow</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="position-relative">
                                                <img src="/assets/imgs/projects/teller/screen-brainstorming.png" alt="Brainstorming Flow Screen" className="w-100 rounded-3 border shadow-sm" />
                                                <div className="position-absolute top-0 start-0 m-3">
                                                    <span className="badge bg-info">Brainstorming Flow</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* REFLECTION */}
                                    <div className="mt-8 p-4 bg-dark text-white rounded-3">
                                        <h6 className="fw-semibold mb-3" style={{ color: 'white' }}>💡 Key Takeaways</h6>
                                        <ul className="mb-3" style={{ color: 'white' }}>
                                            <li className="mb-3">
                                                <strong style={{ color: 'white' }}>User research drives differentiation:</strong> The competitive audit revealed that while tools like Grammarly focus on grammar and ProWritingAid on style, there's a gap for <em>narrative-focused AI assistance</em>. Understanding this white space shaped Teller's unique value proposition.
                                            </li>
                                            <li className="mb-3">
                                                <strong style={{ color: 'white' }}>Planners and improvisers need different support:</strong> Discovering the Plotter vs. Pantser distinction was crucial. Rather than forcing one workflow, Teller adapts—offering structure for planners and flexibility for improvisers. This insight came from deep persona development, not assumptions.
                                            </li>
                                            <li className="mb-3">
                                                <strong style={{ color: 'white' }}>Integration beats disruption:</strong> Writers already have established workflows on platforms like Wattpad and Royal Road. Teller succeeds by <em>enhancing</em> their existing experience, not replacing it. Familiarity reduces friction and increases adoption.
                                            </li>
                                            <li className="mb-0">
                                                <strong style={{ color: 'white' }}>AI needs context to truly help:</strong> Generic AI tools miss the nuance of storytelling. By mapping user journeys and understanding <em>when</em> writers struggle (plot consistency, pacing, character development), Teller can intervene at the right moments with the right guidance.
                                            </li>
                                        </ul>
                                        <hr className="border-secondary opacity-25 my-3" />
                                        <p className="mb-0 small opacity-75" style={{ color: 'rgba(255,255,255,0.75)' }}>
                                            <strong style={{ color: 'white' }}>Next steps:</strong> User testing with real writers from Wattpad and Royal Road to validate feature priorities and refine the AI interaction model.
                                        </p>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-6 text-center">
                                        <Link href="https://www.figma.com/proto/rBnrusq6jGdPM7fiNS4y8H/Teller%3A-Writting-API?node-id=243-20136&p=f&t=tzbvNxZIUuJCffH2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=243%3A20136&show-proto-sidebar=1" target="_blank" className="btn btn-gradient me-2 mb-2">
                                            View Live Prototype
                                            <i className="ri-external-link-line ms-2" />
                                        </Link>
                                        <Link href="/#contact" className="btn btn-outline-dark mb-2">
                                            Let's Discuss This Project
                                            <i className="ri-arrow-right-line ms-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}
