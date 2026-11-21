import {
    FeatureList,
    Paragraph,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    Section,
} from "@/components/case-study"

export const metadata = {
    title: "The Sower Store - MERN Ecommerce Platform | Josh D. Rubio",
    description: "A production-ready, full-stack ecommerce platform built with Next.js, MongoDB, Stripe, and modern web technologies.",
}

export default function TheSowerStore() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/the-sower-store" }}
                title="🛍️ The Sower - Ecommerce Platform"
                summary="A production-ready, full-stack ecommerce platform built with modern web technologies. This project demonstrates advanced patterns in e-commerce development, including inventory management, payment processing, and order lifecycle management."
                meta={[
                    { label: "Type", value: "Full-Stack E-commerce" },
                    { label: "Stack", value: "MERN + Next.js 15" },
                    { label: "Status", value: "Production Ready" },
                    { label: "Repository", value: "GitHub" },
                ]}
                hero={{ src: "/assets/imgs/projects/the-sower-store/thumbnail.webp", alt: "The Sower Store" }}
            />

            <ProjectBody>
                <Section title="Overview">
                    <Paragraph>The Sower is a comprehensive ecommerce platform that showcases modern web development practices. Built with Next.js 15 and TypeScript, it features a complete shopping experience from product browsing to checkout, with robust inventory management and secure payment processing through Stripe.</Paragraph>
                </Section>

                <Section title="Tech Stack">
                    <FeatureList
                        items={[
                            { title: "Frontend", text: "Next.js 15, TypeScript, Tailwind CSS v4, Shadcn/ui, Zustand for state management" },
                            { title: "Backend", text: "Next.js API Routes (serverless), MongoDB with Mongoose ODM" },
                            { title: "Payment & Auth", text: "Stripe for payments, Clerk for authentication" },
                            { title: "Email", text: "Resend for transactional emails" },
                        ]}
                    />
                </Section>

                <Section title="Key Features">
                    <FeatureList
                        items={[
                            { title: "E-commerce Core", text: "Dynamic product catalog with Stripe integration, real-time cart management, and secure checkout flow" },
                            { title: "Inventory Management", text: "Real-time stock tracking with atomic operations, race condition protection, and automatic rollback on cancellations" },
                            { title: "Security", text: "Clerk authentication, API protection, comprehensive data validation, and environment security" },
                            { title: "Communication", text: "Automated order confirmations, React-based email templates, and real-time order notifications" },
                            { title: "Admin Dashboard", text: "Comprehensive inventory management interface for store administrators" },
                        ]}
                    />
                </Section>

                <Section title="Technical Highlights">
                    <FeatureList
                        items={[
                            { title: "Atomic Inventory Operations", text: "Prevents overselling with race condition protection using MongoDB transactions" },
                            { title: "Type Safety", text: "Full TypeScript implementation across frontend and backend" },
                            { title: "Modern UI", text: "Accessible component library with Shadcn/ui and Tailwind CSS v4" },
                            { title: "State Management", text: "Lightweight and performant state handling with Zustand" },
                        ]}
                    />
                </Section>

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/the-sower-store", icon: "ri-github-fill" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
