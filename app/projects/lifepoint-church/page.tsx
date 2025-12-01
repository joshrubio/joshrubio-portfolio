import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "Lifepoint Church - WordPress Website | Josh D. Rubio",
    description: "A welcoming, content-driven WordPress website designed and developed for Lifepoint Church, focusing on clarity, accessibility, and pastoral communication.",
}

export default function LifepointChurch() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="https://iglesialifepoint.com/" target="_blank" className="btn btn-gradient d-inline-block text-uppercase me-3">
                                            Visit Website
                                        </Link>
                                        <Link href="https://youtu.be/c_OGHS6QcT8" target="_blank" className="btn btn-outline-secondary d-inline-block text-uppercase">
                                            Watch Walkthrough
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            Lifepoint Church Website
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A scalable, content-driven WordPress site designed to establish a welcoming digital presence. Focused on clarity, accessibility, and ease of maintenance for a growing evangelical community in Almería, Spain.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Role</p>
                                        <h6>UX Designer & Dev</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Tech</p>
                                        <h6>WordPress + PHP</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Focus</p>
                                        <h6>Accessibility + UX</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Year</p>
                                        <h6>2024</h6>
                                    </div>
                                </div>
                                <img src="/assets/imgs/projects/lifepoint.png" alt="Lifepoint Church Website Mockup" className="w-100 rounded-4" />
                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Overview</h5>
                                    <p className="text-300">
                                        Lifepoint Church needed a digital home that reflected their identity as a growing community while being easy for non-technical staff to maintain. I designed and developed a custom WordPress solution that prioritizes content hierarchy, ensuring that first-time visitors can quickly find essential information about the vision, mission, and services.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4">My Contributions</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">Information Architecture: <span className="text-300 fw-medium">Organized the site into clear, user-oriented sections (Home, About, Ministries, Contact, Events) and designed a navigation system optimized for newcomers.</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Custom Development: <span className="text-300 fw-medium">Installed and customized the Faith Connect theme with custom PHP and Tailwind adjustments to align with branding. Implemented custom layouts for ministry pages.</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Performance & Accessibility: <span className="text-300 fw-medium">Improved page load times through optimization and adjusted color/contrast ratios for better readability. Ensured mobile-first responsiveness.</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Content Strategy: <span className="text-300 fw-medium">Structured all textual content for clarity and tone. Integrated imagery that reinforces the church’s welcoming identity.</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">DevOps: <span className="text-300 fw-medium">Set up a local Docker environment for development and migrated to a production-ready EC2 instance with optimized server configuration.</span></p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-4">Impact</h5>
                                    <p className="text-300">
                                        The result is a warm, accessible, and easy-to-navigate website that clearly communicates who Lifepoint Church is. It helps newcomers feel confident and welcomed before attending a service. The site is now scalable, maintainable, and built with a structure that allows the team to grow their online presence over time.
                                    </p>

                                    <div className="mt-5">
                                        <Link href="https://iglesialifepoint.com/" target="_blank" className="btn btn-gradient me-2">
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
