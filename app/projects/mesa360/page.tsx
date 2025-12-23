import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "Mesa360 - Restaurant POS System | Josh D. Rubio",
    description: "A comprehensive Point of Sale system designed to streamline restaurant management. UX/UI Design case study.",
}

export default function Mesa360() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work-single section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                                    <div className="text-center">
                                        <Link href="https://www.figma.com/design/NTqXSUgYyafYYoxja0gMj3/Mesa-360?node-id=0-1&t=mXgNbTJfZxJNoDIS-1" target="_blank" className="btn btn-gradient d-inline-block text-uppercase">
                                            View Figma Design
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            Mesa360 - POS System
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            Streamlining restaurant operations with a 360-degree management solution. From inventory to staff management, Mesa360 covers it all.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Role</p>
                                        <h6>UX/UI Designer</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Team</p>
                                        <h6>Multidisciplinary</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Tools</p>
                                        <h6>Figma</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>Case Study</h6>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="col-12 mb-5">
                                    <img src="/assets/imgs/projects/mesa360/hero.jpg" alt="Mesa360 Hero" className="w-100 rounded-3" />
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    <h5 className="fs-5 fw-medium">1. Overview</h5>
                                    <p className="text-300">
                                        <strong>A unified platform for modern restaurants.</strong><br />
                                        Mesa360 is a Point of Sale (POS) system designed to address the complex needs of restaurant management. Developed by a multidisciplinary team, this project aims to simplify daily operations, from table management to inventory tracking, providing owners and staff with a seamless experience.
                                    </p>

                                    <h5 className="fs-5 fw-medium mt-5">2. The Challenge</h5>
                                    <p className="text-300">
                                        <strong>"Chaos in the kitchen, confusion at the front desk."</strong><br />
                                        Restaurants often struggle with fragmented systems—one for reservations, another for inventory, and yet another for staff scheduling. This leads to inefficiencies, errors, and a poor customer experience.
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Operational Inefficiency: <span className="text-300 fw-medium">Disconnect between front-of-house and back-of-house operations.</span></p></li>
                                        <li><p className="text-dark fw-bold">Inventory Loss: <span className="text-300 fw-medium">Lack of real-time tracking leads to waste and stockouts.</span></p></li>
                                        <li><p className="text-dark fw-bold">Staff Coordination: <span className="text-300 fw-medium">Difficulty in managing shifts and performance tracking.</span></p></li>
                                    </ul>

                                    <h5 className="fs-5 fw-medium mt-5">3. The Solution</h5>
                                    <p className="text-300">
                                        <strong>Everything in one place.</strong><br />
                                        Mesa360 integrates all essential restaurant functions into a single, intuitive interface.
                                    </p>
                                    <ul>
                                        <li><p className="text-dark fw-bold">Real-time Dashboard: <span className="text-300 fw-medium">Instant overview of sales, active tables, and staff status.</span></p></li>
                                        <li><p className="text-dark fw-bold">Smart Inventory: <span className="text-300 fw-medium">Automated tracking and low-stock alerts.</span></p></li>
                                        <li><p className="text-dark fw-bold">Staff Management: <span className="text-300 fw-medium">Easy scheduling, role assignment, and performance metrics.</span></p></li>
                                    </ul>

                                    <div className="mb-5 mt-4">
                                        <img src="/assets/imgs/projects/mesa360/dashboard.png" alt="Mesa360 Dashboard - Sales Overview" className="w-100 rounded-3" />
                                        <p className="text-muted text-center mt-2 fs-7">Real-time Sales & Operations Dashboard</p>
                                    </div>

                                    {/* Design System Image */}
                                    <div className="my-4">
                                        <img src="/assets/imgs/projects/mesa360/design-system.png" alt="Design System" className="w-100 rounded-3" />
                                        <p className="text-muted text-center mt-2 fs-7">Mesa360 Design System</p>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">4. Key Features</h5>

                                    <h6 className="mt-4">Login & Security</h6>
                                    <p className="text-300">
                                        Secure access for different roles (Admin, Manager, Staff) ensures data privacy and appropriate access control.
                                    </p>
                                    <div className="mb-4">
                                        <img src="/assets/imgs/projects/mesa360/login.png" alt="Login Screen" className="w-100 rounded-3" />
                                    </div>

                                    <h6 className="mt-4">Table Management</h6>
                                    <p className="text-300">
                                        Visual floor plan editor and real-time table status (Occupied, Reserved, Free) help hostesses manage seating efficiently.
                                    </p>
                                    <div className="mb-4">
                                        <img src="/assets/imgs/projects/mesa360/tables.png" alt="Table Management" className="w-100 rounded-3" />
                                    </div>

                                    <h6 className="mt-4">Inventory Control</h6>
                                    <p className="text-300">
                                        Detailed view of stock levels, supplier management, and automated ordering suggestions.
                                    </p>
                                    <div className="mb-4">
                                        <img src="/assets/imgs/projects/mesa360/inventory.png" alt="Inventory Management" className="w-100 rounded-3" />
                                    </div>

                                    <h6 className="mt-4">Staff & Profile</h6>
                                    <p className="text-300">
                                        Comprehensive profiles for staff members, including shift history and performance stats.
                                    </p>
                                    <div className="row mb-4">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <img src="/assets/imgs/projects/mesa360/staff-management.png" alt="Staff Management" className="w-100 rounded-3" />
                                        </div>
                                        <div className="col-md-6">
                                            <img src="/assets/imgs/projects/mesa360/profile.png" alt="User Profile" className="w-100 rounded-3" />
                                        </div>
                                    </div>

                                    <h5 className="fs-5 fw-medium mt-5">5. Outcome</h5>
                                    <p className="text-300">
                                        Mesa360 represents a significant step forward in restaurant management software. The high-fidelity prototype demonstrates a user-centric approach, prioritizing clarity and efficiency in a high-paced environment.
                                    </p>

                                    <div className="mt-5">
                                        <Link href="https://www.figma.com/design/NTqXSUgYyafYYoxja0gMj3/Mesa-360?node-id=0-1&t=mXgNbTJfZxJNoDIS-1" target="_blank" className="btn btn-gradient me-2">
                                            View Figma
                                            <i className="ri-external-link-line ms-2" />
                                        </Link>
                                        <Link href="/#contact" className="btn btn-outline-secondary">
                                            Contact Me
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
