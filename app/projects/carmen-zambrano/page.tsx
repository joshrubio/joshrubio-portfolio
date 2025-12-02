import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "Carmen Zambrano - Journalist Portfolio | Josh D. Rubio",
    description: "A professional WordPress portfolio designed for a veteran journalist with over 30 years of experience. Web Design & Development case study.",
}

export default function CarmenZambrano() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="https://carmenzambrano.nl/" target="_blank" className="btn btn-gradient d-inline-block text-uppercase">
                                            Visit Website
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            Carmen Zambrano Portfolio
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            Journalism that connects and inspires. A digital home for a veteran journalist.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Role</p>
                                        <h6>Web Designer & Dev</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Duration</p>
                                        <h6>4 Weeks</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Tools</p>
                                        <h6>WordPress + Elementor</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>Portfolio Website</h6>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="col-12 mb-5">
                                    <img src="/assets/imgs/work/img-carmen.png" alt="Carmen Zambrano Website Hero" className="w-100 rounded-3" />
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">1. Overview</h5>
                                    <p className="text-300">
                                        <strong>A digital home for a veteran journalist.</strong><br />
                                        Carmen Zambrano is a Social Communicator with over 30 years of experience in press, governmental, and corporate journalism. She needed a professional online presence to showcase her extensive portfolio, which spans radio, television, and education.
                                    </p>
                                    <p className="text-300">
                                        I designed and developed a custom WordPress website that serves as a central hub for her work, articles, and professional journey. The site is built to be elegant, easy to navigate, and content-focused, allowing her stories to take center stage.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-5">2. My Contributions</h5>

                                    <h6 className="mt-4">Information Architecture</h6>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Structure: <span className="text-300 fw-medium">Organized decades of work into clear, accessible categories (About, Portfolio, Blog, Contact).</span></p></li>
                                        <li><p className="text-dark fw-bold">Navigation: <span className="text-300 fw-medium">Designed an intuitive navigation system that guides visitors through her diverse career path.</span></p></li>
                                    </ul>

                                    <h6 className="mt-4">Custom Design & Development</h6>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Visual Identity: <span className="text-300 fw-medium">Created a clean, professional aesthetic that reflects her authority and experience in the field.</span></p></li>
                                        <li><p className="text-dark fw-bold">CMS Implementation: <span className="text-300 fw-medium">Built on <strong>WordPress</strong> using <strong>Elementor</strong> to allow for easy content updates and management by the client.</span></p></li>
                                        <li><p className="text-dark fw-bold">Responsiveness: <span className="text-300 fw-medium">Ensured a seamless reading experience across all devices, from desktops to mobile phones.</span></p></li>
                                    </ul>

                                    <h6 className="mt-4">Content Strategy</h6>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Storytelling: <span className="text-300 fw-medium">Structured the "About Me" and "Portfolio" sections to tell a cohesive story of her professional evolution.</span></p></li>
                                    </ul>

                                    {/* Contributions Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '300px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Screenshots of the Portfolio and Blog sections</p>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">3. Impact</h5>
                                    <p className="text-300">
                                        <strong>Connecting stories with the world.</strong><br />
                                        The new website provides Carmen with a professional platform to share her voice and connect with a global audience.
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Professionalism: <span className="text-300 fw-medium">Establishes a strong digital brand for a senior journalist.</span></p></li>
                                        <li><p className="text-dark fw-bold">Accessibility: <span className="text-300 fw-medium">Makes her extensive archive of work easily accessible to potential clients and readers.</span></p></li>
                                        <li><p className="text-dark fw-bold">Autonomy: <span className="text-300 fw-medium">Empowers her to manage and update her own content without technical dependency.</span></p></li>
                                    </ul>

                                    {/* Final Image Placeholder */}
                                    <div className="my-4 bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: '400px', border: '2px dashed #ccc' }}>
                                        <p className="text-muted">IMAGE: Final polished mockup of the website on mobile and desktop</p>
                                    </div>

                                    <div className="mt-5">
                                        <Link href="https://carmenzambrano.nl/" target="_blank" className="btn btn-gradient me-2">
                                            Visit Live Site
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
