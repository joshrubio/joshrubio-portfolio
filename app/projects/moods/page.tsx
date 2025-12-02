import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "MOODS - Social Music Platform | Josh D. Rubio",
    description: "A vibrant social network designed for music enthusiasts. UX/UI Design case study.",
}

export default function Moods() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="https://www.figma.com/proto/QJmcZgWG7n99XQsa5RCqAc/Moods-Social-Music-APP?node-id=2-2&p=f&t=IuFUCBWylzaeU1YJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1" target="_blank" className="btn btn-gradient d-inline-block text-uppercase">
                                            View Prototype
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            MOODS - Social Music Platform
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            There is a sound for every Mood, Moment, Memorie. The social-media platform for music lovers.
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
                                        <h6>5 Weeks</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Tools</p>
                                        <h6>Figma + Material 3</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>Case Study</h6>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="col-12 mb-5">
                                    <img src="/assets/imgs/work/img-moods.png" alt="MOODS Hero" className="w-100 rounded-3" />
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">1. Overview</h5>
                                    <p className="text-300">
                                        <strong>The social-media platform for music lovers.</strong><br />
                                        MOODS is a vibrant social network designed for music enthusiasts. Imagine Instagram, but driven by music instead of photography. It allows users to listen, share, and re-live the sound of every meaningful memory in a memorable way.
                                    </p>
                                    <p className="text-300">
                                        What started as "BeatBoop," an educational music streaming project, evolved into MOODS—a reimagined platform that refines features to deliver a fresh, engaging experience. This project showcases the journey of pivoting an existing concept into a new, innovative product.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-5">2. The Challenge</h5>
                                    <p className="text-300">
                                        <strong>"Music is social, but our apps are solitary."</strong><br />
                                        Music is a deeply emotional experience, yet most platforms focus on individual listening or traditional streaming.
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Lack of Connection: <span className="text-300 fw-medium">Existing apps fail to provide a dedicated space for music enthusiasts to connect and collaborate.</span></p></li>
                                        <li><p className="text-dark fw-bold">Missed Opportunities: <span className="text-300 fw-medium">While social media allows sharing, it lacks immersive, music-first interactions.</span></p></li>
                                        <li><p className="text-dark fw-bold">The Pivot: <span className="text-300 fw-medium">The original app, BeatBoop, lacked the social integration needed to foster a true community.</span></p></li>
                                    </ul>

                                    {/* Challenge Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Visual representation of the "Solitary Listening" problem vs. Social Music</p>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">3. The Solution</h5>
                                    <p className="text-300">
                                        <strong>Bridging streaming and social connectivity.</strong><br />
                                        MOODS transforms the streaming experience into a social network. It combines the personalization of a music player with the interactivity of social media.
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Expressive Playlists: <span className="text-300 fw-medium">Users express themselves through curated playlists and shared musical tastes.</span></p></li>
                                        <li><p className="text-dark fw-bold">Community Discovery: <span className="text-300 fw-medium">Discover new sounds through friends and community recommendations.</span></p></li>
                                        <li><p className="text-dark fw-bold">Memorable Moments: <span className="text-300 fw-medium">A space to capture and share the "soundtrack" of your life.</span></p></li>
                                    </ul>

                                    {/* Solution Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Screenshot of social features like "Friend's Stories" or Collaborative Playlists</p>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">4. The Process</h5>

                                    <h6 className="mt-4">Phase 1: Research & Strategy</h6>
                                    <p className="text-300">
                                        <strong>Goal:</strong> Validate the effectiveness of social features in a music app.<br />
                                        I conducted a <strong>Competitive Audit</strong> (Spotify, Instagram, TikTok) to understand how social features drive engagement.
                                    </p>
                                    <p className="text-300">
                                        <strong>Key Insight:</strong> While apps like Spotify have some social features, none offer a fully immersive social network experience for music.
                                    </p>

                                    {/* Research Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Competitive Analysis Matrix or Opportunity Map</p>
                                    </div>

                                    <h6 className="mt-4">Phase 2: Ideation & Personas</h6>
                                    <p className="text-300">
                                        To simulate real user needs, I developed personas like <strong>Jaime</strong> and <strong>Taylor</strong>, mapping their journeys to identify opportunities for connection.
                                    </p>
                                    <p className="text-300">
                                        <strong>Prioritization:</strong> Used an "Impact vs. Effort" framework to prioritize features that would drive the most engagement (e.g., collaborative playlists, mood sharing).
                                    </p>

                                    {/* Personas Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Persona cards for Jaime and Taylor</p>
                                    </div>

                                    <h6 className="mt-4">Phase 3: Design & System</h6>
                                    <p className="text-300">
                                        <strong>Design System:</strong> Built on <strong>Google Material 3</strong>, I developed a comprehensive design system tailored for a music-centric platform. Custom components and typography were curated to ensure a seamless, accessible user experience.
                                    </p>
                                    <p className="text-300">
                                        <strong>Wireframing to High-Fidelity:</strong> I started with low-fidelity wireframes to explore layouts, focusing on intuitive navigation. The final high-fidelity designs integrate social features naturally into the music player interface, making them feel like a core part of the experience rather than an add-on.
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
                                                <p className="text-muted text-center p-2">IMAGE: High-Fidelity UI</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">5. Outcome & Takeaways</h5>
                                    <p className="text-300">
                                        <strong>Refining the Pivot.</strong><br />
                                        Working on MOODS was a lesson in strategic product transformation.
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Skill Growth: <span className="text-300 fw-medium">Upscaled design skills and refined Figma management by building a robust design system.</span></p></li>
                                        <li><p className="text-dark fw-bold">Problem Solving: <span className="text-300 fw-medium">Bridged user expectations with new social-driven features while maintaining clarity.</span></p></li>
                                        <li><p className="text-dark fw-bold">Result: <span className="text-300 fw-medium">A cohesive, engaging platform that successfully pivots from a simple player to a social music network.</span></p></li>
                                    </ul>

                                    {/* Final Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '400px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Final polished mockup of the MOODS app on multiple screens</p>
                                    </div>

                                    <div className="mt-5">
                                        <Link href="https://www.figma.com/proto/QJmcZgWG7n99XQsa5RCqAc/Moods-Social-Music-APP?node-id=2-2&p=f&t=IuFUCBWylzaeU1YJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1" target="_blank" className="btn btn-gradient me-2">
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
