import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "Thinkboard - MERN Notes Application | Josh D. Rubio",
    description: "A full-stack notes application built with the MERN stack featuring CRUD operations, rate limiting, and responsive design.",
}

export default function Thinkboard() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="https://github.com/joshrubio/thinkboard" target="_blank" className="btn btn-gradient d-inline-block text-uppercase">
                                            View on GitHub
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            Thinkboard - Notes Application
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A full-stack notes application built with the MERN stack (MongoDB, Express.js, React, Node.js). Thinkboard allows users to create, read, update, and delete notes with a clean and responsive interface.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>Notes Application</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Stack</p>
                                        <h6>MERN Stack</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Features</p>
                                        <h6>CRUD + Rate Limiting</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Repository</p>
                                        <h6>GitHub</h6>
                                    </div>
                                </div>
                                <img src="/assets/imgs/work/img-background.png" alt="Thinkboard Application" />
                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">Overview</h5>
                                    <p className="text-300">
                                        Thinkboard is a straightforward yet powerful notes application that demonstrates core full-stack development skills. Built with the classic MERN stack, it provides a seamless note-taking experience with modern UI/UX patterns and production-ready features like rate limiting.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-4">Tech Stack</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">Backend: <span className="text-300 fw-medium">Node.js with Express.js, MongoDB with Mongoose ODM, Upstash Redis for rate limiting</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Frontend: <span className="text-300 fw-medium">React with Vite, React Router for navigation, Axios for API calls</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Styling: <span className="text-300 fw-medium">Tailwind CSS and DaisyUI for modern, responsive design</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">UI Enhancements: <span className="text-300 fw-medium">React Hot Toast for notifications, Lucide React for icons</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Infrastructure: <span className="text-300 fw-medium">CORS for cross-origin requests, Dotenv for environment variables</span></p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-4">Key Features</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">Create Notes: <span className="text-300 fw-medium">Add new notes with title and content through an intuitive interface</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">View Notes: <span className="text-300 fw-medium">Display all notes in a grid layout with the most recent first</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Edit Notes: <span className="text-300 fw-medium">Update existing notes with a smooth editing experience</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Delete Notes: <span className="text-300 fw-medium">Remove notes permanently with confirmation</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Rate Limiting: <span className="text-300 fw-medium">Built-in rate limiting using Upstash Redis to prevent abuse</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Responsive Design: <span className="text-300 fw-medium">Mobile-friendly UI using Tailwind CSS and DaisyUI</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Real-time Feedback: <span className="text-300 fw-medium">Toast notifications for user actions and error handling</span></p>
                                        </li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-4">Technical Highlights</h5>
                                    <ul>
                                        <li>
                                            <p className="text-dark fw-bold">RESTful API: <span className="text-300 fw-medium">Clean API design following REST principles</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Modern React: <span className="text-300 fw-medium">Built with Vite for fast development and optimized builds</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Production Ready: <span className="text-300 fw-medium">Includes rate limiting and proper error handling</span></p>
                                        </li>
                                        <li>
                                            <p className="text-dark fw-bold">Clean Architecture: <span className="text-300 fw-medium">Separation of concerns with organized project structure</span></p>
                                        </li>
                                    </ul>

                                    <div className="mt-5">
                                        <Link href="https://github.com/joshrubio/thinkboard" target="_blank" className="btn btn-gradient me-2">
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
