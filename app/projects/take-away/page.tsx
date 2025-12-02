import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "Take Away - Food Delivery App | Josh D. Rubio",
    description: "A food delivery app developed to meet the needs of both clients and restaurants. UX/UI Design case study.",
}

export default function TakeAway() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="https://take-away-nc23-102.vercel.app/" target="_blank" className="btn btn-gradient d-inline-block text-uppercase">
                                            Visit Live App
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            Take Away - Food Delivery App
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            Hambre? Pidelo para Llevar. A unified platform for food lovers and makers.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Role</p>
                                        <h6>UX/UI Designer</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Duration</p>
                                        <h6>5 Weeks</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Tools</p>
                                        <h6>Figma + ShadCN</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>MVP Case Study</h6>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="col-12 mb-5">
                                    <img src="/assets/imgs/work/img-takeaway.png" alt="Take Away Hero" className="w-100 rounded-3" />
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">1. Overview</h5>
                                    <p className="text-300">
                                        <strong>Beauty and simplicity in food delivery.</strong><br />
                                        Take AWAY is a food delivery app developed to meet the needs of both clients and restaurants. Created during a 5-week sprint with a multidisciplinary team at <strong>No-country</strong>, the goal was to develop a functional MVP that connects users with local food businesses seamlessly.
                                    </p>
                                    <p className="text-300">
                                        Using Agile methodologies, we focused on creating a solution that is both functional and aesthetically pleasing, balancing the needs of two distinct user groups: those ordering food and those selling it.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-5">2. The Challenge</h5>
                                    <p className="text-300">
                                        <strong>Connecting Clients and Restaurants.</strong><br />
                                        The main challenge was to design a dual-sided platform that caters to two different user types within a single app ecosystem, all while adhering to a strict 5-week timeline.
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Dual Personas: <span className="text-300 fw-medium">Designing for both the "Hungry Client" and the "Restaurant Manager."</span></p></li>
                                        <li><p className="text-dark fw-bold">MVP Scope: <span className="text-300 fw-medium">Prioritizing essential features (CRUD, Order Tracking) without overcomplicating the UI.</span></p></li>
                                        <li><p className="text-dark fw-bold">Consistency: <span className="text-300 fw-medium">Ensuring a unified visual language across different user flows.</span></p></li>
                                    </ul>

                                    {/* Challenge Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Visual representation of the dual user flow (Client vs. Restaurant)</p>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">3. Key Features</h5>
                                    <p className="text-300">
                                        <strong>A unified platform for food lovers and makers.</strong>
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Unified Dashboard: <span className="text-300 fw-medium">Whether you are a client or a restaurant, the personalized dashboard lets you search, buy, or administrate your business in one place.</span></p></li>
                                        <li><p className="text-dark fw-bold">Seamless Profiles: <span className="text-300 fw-medium">Users can easily switch between "Client" and "Restaurant" modes if they happen to be both.</span></p></li>
                                        <li><p className="text-dark fw-bold">Order Management: <span className="text-300 fw-medium">Real-time order placement and tracking.</span></p></li>
                                        <li><p className="text-dark fw-bold">Product Lifecycle: <span className="text-300 fw-medium">Complete tools for restaurants to create, organize, and manage their menu items.</span></p></li>
                                    </ul>

                                    {/* Features Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Screenshots of the Dashboard and Order Tracking screens</p>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">4. The Process</h5>

                                    <h6 className="mt-4">Phase 1: Research & Strategy</h6>
                                    <p className="text-300">
                                        <strong>Goal:</strong> Define scope and identify best practices.<br />
                                        I conducted market audits and competitor analysis to understand the landscape.
                                    </p>
                                    <p className="text-300">
                                        <strong>Benchmarking:</strong> Analyzed key features in existing apps to ensure our MVP met market standards.<br />
                                        <strong>Personas:</strong> Developed user personas to guide our "Client" vs. "Restaurant" feature set.
                                    </p>

                                    {/* Research Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Competitive Analysis or Persona Cards</p>
                                    </div>

                                    <h6 className="mt-4">Phase 2: Ideation & Design System</h6>
                                    <p className="text-300">
                                        <strong>Foundation:</strong> We chose <strong>ShadCN</strong> as our design system foundation for its technical feasibility and clean aesthetics. I customized it to create a cohesive visual language for Take Away.
                                    </p>
                                    <p className="text-300">
                                        <strong>CRUD Approach:</strong> We focused on core functionalities (Create, Read, Update, Delete) to ensure a robust MVP.<br />
                                        <strong>Iterative Design:</strong> Continuous feedback loops with developers ensured technical alignment.
                                    </p>

                                    {/* Design System Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Design System components (ShadCN customization)</p>
                                    </div>

                                    <h6 className="mt-4">Phase 3: Design & Validation</h6>
                                    <p className="text-300">
                                        <strong>From Wireframes to High-Fidelity.</strong><br />
                                        I translated research insights into wireframes and then high-fidelity mockups.
                                    </p>
                                    <p className="text-300">
                                        <strong>Focus:</strong> Interaction patterns, accessibility, and usability testing.<br />
                                        <strong>Handoff:</strong> Documented UI components for seamless developer handoff.
                                    </p>

                                    {/* High-Fi Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: High-fidelity mockups of the ordering flow</p>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">5. Outcome & Takeaways</h5>
                                    <p className="text-300">
                                        <strong>The power of Agile teamwork.</strong><br />
                                        This project was a testament to the synergy of a multidisciplinary team.
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Agile Mastery: <span className="text-300 fw-medium">Learned to work effectively in short sprints, prioritizing tasks and adapting to feedback.</span></p></li>
                                        <li><p className="text-dark fw-bold">Collaboration: <span className="text-300 fw-medium">Achieved a level of refinement that is only possible when design and development work closely together.</span></p></li>
                                        <li><p className="text-dark fw-bold">Result: <span className="text-300 fw-medium">A functional, beautiful MVP that solves real user needs.</span></p></li>
                                    </ul>

                                    {/* Final Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '400px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Final polished mockup of the Take Away app</p>
                                    </div>

                                    <div className="mt-5">
                                        <Link href="https://take-away-nc23-102.vercel.app/" target="_blank" className="btn btn-gradient me-2">
                                            Visit Live App
                                            <i className="ri-external-link-line ms-2" />
                                        </Link>
                                        <Link href="https://www.figma.com/proto/44mWZnwtsYV4yTf96Ouvki/Take-Away?node-id=331-976&t=jwuuExZVjwufRwyE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=331%3A976&show-proto-sidebar=1" target="_blank" className="btn btn-outline-secondary">
                                            View Prototype
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
