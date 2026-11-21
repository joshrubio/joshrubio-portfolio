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
    title: "Thinkboard - MERN Notes Application | Josh D. Rubio",
    description: "A full-stack notes application built with the MERN stack featuring CRUD operations, rate limiting, and responsive design.",
}

export default function Thinkboard() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View on GitHub", href: "https://github.com/joshrubio/thinkboard" }}
                title="Thinkboard - Notes Application"
                summary="A full-stack notes application built with the MERN stack (MongoDB, Express.js, React, Node.js). Thinkboard allows users to create, read, update, and delete notes with a clean and responsive interface."
                meta={[
                    { label: "Type", value: "Notes Application" },
                    { label: "Stack", value: "MERN Stack" },
                    { label: "Features", value: "CRUD + Rate Limiting" },
                    { label: "Repository", value: "GitHub" },
                ]}
                hero={{ src: "/assets/imgs/projects/thinkboard/thumbnail.webp", alt: "Thinkboard Application" }}
            />

            <ProjectBody>
                <Section title="Overview">
                    <Paragraph>Thinkboard is a straightforward yet powerful notes application that demonstrates core full-stack development skills. Built with the classic MERN stack, it provides a seamless note-taking experience with modern UI/UX patterns and production-ready features like rate limiting.</Paragraph>
                </Section>

                <Section title="Tech Stack">
                    <FeatureList
                        items={[
                            { title: "Backend", text: "Node.js with Express.js, MongoDB with Mongoose ODM, Upstash Redis for rate limiting" },
                            { title: "Frontend", text: "React with Vite, React Router for navigation, Axios for API calls" },
                            { title: "Styling", text: "Tailwind CSS and DaisyUI for modern, responsive design" },
                            { title: "UI Enhancements", text: "React Hot Toast for notifications, Lucide React for icons" },
                            { title: "Infrastructure", text: "CORS for cross-origin requests, Dotenv for environment variables" },
                        ]}
                    />
                </Section>

                <Section title="Key Features">
                    <FeatureList
                        items={[
                            { title: "Create Notes", text: "Add new notes with title and content through an intuitive interface" },
                            { title: "View Notes", text: "Display all notes in a grid layout with the most recent first" },
                            { title: "Edit Notes", text: "Update existing notes with a smooth editing experience" },
                            { title: "Delete Notes", text: "Remove notes permanently with confirmation" },
                            { title: "Rate Limiting", text: "Built-in rate limiting using Upstash Redis to prevent abuse" },
                            { title: "Responsive Design", text: "Mobile-friendly UI using Tailwind CSS and DaisyUI" },
                            { title: "Real-time Feedback", text: "Toast notifications for user actions and error handling" },
                        ]}
                    />
                </Section>

                <Section title="Technical Highlights">
                    <FeatureList
                        items={[
                            { title: "RESTful API", text: "Clean API design following REST principles" },
                            { title: "Modern React", text: "Built with Vite for fast development and optimized builds" },
                            { title: "Production Ready", text: "Includes rate limiting and proper error handling" },
                            { title: "Clean Architecture", text: "Separation of concerns with organized project structure" },
                        ]}
                    />
                </Section>

                <ProjectCTA
                    links={[
                        { label: "View Source Code", href: "https://github.com/joshrubio/thinkboard", icon: "ri-github-fill" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
