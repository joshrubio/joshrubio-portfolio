import Layout from "@/components/layout/Layout"
import Link from "next/link"
import BentoGallery from "@/components/elements/BentoGallery"

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
                                            Take AWAY
                                        </h3>
                                        <p className="text-300 fs-5 mb-0">
                                            A food delivery app developed to meet the needs of both clients and restaurants combining beauty and simplicity.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">My Role</p>
                                        <h6>UX/UI Design</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Duration</p>
                                        <h6>5 Weeks</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Tools</p>
                                        <h6>Figma + Jira</h6>
                                    </div>
                                    <div className="bg-6 px-5 py-3 rounded-2">
                                        <p className="text-300 mb-0">Type</p>
                                        <h6>MVP / Agile</h6>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="col-12 mb-5">
                                    <img src="/assets/imgs/work/img-takeaway.png" alt="Take Away Hero" className="w-100 rounded-3" />
                                </div>

                                <div className="col-lg-8 mx-lg-auto mt-8">
                                    {/* OVERVIEW */}
                                    <h5 className="fs-5 fw-medium mb-3">Project Overview</h5>
                                    <p className="text-300 fs-6 mb-3">
                                        During 5 weeks, a multidisciplinary team and I joined strengths to develop an MVP for a food delivery app. Using <strong>Agile methodologies</strong>, we came up with <strong>Take Away</strong> as a solution for Restaurants and Clients to connect.
                                    </p>
                                    <p className="text-300">
                                        <strong>The Task:</strong> Develop a functional app that meets the user stories within the strict timeline.
                                    </p>
                                    <p className="text-300">
                                        <strong>The Client:</strong> No-country is a non-profit organization meant to guide IT professionals into the best industry practices while connecting their projects with potential clients. They took the role of stakeholders, assigned us a Team Leader, and evaluated our work at a final committee.
                                    </p>

                                    {/* PROCESS */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-4">My Process</h5>
                                    <div className="row text-center mt-4 mb-5 g-3">
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-dark fs-5">01</div>
                                                <div className="fw-semibold text-dark mt-2">DEFINE</div>
                                                <div className="text-uppercase small mt-1" style={{ color: '#5e5e65' }}>Scope</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-dark fs-5">02</div>
                                                <div className="fw-semibold text-dark mt-2">RESEARCH</div>
                                                <div className="text-uppercase small mt-1" style={{ color: '#5e5e65' }}>Activities</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-dark fs-5">03</div>
                                                <div className="fw-semibold text-dark mt-2">IDEATE</div>
                                                <div className="text-uppercase small mt-1" style={{ color: '#5e5e65' }}>Features</div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className="p-3 rounded-3 border bg-light h-100">
                                                <div className="fw-bold text-dark fs-5">04</div>
                                                <div className="fw-semibold text-dark mt-2">DESIGN</div>
                                                <div className="text-uppercase small mt-1" style={{ color: '#5e5e65' }}>Iterate</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RESEARCH SECTION */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-3">The Research</h5>
                                    <p className="text-300">
                                        During this phase, I conducted market audits with a clear focus on defining the project’s scope and identifying industry best practices. By analyzing competitors and trends, I gained insights that helped shape a strategic foundation for our product. This research-driven approach ensured that our design decisions were informed, user-centered, and aligned with real market demands.
                                    </p>
                                    <p className="text-300">
                                        I gathered data, developed user personas, and benchmarked key features that aligned with our goal: creating an MVP that effectively met our users' needs.
                                    </p>

                                    {/* 1. Research Plan */}
                                    <h6 className="mt-6 fw-semibold">1. Research Plan & Objectives</h6>
                                    <p className="text-300">
                                        <strong>Definition and Research Plan.</strong> The project began with a strategic definition phase to establish a solid knowledge base. The main objective was to discover best practices in food delivery applications by analyzing existing platforms, identifying key functions, and exploring opportunities to integrate innovative features that improve the user experience and foster loyalty.
                                    </p>
                                    <div className="p-4 bg-light rounded-3 mt-4">
                                        <h6 className="fw-semibold mb-3">🎯 Research Goals</h6>
                                        <ul className="text-300 mb-0" style={{ color: '#333' }}>
                                            <li className="mb-2">
                                                <strong style={{ color: '#333' }}>Explore successful features:</strong> Identify the most effective features in current applications to inform the design of our platform.
                                            </li>
                                            <li className="mb-2">
                                                <strong style={{ color: '#333' }}>Identifying innovation opportunities:</strong> Analyzing potential gaps in the market to propose a differentiating approach.
                                            </li>
                                            <li className="mb-0">
                                                <strong style={{ color: '#333' }}>Evaluate usability and retention:</strong> Understand how key features impact the user experience and their decision to remain on the platform.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/take-away/research-plan.png" alt="Research Plan" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* 2. User Personas */}
                                    <h6 className="mt-6 fw-semibold">2. User Personas & User Stories</h6>
                                    <p className="text-300">
                                        <strong>Understanding Our Users.</strong> To deeply understand the needs and pain points of those who will interact with the app, we developed representative profiles based on market research and competitive analysis. Two key profiles were defined that represent the pillars of the platform's ecosystem:
                                    </p>
                                    <p className="text-300">
                                        <strong>Roberto (The University Student):</strong> Represents the end customer. His goal is to find fast, affordable, and varied food options that fit his budget and student lifestyle. His main pain points are high delivery costs and long wait times.
                                    </p>
                                    <div className="p-3 bg-dark text-white rounded-3 my-3">
                                        <p className="mb-0 small"><em>"As a customer, I want to be able to order food from local restaurants and receive fast and convenient deliveries to my home."</em></p>
                                    </div>
                                    <p className="text-300">
                                        <strong>Diego (The Restaurant Owner):</strong> He represents business partners. He seeks to increase his online sales without sacrificing excessive profit margins and to improve his visibility. His biggest frustration is the lack of control over promotions and the high commissions of other platforms.
                                    </p>
                                    <div className="p-3 bg-dark text-white rounded-3 my-3">
                                        <p className="mb-0 small"><em>"As a restaurant, I want to be able to register my business on the platform and manage online orders to expand my customer base."</em></p>
                                    </div>
                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/take-away/personas.png" alt="User Personas" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* 3. Competitive Audit */}
                                    <h6 className="mt-6 fw-semibold">3. Competitive Audit & SWOT Analysis</h6>
                                    <p className="text-300">
                                        I conducted a thorough analysis of the main players in the market (Uber Eats, Rappi, Glovo and Just Eat) evaluating criteria such as ease of search, order tracking, user management and innovation in UI/UX.
                                    </p>
                                    <p className="text-300">
                                        <strong>Key Findings:</strong><br />
                                        Trends included data-driven personalization, high-precision real-time tracking, and robust loyalty programs.
                                    </p>
                                    <p className="text-300">
                                        <strong>SWOT Analysis:</strong><br />
                                        Strengths such as Uber Eats' intuitive interface or Rappi's ecosystem were identified, but also common weaknesses such as overloaded interfaces or a lack of gamification elements.
                                    </p>
                                    <p className="text-300">
                                        <strong>Innovation Opportunities:</strong><br />
                                        We identified areas to differentiate the app by integrating "micro-restaurants", eco-friendly delivery options (carbon offset) and advanced recommendation systems using AI.
                                    </p>
                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/take-away/competitive-audit.png" alt="Competitive Audit and SWOT" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* 4. Benchmarking */}
                                    <h6 className="mt-6 fw-semibold">4. Feature Benchmarking</h6>
                                    <p className="text-300">
                                        To refine the strategy, I conducted a detailed comparative study of the competition's core functionalities. This technical analysis allowed me to identify industry standards and where we could surpass the current offering.
                                    </p>
                                    <ul className="text-300">
                                        <li><strong>Restaurant search:</strong> Advanced filters vs. simple geographic searches.</li>
                                        <li><strong>Ordering process:</strong> Smooth flow and cart editing capabilities.</li>
                                        <li><strong>Payment options:</strong> Variety of methods, including proprietary systems and cash.</li>
                                        <li><strong>Delivery tracking:</strong> From basic tracking to real-time animated maps.</li>
                                        <li><strong>UI/UX Evaluation:</strong> Analysis of visual load, design modernity, and user learning curves.</li>
                                    </ul>
                                    <p className="text-300">
                                        This benchmarking served as a roadmap to decide which functions were "mandatory" and what our added values ​​would be.
                                    </p>
                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/take-away/feature-benchmarking.png" alt="Feature Benchmarking" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* 5. Sitemap */}
                                    <h6 className="mt-6 fw-semibold">5. Site Map & Information Architecture</h6>
                                    <p className="text-300">
                                        To ensure a logical and intuitive navigation flow, I created a comprehensive sitemap. This architectural blueprint helped visualize the app's hierarchy, defining clear paths for both User and Restaurant flows.
                                    </p>
                                    <p className="text-300">
                                        It served as a crucial tool for organizing content, ensuring that every screen was accessible and properly linked within the overall ecosystem, simplifying the complexity of the dual-sided platform.
                                    </p>
                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/take-away/sitemap.png" alt="Sitemap" className="w-100 rounded-3 border shadow-sm" />
                                    </div>


                                    {/* IDEATION SECTION */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-3">The Ideation</h5>
                                    <p className="text-300">
                                        With a clear understanding that our core features needed to align with user needs, we began development using a **CRUD-based approach**. At this stage, iteration and communication were crucial. Continuous feedback loops allowed us to refine our approach, address challenges, and make necessary adjustments in real time.
                                    </p>
                                    <p className="text-300">
                                        By maintaining close collaboration, we ensured that our product evolved in a way that remained both functional and user-centric.
                                    </p>
                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/take-away/ideation-collaboration.png" alt="Team Collaboration and Ideation" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* DESIGN SECTION */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-3">The Design</h5>

                                    {/* Design System */}
                                    <h6 className="mt-6 fw-semibold">Design System</h6>
                                    <p className="text-300">
                                        For our design system, we chose <strong>ShadCN</strong> as our foundation due to its technical feasibility and strong visual aesthetics.
                                    </p>
                                    <p className="text-300">
                                        Building upon this base, I expanded and customized the system to align with our specific needs, crafting a cohesive visual language tailored to our app.
                                    </p>
                                    <div className="col-12 my-4">
                                        <img src="/assets/imgs/projects/take-away/design-system.png" alt="Take Away Design System" className="w-100 rounded-3 border shadow-sm" />
                                    </div>

                                    {/* Design Phase Content */}
                                    <h6 className="mt-6 fw-semibold">Design Phase & Handoff</h6>
                                    <p className="text-300">
                                        During this stage, I translated research insights into wireframes, created high-fidelity mockups, and established a consistent design language to guide development. I focused on interaction patterns, accessibility considerations, and usability testing to validate design decisions.
                                    </p>
                                    <p className="text-300">
                                        I built and maintained the design system, documented UI components for seamless handoff, and provided continuous feedback to developers to guarantee a smooth implementation. Through an iterative approach, we fine-tuned the experience, ensuring the final product met both usability standards and project requirements.
                                    </p>


                                    <h5 className="fs-5 fw-medium mt-8 mb-4">Features</h5>

                                    {/* Feature 1: Dashboard */}
                                    <div className="row g-4 mb-5">
                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-2">Dual Dashboard: Customization by User Role</h6>
                                            <p className="text-300 mb-3">
                                                Client or Restaurant? doesn't matter, you can be both. With Take Away's personalized Dashboard you can search, find, buy or administrate your business in one place.
                                            </p>
                                            <p className="text-300">
                                                I designed two distinct interfaces to meet the specific needs of each player in the ecosystem. The <strong>Customer Dashboard</strong> prioritizes discovery through visual categories and promotions, while the <strong>Restaurant Dashboard</strong> focuses on operational management, displaying performance metrics, order statuses, and real-time review management to optimize decision-making.
                                            </p>
                                            <img src="/assets/imgs/projects/take-away/feature-dashboard.png" alt="Dual Dashboard Design" className="w-100 rounded-3 border shadow-sm mt-3" />
                                        </div>
                                    </div>

                                    {/* Feature 2: Profiles */}
                                    <div className="row g-4 mb-5">
                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-2">User Profiles and Restaurant Storefront</h6>
                                            <p className="text-300 mb-3">
                                                Create, edit and personalice your profile with relevant info, either if you are a client or a restaurant. Happen to be both? No problem, you switch seamlessly between your accounts.
                                            </p>
                                            <p className="text-300">
                                                I developed a profile management system that allows users to securely manage their personal information and login methods. For business partners, the interface allows them to configure their <strong>"virtual storefront,"</strong> including cover images, descriptions, and featured menus. Additionally, I implemented a <strong>"Switch"</strong> feature to enable seamless and quick switching between client and administrator accounts.
                                            </p>
                                            <img src="/assets/imgs/projects/take-away/feature-profiles.png" alt="Profiles and Storefront Design" className="w-100 rounded-3 border shadow-sm mt-3" />
                                        </div>
                                    </div>

                                    {/* Feature 3: Product Lifecycle */}
                                    <div className="row g-4 mb-5">
                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-2">CRUD of Products and Inventory Management</h6>
                                            <p className="text-300 mb-3">
                                                Create, organizce, discover and buy—these are the phases of a product lifecycle across the Restaurant and Client user experience.
                                            </p>
                                            <p className="text-300">
                                                To facilitate the restaurant's autonomy, I designed a complete workflow for creating and editing dishes. The interface uses input chips for quick categorization and dynamic forms for defining prices and descriptions. Confirmation statuses and deletion warnings were included to prevent accidental errors, ensuring smooth and intuitive inventory management.
                                            </p>
                                            <img src="/assets/imgs/projects/take-away/feature-product-lifecycle.png" alt="Product Lifecycle Design" className="w-100 rounded-3 border shadow-sm mt-3" />
                                        </div>
                                    </div>

                                    {/* Feature 4: Order Placement (Combined) */}
                                    <div className="row g-4 mb-5">
                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-2">Order Placement & Management</h6>
                                            <p className="text-300 mb-4">
                                                Make, receive and track your orders state from wherever you are, by clicking into the "orders" button on the tool bar.
                                            </p>

                                            <h6 className="fw-semibold small text-uppercase text-muted mt-4">For Customers: Real-Time Tracking</h6>
                                            <p className="text-300">
                                                The customer experience focuses on transparency in the delivery process. I designed a tracking interface that integrates real-time maps, detailed order information, and direct contact with the delivery driver. Additionally, I incorporated a cancellation flow with qualitative feedback, allowing the system to collect data on reasons for returns for future operational improvements.
                                            </p>
                                            <img src="/assets/imgs/projects/take-away/feature-client-tracking.png" alt="Client Order Tracking" className="w-100 rounded-3 border shadow-sm mt-3 mb-5" />

                                            <h6 className="fw-semibold small text-uppercase text-muted mt-4">For Restaurants: Logistics Control Console</h6>
                                            <p className="text-300">
                                                I optimized the restaurant's workflow with an order console that allows you to change the preparation status (Pending, Accepted, On the Way, Delivered) with a single tap. The UI automatically breaks down taxes, promotions, and subtotals, providing financial and operational clarity for both the kitchen staff and delivery logistics.
                                            </p>
                                            <img src="/assets/imgs/projects/take-away/feature-restaurant-orders.png" alt="Restaurant Order Management" className="w-100 rounded-3 border shadow-sm mt-3" />
                                        </div>
                                    </div>


                                    {/* Feature 5: Payroll */}
                                    <div className="row g-4 mb-5">
                                        <div className="col-12">
                                            <h6 className="fw-semibold mb-2">Checkout and Payment Process</h6>
                                            <p className="text-300 mb-3">
                                                Once your order is placed you can check, add and modify your order, even switch between your payment methods and delivery addresses.
                                            </p>

                                            <h6 className="fw-semibold small text-uppercase text-muted mt-4">Payment Flow and Financial Management</h6>
                                            <p className="text-300">
                                                The checkout process was simplified to reduce cart abandonment. I implemented a multi-selection system for saved addresses and payment methods, allowing for a quick transition from order review to final confirmation. The interface guides the user through each step (add card, new address) while maintaining visual consistency and security for every transaction.
                                            </p>
                                            <img src="/assets/imgs/projects/take-away/feature-payment-flow.png" alt="Payment Flow" className="w-100 rounded-3 border shadow-sm mt-3" />
                                        </div>
                                    </div>

                                    {/* Conclusion */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-4">Outcome & Learnings</h5>
                                    <p className="text-300 mb-4">
                                        In just five weeks, we successfully delivered a functional MVP that addressed the core needs of both restaurants and customers. Working in an Agile environment allowed us to iterate quickly, adapting to technical constraints without sacrificing user experience.
                                    </p>
                                    <p className="text-300">
                                        This project reinforced the importance of a scalable design system and clear communication between design and development. The final product is a robust, dual-sided platform that simplifies food delivery logistics while providing a seamless ordering experience.
                                    </p>

                                    {/* Gallery */}
                                    <h5 className="fs-5 fw-medium mt-8 mb-4">Project Gallery</h5>
                                    <div className="mb-5">
                                        <BentoGallery />
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
