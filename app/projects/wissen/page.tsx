import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "Wissen - E-learning Platform | Josh D. Rubio",
    description: "Modern e-learning platform with Stripe integration, offering project-based coding courses and Pro subscription plans.",
}

export default function Wissen() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="https://github.com/joshrubio/Wissen" target="_blank" className="btn btn-gradient d-inline-block text-uppercase">
                                            View on GitHub
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            Wissen - E-learning Platform
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A modern e-learning platform that offers project-based coding courses. Users can browse and purchase individual courses or subscribe to Pro plans for unlimited access with secure authentication and payment processing.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>E-learning Platform</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Stack</p>
                                        <h6>Next.js 15 + Convex</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Features</p>
                                        <h6>Courses + Subscriptions</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Repository</p>
                                        <h6>GitHub</h6>
                                    </div>
                                </div>
                                <img src="/assets/imgs/work/img-wissen.png" alt="Wissen Platform" />
                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Overview</h5>
                                    <p className="text-300">
                                        Wissen is a comprehensive e-learning platform designed to provide high-quality, project-based coding education. The platform features a dual monetization model: users can purchase individual courses or subscribe to Pro plans for unlimited access, exclusive community features, and live sessions.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4">Tech Stack</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">Frontend: <span className="text-300 fw-medium">Next.js 15, React 19, TypeScript, Tailwind CSS, Radix UI</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Backend: <span className="text-300 fw-medium">Convex (serverless backend-as-a-service)</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Authentication: <span className="text-300 fw-medium">Clerk for secure user management</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Payments: <span className="text-300 fw-medium">Stripe for one-time purchases and subscriptions</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Email: <span className="text-300 fw-medium">Resend for transactional emails</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Dev Tools: <span className="text-300 fw-medium">ESLint, Turbopack for fast development</span></p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-4">Key Features</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">Course Marketplace: <span className="text-300 fw-medium">Browse and purchase individual coding courses with detailed pricing and descriptions</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Pro Subscription Plans: <span className="text-300 fw-medium">Monthly and yearly subscription options with unlimited course access</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Exclusive Benefits: <span className="text-300 fw-medium">Pro members get community features and live sessions</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">User Authentication: <span className="text-300 fw-medium">Secure login/signup with Clerk, profile management, and purchase history tracking</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Payment Integration: <span className="text-300 fw-medium">Stripe checkout for one-time purchases and subscription management with webhook handling</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Email Notifications: <span className="text-300 fw-medium">Purchase confirmations, subscription updates, and Pro plan activation emails</span></p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-4">Technical Highlights</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">Serverless Architecture: <span className="text-300 fw-medium">Built on Convex for scalable, real-time backend operations</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Modern React: <span className="text-300 fw-medium">Leverages React 19 features with Next.js 15 App Router</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Subscription Management: <span className="text-300 fw-medium">Complete Stripe Billing integration with webhook event handling</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Accessible UI: <span className="text-300 fw-medium">Built with Radix UI primitives for accessibility-first components</span></p>
                                        </li>
                                    </ul>

                                    <div className="mt-5">
                                        <Link href="https://github.com/joshrubio/Wissen" target="_blank" className="btn btn-gradient me-2">
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
