import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "The Sower Store - MERN Ecommerce Platform | Josh D. Rubio",
    description: "A production-ready, full-stack ecommerce platform built with Next.js, MongoDB, Stripe, and modern web technologies.",
}

export default function TheSowerStore() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="https://github.com/joshrubio/the-sower-store" target="_blank" className="btn btn-gradient d-inline-block text-uppercase">
                                            View on GitHub
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            🛍️ The Sower - Ecommerce Platform
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A production-ready, full-stack ecommerce platform built with modern web technologies. This project demonstrates advanced patterns in e-commerce development, including inventory management, payment processing, and order lifecycle management.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>Full-Stack E-commerce</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Stack</p>
                                        <h6>MERN + Next.js 15</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Status</p>
                                        <h6>Production Ready</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Repository</p>
                                        <h6>GitHub</h6>
                                    </div>
                                </div>
                                <img src="/assets/imgs/work/img-thesower.png" alt="The Sower Store" />
                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Overview</h5>
                                    <p className="text-300">
                                        The Sower is a comprehensive ecommerce platform that showcases modern web development practices. Built with Next.js 15 and TypeScript, it features a complete shopping experience from product browsing to checkout, with robust inventory management and secure payment processing through Stripe.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4">Tech Stack</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">Frontend: <span className="text-300 fw-medium">Next.js 15, TypeScript, Tailwind CSS v4, Shadcn/ui, Zustand for state management</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Backend: <span className="text-300 fw-medium">Next.js API Routes (serverless), MongoDB with Mongoose ODM</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Payment & Auth: <span className="text-300 fw-medium">Stripe for payments, Clerk for authentication</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Email: <span className="text-300 fw-medium">Resend for transactional emails</span></p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-4">Key Features</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">E-commerce Core: <span className="text-300 fw-medium">Dynamic product catalog with Stripe integration, real-time cart management, and secure checkout flow</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Inventory Management: <span className="text-300 fw-medium">Real-time stock tracking with atomic operations, race condition protection, and automatic rollback on cancellations</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Security: <span className="text-300 fw-medium">Clerk authentication, API protection, comprehensive data validation, and environment security</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Communication: <span className="text-300 fw-medium">Automated order confirmations, React-based email templates, and real-time order notifications</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Admin Dashboard: <span className="text-300 fw-medium">Comprehensive inventory management interface for store administrators</span></p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-4">Technical Highlights</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">Atomic Inventory Operations: <span className="text-300 fw-medium">Prevents overselling with race condition protection using MongoDB transactions</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Type Safety: <span className="text-300 fw-medium">Full TypeScript implementation across frontend and backend</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Modern UI: <span className="text-300 fw-medium">Accessible component library with Shadcn/ui and Tailwind CSS v4</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">State Management: <span className="text-300 fw-medium">Lightweight and performant state handling with Zustand</span></p>
                                        </li>
                                    </ul>

                                    <div className="mt-5">
                                        <Link href="https://github.com/joshrubio/the-sower-store" target="_blank" className="btn btn-gradient me-2">
                                            View Source Code
                                            <i className="ri-github-fill ms-2" />
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
