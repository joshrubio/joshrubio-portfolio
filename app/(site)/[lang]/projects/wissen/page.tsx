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
    title: "Wissen - E-learning Platform | Josh D. Rubio",
    description: "Modern e-learning platform with Stripe integration, offering project-based coding courses and Pro subscription plans.",
}

export default function Wissen() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/Wissen" }}
                title="Wissen - E-learning Platform"
                summary="A modern e-learning platform that offers project-based coding courses. Users can browse and purchase individual courses or subscribe to Pro plans for unlimited access with secure authentication and payment processing."
                meta={[
                    { label: "Type", value: "E-learning Platform" },
                    { label: "Stack", value: "Next.js 15 + Convex" },
                    { label: "Features", value: "Courses + Subscriptions" },
                    { label: "Repository", value: "GitHub" },
                ]}
                hero={{ src: "/assets/imgs/projects/wissen/thumbnail.webp", alt: "Wissen Platform" }}
            />

            <ProjectBody>
                <Section title="Overview">
                    <Paragraph>Wissen is a comprehensive e-learning platform designed to provide high-quality, project-based coding education. The platform features a dual monetization model: users can purchase individual courses or subscribe to Pro plans for unlimited access, exclusive community features, and live sessions.</Paragraph>
                </Section>

                <Section title="Tech Stack">
                    <FeatureList
                        items={[
                            { title: "Frontend", text: "Next.js 15, React 19, TypeScript, Tailwind CSS, Radix UI" },
                            { title: "Backend", text: "Convex (serverless backend-as-a-service)" },
                            { title: "Authentication", text: "Clerk for secure user management" },
                            { title: "Payments", text: "Stripe for one-time purchases and subscriptions" },
                            { title: "Email", text: "Resend for transactional emails" },
                            { title: "Dev Tools", text: "ESLint, Turbopack for fast development" },
                        ]}
                    />
                </Section>

                <Section title="Key Features">
                    <FeatureList
                        items={[
                            { title: "Course Marketplace", text: "Browse and purchase individual coding courses with detailed pricing and descriptions" },
                            { title: "Pro Subscription Plans", text: "Monthly and yearly subscription options with unlimited course access" },
                            { title: "Exclusive Benefits", text: "Pro members get community features and live sessions" },
                            { title: "User Authentication", text: "Secure login/signup with Clerk, profile management, and purchase history tracking" },
                            { title: "Payment Integration", text: "Stripe checkout for one-time purchases and subscription management with webhook handling" },
                            { title: "Email Notifications", text: "Purchase confirmations, subscription updates, and Pro plan activation emails" },
                        ]}
                    />
                </Section>

                <Section title="Technical Highlights">
                    <FeatureList
                        items={[
                            { title: "Serverless Architecture", text: "Built on Convex for scalable, real-time backend operations" },
                            { title: "Modern React", text: "Leverages React 19 features with Next.js 15 App Router" },
                            { title: "Subscription Management", text: "Complete Stripe Billing integration with webhook event handling" },
                            { title: "Accessible UI", text: "Built with Radix UI primitives for accessibility-first components" },
                        ]}
                    />
                </Section>

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/Wissen", icon: "ri-github-fill" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
