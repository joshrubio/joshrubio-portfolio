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
                                            Get inspired, write more, inspire others. A cross-platform writing experience that allows writers to explore ideas while writing.
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
                                    <h5 className="fs-5 fw-medium">1. Overview</h5>
                                    <p className="text-300">
                                        <strong>Bridging the gap between creativity and structure.</strong><br />
                                        Teller is a speculative case study designed to enhance the writing experience across digital platforms. As Generative AI transforms how we create, I identified a growing need for an all-in-one solution that integrates seamlessly into existing writing communities.
                                    </p>
                                    <p className="text-300">
                                        Teller acts as an advanced, AI-powered text processor that empowers writers to dive deep into their craft without the friction of switching between multiple tools. It helps communities leverage their subscription plans by offering professional-grade storytelling tools directly within their favorite platforms.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-5">2. The Challenge</h5>
                                    <p className="text-300">
                                        <strong>"What’s wrong with the current writing experience?"</strong><br />
                                        Writing communities like Wattpad, Royal Road, and WebNovel are overflowing with talent, yet the tools available to them are often underdeveloped.
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Fragmented Workflow: <span className="text-300 fw-medium">Writers are forced to juggle multiple apps for plotting, editing, and writing, disrupting their creative flow.</span></p></li>
                                        <li><p className="text-dark fw-bold">Limited Tooling: <span className="text-300 fw-medium">Traditional editors focus on grammar but ignore the soul of storytelling—pacing, character arcs, and narrative structure.</span></p></li>
                                        <li><p className="text-dark fw-bold">Insufficient Value: <span className="text-300 fw-medium">Existing subscription plans often lack comprehensive features for manuscript management and deep feedback.</span></p></li>
                                    </ul>

                                    {/* Challenge Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Visual representation of the "Fragmented Workflow" or pain points</p>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">3. The Solution</h5>
                                    <p className="text-300">
                                        <strong>An AI-powered writing companion.</strong><br />
                                        Teller goes beyond traditional editing. By harnessing Generative AI, it provides context-aware suggestions that help writers refine their stories in real-time.
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Smart Feedback: <span className="text-300 fw-medium">Intelligent analysis of plot structure, pacing, and character development.</span></p></li>
                                        <li><p className="text-dark fw-bold">Unified Workspace: <span className="text-300 fw-medium">A seamless environment that handles everything from brainstorming to final polish.</span></p></li>
                                        <li><p className="text-dark fw-bold">Visual Plotting: <span className="text-300 fw-medium">Tools to visualize story arcs and ensure narrative consistency.</span></p></li>
                                    </ul>

                                    {/* Solution Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Screenshot of the AI feedback feature or "Smart Suggestions"</p>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">4. The Process</h5>

                                    <h6 className="mt-4">Phase 1: Research & Discovery</h6>
                                    <p className="text-300">
                                        I started with a broad goal: <em>improve the writing experience.</em> To narrow this down, I conducted a <strong>UX Audit</strong> of major platforms and a <strong>Competitive Audit</strong> of tools like Grammarly and Sudowrite.
                                    </p>
                                    <p className="text-300">
                                        <strong>Key Insights:</strong><br />
                                        Competitors excel at specific tasks (grammar vs. creative generation) but lack a holistic approach. There is a clear gap for a tool that integrates storytelling support directly into community platforms.
                                    </p>

                                    {/* Research Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Research artifacts - Competitive Matrix or User Journey Map</p>
                                    </div>

                                    <h6 className="mt-4">Phase 2: Ideation & Personas</h6>
                                    <p className="text-300">
                                        Based on the research, I developed two primary personas:
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Maria Torres (Plot-Driven Writer): <span className="text-300 fw-medium">Needs structure and consistency checks.</span></p></li>
                                        <li><p className="text-dark fw-bold">Alex Cartes (Aspiring Storyteller): <span className="text-300 fw-medium">Needs inspiration and guidance.</span></p></li>
                                    </ul>

                                    {/* Personas Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Persona cards for Maria and Alex</p>
                                    </div>

                                    <h6 className="mt-4">Phase 3: Design & Prototyping</h6>
                                    <p className="text-300">
                                        <strong>Information Architecture:</strong> I structured the navigation to mirror familiar patterns found in writing communities, ensuring a low learning curve.
                                    </p>
                                    <p className="text-300">
                                        <strong>Visual Design:</strong> The interface was designed to be clean and distraction-free. Drawing inspiration from tools like Notion and ChatGPT, I created an "infinite canvas" feel for flexible structuring and a color-coded system for easy feature identification.
                                    </p>

                                    {/* Design Image Placeholders */}
                                    <div className="row my-4">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <div className="bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '250px', border: '2px dashed #ccc' }}>
                                                <p className="text-muted text-center p-2">IMAGE: Wireframes</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '250px', border: '2px dashed #ccc' }}>
                                                <p className="text-muted text-center p-2">IMAGE: High-fidelity UI</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">5. Outcome & Future</h5>
                                    <p className="text-300">
                                        <strong>Metrics for Success:</strong>
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Differentiation: <span className="text-300 fw-medium">Successfully identified unique gaps (storytelling-specific suggestions) not covered by competitors.</span></p></li>
                                        <li><p className="text-dark fw-bold">Usability: <span className="text-300 fw-medium">Aimed for a 4/5 usability score, ensuring the tool feels intuitive to existing community members.</span></p></li>
                                        <li><p className="text-dark fw-bold">Integration: <span className="text-300 fw-medium">Designed to fit seamlessly into ecosystems like Wattpad.</span></p></li>
                                    </ul>

                                    {/* Final Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '400px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Final polished mockup of the Teller dashboard</p>
                                    </div>

                                    <div className="mt-5">
                                        <Link href="https://www.figma.com/proto/rBnrusq6jGdPM7fiNS4y8H/Teller%3A-Writting-API?node-id=243-20136&p=f&t=tzbvNxZIUuJCffH2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=243%3A20136&show-proto-sidebar=1" target="_blank" className="btn btn-gradient me-2">
                                            View Live Prototype
                                            <i className="ri-external-link-line ms-2" />
                                        </Link>
                                        <Link href="/#contact" className="btn btn-outline-secondary">
                                            Discuss This Project
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
