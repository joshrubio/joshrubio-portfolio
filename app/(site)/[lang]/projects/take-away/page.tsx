import {
    Bento,
    BulletList,
    Callout,
    Column,
    Columns,
    Figure,
    Paragraph,
    ProcessSteps,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    Quote,
    Section,
    SubHeading,
} from "@/components/case-study"


export const metadata = {
    title: "Take Away - Food Delivery App | Josh D. Rubio",
    description: "A food delivery app developed to meet the needs of both clients and restaurants. UX/UI Design case study.",
}

export default function TakeAway() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "Visit Live App", href: "https://take-away-nc23-102.vercel.app/" }}
                title="Take AWAY"
                summary="A food delivery app developed to meet the needs of both clients and restaurants combining beauty and simplicity."
                meta={[
                    { label: "My Role", value: "UX/UI Design" },
                    { label: "Duration", value: "5 Weeks" },
                    { label: "Tools", value: "Figma + Jira" },
                    { label: "Type", value: "MVP / Agile" },
                ]}
                hero={{ src: "/assets/imgs/projects/take-away/thumbnail.webp", alt: "Take Away Hero" }}
            />

            <ProjectBody>
                <Section title="Project Overview">
                    <Paragraph>During 5 weeks, a multidisciplinary team and I joined strengths to develop an MVP for a food delivery app. Using <strong>Agile methodologies</strong>, we came up with <strong>Take Away</strong> as a solution for Restaurants and Clients to connect.</Paragraph>

                    <Paragraph><strong>The Task:</strong> Develop a functional app that meets the user stories within the strict timeline.</Paragraph>

                    <Paragraph><strong>The Client:</strong> No-country is a non-profit organization meant to guide IT professionals into the best industry practices while connecting their projects with potential clients. They took the role of stakeholders, assigned us a Team Leader, and evaluated our work at a final committee.</Paragraph>
                </Section>

                <Section title="My Process">
                    <ProcessSteps
                        steps={[
                            { label: "DEFINE", hint: "Scope" },
                            { label: "RESEARCH", hint: "Activities" },
                            { label: "IDEATE", hint: "Features" },
                            { label: "DESIGN", hint: "Iterate" },
                        ]}
                    />
                </Section>

                <Section title="The Research">
                    <Paragraph>During this phase, I conducted market audits with a clear focus on defining the project’s scope and identifying industry best practices. By analyzing competitors and trends, I gained insights that helped shape a strategic foundation for our product. This research-driven approach ensured that our design decisions were informed, user-centered, and aligned with real market demands.</Paragraph>

                    <Paragraph>I gathered data, developed user personas, and benchmarked key features that aligned with our goal: creating an MVP that effectively met our users' needs.</Paragraph>

                    <SubHeading>1. Research Plan & Objectives</SubHeading>

                    <Paragraph><strong>Definition and Research Plan.</strong> The project began with a strategic definition phase to establish a solid knowledge base. The main objective was to discover best practices in food delivery applications by analyzing existing platforms, identifying key functions, and exploring opportunities to integrate innovative features that improve the user experience and foster loyalty.</Paragraph>

                    <Callout tone="info" title="🎯 Research Goals">
                        <BulletList>
                            <li><strong>Explore successful features:</strong> Identify the most effective features in current applications to inform the design of our platform.</li>
                            <li><strong>Identifying innovation opportunities:</strong> Analyzing potential gaps in the market to propose a differentiating approach.</li>
                            <li><strong>Evaluate usability and retention:</strong> Understand how key features impact the user experience and their decision to remain on the platform.</li>
                        </BulletList>
                    </Callout>

                    <Figure src="/assets/imgs/projects/take-away/research-plan.webp" alt="Research Plan" />

                    <SubHeading>2. User Personas & User Stories</SubHeading>

                    <Paragraph><strong>Understanding Our Users.</strong> To deeply understand the needs and pain points of those who will interact with the app, we developed representative profiles based on market research and competitive analysis. Two key profiles were defined that represent the pillars of the platform's ecosystem:</Paragraph>

                    <Paragraph><strong>Roberto (The University Student):</strong> Represents the end customer. His goal is to find fast, affordable, and varied food options that fit his budget and student lifestyle. His main pain points are high delivery costs and long wait times.</Paragraph>

                    <Quote><em>"As a customer, I want to be able to order food from local restaurants and receive fast and convenient deliveries to my home."</em></Quote>

                    <Paragraph><strong>Diego (The Restaurant Owner):</strong> He represents business partners. He seeks to increase his online sales without sacrificing excessive profit margins and to improve his visibility. His biggest frustration is the lack of control over promotions and the high commissions of other platforms.</Paragraph>

                    <Quote><em>"As a restaurant, I want to be able to register my business on the platform and manage online orders to expand my customer base."</em></Quote>

                    <Figure src="/assets/imgs/projects/take-away/personas.webp" alt="User Personas" />

                    <SubHeading>3. Competitive Audit & SWOT Analysis</SubHeading>

                    <Paragraph>I conducted a thorough analysis of the main players in the market (Uber Eats, Rappi, Glovo and Just Eat) evaluating criteria such as ease of search, order tracking, user management and innovation in UI/UX.</Paragraph>

                    <Paragraph><strong>Key Findings:</strong><br /> Trends included data-driven personalization, high-precision real-time tracking, and robust loyalty programs.</Paragraph>

                    <Paragraph><strong>SWOT Analysis:</strong><br /> Strengths such as Uber Eats' intuitive interface or Rappi's ecosystem were identified, but also common weaknesses such as overloaded interfaces or a lack of gamification elements.</Paragraph>

                    <Paragraph><strong>Innovation Opportunities:</strong><br /> We identified areas to differentiate the app by integrating "micro-restaurants", eco-friendly delivery options (carbon offset) and advanced recommendation systems using AI.</Paragraph>

                    <Figure src="/assets/imgs/projects/take-away/competitive-audit.webp" alt="Competitive Audit and SWOT" />

                    <SubHeading>4. Feature Benchmarking</SubHeading>

                    <Paragraph>To refine the strategy, I conducted a detailed comparative study of the competition's core functionalities. This technical analysis allowed me to identify industry standards and where we could surpass the current offering.</Paragraph>

                    <BulletList>
                        <li><strong>Restaurant search:</strong> Advanced filters vs. simple geographic searches.</li>
                        <li><strong>Ordering process:</strong> Smooth flow and cart editing capabilities.</li>
                        <li><strong>Payment options:</strong> Variety of methods, including proprietary systems and cash.</li>
                        <li><strong>Delivery tracking:</strong> From basic tracking to real-time animated maps.</li>
                        <li><strong>UI/UX Evaluation:</strong> Analysis of visual load, design modernity, and user learning curves.</li>
                    </BulletList>

                    <Paragraph>This benchmarking served as a roadmap to decide which functions were "mandatory" and what our added values ​​would be.</Paragraph>

                    <Figure src="/assets/imgs/projects/take-away/feature-benchmarking.webp" alt="Feature Benchmarking" />

                    <SubHeading>5. Site Map & Information Architecture</SubHeading>

                    <Paragraph>To ensure a logical and intuitive navigation flow, I created a comprehensive sitemap. This architectural blueprint helped visualize the app's hierarchy, defining clear paths for both User and Restaurant flows.</Paragraph>

                    <Paragraph>It served as a crucial tool for organizing content, ensuring that every screen was accessible and properly linked within the overall ecosystem, simplifying the complexity of the dual-sided platform.</Paragraph>

                    <Figure src="/assets/imgs/projects/take-away/sitemap.webp" alt="Sitemap" />
                </Section>

                <Section title="The Ideation">
                    <Paragraph>With a clear understanding that our core features needed to align with user needs, we began development using a **CRUD-based approach**. At this stage, iteration and communication were crucial. Continuous feedback loops allowed us to refine our approach, address challenges, and make necessary adjustments in real time.</Paragraph>

                    <Paragraph>By maintaining close collaboration, we ensured that our product evolved in a way that remained both functional and user-centric.</Paragraph>

                    <Figure src="/assets/imgs/projects/take-away/ideation-collaboration.webp" alt="Team Collaboration and Ideation" />
                </Section>

                <Section title="The Design">
                    <SubHeading>Design System</SubHeading>

                    <Paragraph>For our design system, we chose <strong>ShadCN</strong> as our foundation due to its technical feasibility and strong visual aesthetics.</Paragraph>

                    <Paragraph>Building upon this base, I expanded and customized the system to align with our specific needs, crafting a cohesive visual language tailored to our app.</Paragraph>

                    <Figure src="/assets/imgs/projects/take-away/design-system.webp" alt="Take Away Design System" />

                    <SubHeading>Design Phase & Handoff</SubHeading>

                    <Paragraph>During this stage, I translated research insights into wireframes, created high-fidelity mockups, and established a consistent design language to guide development. I focused on interaction patterns, accessibility considerations, and usability testing to validate design decisions.</Paragraph>

                    <Paragraph>I built and maintained the design system, documented UI components for seamless handoff, and provided continuous feedback to developers to guarantee a smooth implementation. Through an iterative approach, we fine-tuned the experience, ensuring the final product met both usability standards and project requirements.</Paragraph>
                </Section>

                <Section title="Features">
                    <Columns>
                        <Column>
                            <SubHeading>Dual Dashboard: Customization by User Role</SubHeading>

                            <Paragraph>Client or Restaurant? doesn't matter, you can be both. With Take Away's personalized Dashboard you can search, find, buy or administrate your business in one place.</Paragraph>

                            <Paragraph>I designed two distinct interfaces to meet the specific needs of each player in the ecosystem. The <strong>Customer Dashboard</strong> prioritizes discovery through visual categories and promotions, while the <strong>Restaurant Dashboard</strong> focuses on operational management, displaying performance metrics, order statuses, and real-time review management to optimize decision-making.</Paragraph>

                            <Figure src="/assets/imgs/projects/take-away/feature-dashboard.webp" alt="Dual Dashboard Design" />
                        </Column>
                    </Columns>

                    <Columns>
                        <Column>
                            <SubHeading>User Profiles and Restaurant Storefront</SubHeading>

                            <Paragraph>Create, edit and personalice your profile with relevant info, either if you are a client or a restaurant. Happen to be both? No problem, you switch seamlessly between your accounts.</Paragraph>

                            <Paragraph>I developed a profile management system that allows users to securely manage their personal information and login methods. For business partners, the interface allows them to configure their <strong>"virtual storefront,"</strong> including cover images, descriptions, and featured menus. Additionally, I implemented a <strong>"Switch"</strong> feature to enable seamless and quick switching between client and administrator accounts.</Paragraph>

                            <Figure src="/assets/imgs/projects/take-away/feature-profiles.webp" alt="Profiles and Storefront Design" />
                        </Column>
                    </Columns>

                    <Columns>
                        <Column>
                            <SubHeading>CRUD of Products and Inventory Management</SubHeading>

                            <Paragraph>Create, organizce, discover and buy—these are the phases of a product lifecycle across the Restaurant and Client user experience.</Paragraph>

                            <Paragraph>To facilitate the restaurant's autonomy, I designed a complete workflow for creating and editing dishes. The interface uses input chips for quick categorization and dynamic forms for defining prices and descriptions. Confirmation statuses and deletion warnings were included to prevent accidental errors, ensuring smooth and intuitive inventory management.</Paragraph>

                            <Figure src="/assets/imgs/projects/take-away/feature-product-lifecycle.webp" alt="Product Lifecycle Design" />
                        </Column>
                    </Columns>

                    <Columns>
                        <Column>
                            <SubHeading>Order Placement & Management</SubHeading>

                            <Paragraph>Make, receive and track your orders state from wherever you are, by clicking into the "orders" button on the tool bar.</Paragraph>

                            <SubHeading>For Customers: Real-Time Tracking</SubHeading>

                            <Paragraph>The customer experience focuses on transparency in the delivery process. I designed a tracking interface that integrates real-time maps, detailed order information, and direct contact with the delivery driver. Additionally, I incorporated a cancellation flow with qualitative feedback, allowing the system to collect data on reasons for returns for future operational improvements.</Paragraph>

                            <Figure src="/assets/imgs/projects/take-away/feature-client-tracking.webp" alt="Client Order Tracking" />

                            <SubHeading>For Restaurants: Logistics Control Console</SubHeading>

                            <Paragraph>I optimized the restaurant's workflow with an order console that allows you to change the preparation status (Pending, Accepted, On the Way, Delivered) with a single tap. The UI automatically breaks down taxes, promotions, and subtotals, providing financial and operational clarity for both the kitchen staff and delivery logistics.</Paragraph>

                            <Figure src="/assets/imgs/projects/take-away/feature-restaurant-orders.webp" alt="Restaurant Order Management" />
                        </Column>
                    </Columns>

                    <Columns>
                        <Column>
                            <SubHeading>Checkout and Payment Process</SubHeading>

                            <Paragraph>Once your order is placed you can check, add and modify your order, even switch between your payment methods and delivery addresses.</Paragraph>

                            <SubHeading>Payment Flow and Financial Management</SubHeading>

                            <Paragraph>The checkout process was simplified to reduce cart abandonment. I implemented a multi-selection system for saved addresses and payment methods, allowing for a quick transition from order review to final confirmation. The interface guides the user through each step (add card, new address) while maintaining visual consistency and security for every transaction.</Paragraph>

                            <Figure src="/assets/imgs/projects/take-away/feature-payment-flow.webp" alt="Payment Flow" />
                        </Column>
                    </Columns>
                </Section>

                <Section title="Outcome & Learnings">
                    <Paragraph>In just five weeks, we successfully delivered a functional MVP that addressed the core needs of both restaurants and customers. Working in an Agile environment allowed us to iterate quickly, adapting to technical constraints without sacrificing user experience.</Paragraph>

                    <Paragraph>This project reinforced the importance of a scalable design system and clear communication between design and development. The final product is a robust, dual-sided platform that simplifies food delivery logistics while providing a seamless ordering experience.</Paragraph>
                </Section>

                <Section title="Project Gallery">
                    <Bento
                        images={[
                            { src: "/assets/imgs/projects/take-away/gallery-payment-method.webp", alt: "Payment Methods", span: "square" },
                            { src: "/assets/imgs/projects/take-away/gallery-recovery.webp", alt: "Password Recovery", span: "square" },
                            { src: "/assets/imgs/projects/take-away/Carrito-Desktop-1.webp", alt: "Desktop Cart View", span: "wide" },
                            { src: "/assets/imgs/projects/take-away/gallery-create-profile.webp", alt: "Create Profile", span: "tall" },
                            { src: "/assets/imgs/projects/take-away/gallery-welcome.webp", alt: "Welcome Screen", span: "tall" },
                            { src: "/assets/imgs/projects/take-away/Cliente-Onboarding-1.webp", alt: "Client Onboarding", span: "tall" },
                            { src: "/assets/imgs/projects/take-away/Pedidos-En-proceso.webp", alt: "Orders In Process", span: "tall" },
                            { src: "/assets/imgs/projects/take-away/404-Error-1.webp", alt: "404 Error Screen", span: "tall" },
                            { src: "/assets/imgs/projects/take-away/Resumen-de-Pago.webp", alt: "Payment Summary", span: "tall" },
                            { src: "/assets/imgs/projects/take-away/Restaurante-Pedido-En-Entrega.webp", alt: "Restaurant Delivery Status", span: "tall" },
                            { src: "/assets/imgs/projects/take-away/Restaurante-Pedido-En-Entrega-1.webp", alt: "Delivery Detail View", span: "tall" },
                        ]}
                    />
                </Section>

                <ProjectCTA
                    links={[
                        { label: "Visit Live App", href: "https://take-away-nc23-102.vercel.app/", icon: "ri-external-link-line" },
                        { label: "View Prototype", href: "https://www.figma.com/proto/44mWZnwtsYV4yTf96Ouvki/Take-Away?node-id=331-976&t=jwuuExZVjwufRwyE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=331%3A976&show-proto-sidebar=1", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
