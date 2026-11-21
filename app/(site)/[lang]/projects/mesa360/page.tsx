import {
    FeatureList,
    Figure,
    FigureGrid,
    Paragraph,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    Section,
    SubHeading,
} from "@/components/case-study"

export const metadata = {
    title: "Mesa360 - Restaurant POS System | Josh D. Rubio",
    description: "A comprehensive Point of Sale system designed to streamline restaurant management. UX/UI Design case study.",
}

export default function Mesa360() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "View Figma Design", href: "https://www.figma.com/design/NTqXSUgYyafYYoxja0gMj3/Mesa-360?node-id=0-1&t=mXgNbTJfZxJNoDIS-1" }}
                title="Mesa360 - POS System"
                summary="Streamlining restaurant operations with a 360-degree management solution. From inventory to staff management, Mesa360 covers it all."
                meta={[
                    { label: "Role", value: "UX/UI Designer" },
                    { label: "Team", value: "Multidisciplinary" },
                    { label: "Tools", value: "Figma" },
                    { label: "Type", value: "Case Study" },
                ]}
                hero={{ src: "/assets/imgs/projects/mesa360/thumbnail.webp", alt: "Mesa360 Hero" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph><strong>A unified platform for modern restaurants.</strong><br /> Mesa360 is a Point of Sale (POS) system designed to address the complex needs of restaurant management. Developed by a multidisciplinary team, this project aims to simplify daily operations, from table management to inventory tracking, providing owners and staff with a seamless experience.</Paragraph>
                </Section>

                <Section title="2. The Challenge">
                    <Paragraph><strong>"Chaos in the kitchen, confusion at the front desk."</strong><br /> Restaurants often struggle with fragmented systems—one for reservations, another for inventory, and yet another for staff scheduling. This leads to inefficiencies, errors, and a poor customer experience.</Paragraph>
                    <FeatureList
                        items={[
                            { title: "Operational Inefficiency", text: "Disconnect between front-of-house and back-of-house operations." },
                            { title: "Inventory Loss", text: "Lack of real-time tracking leads to waste and stockouts." },
                            { title: "Staff Coordination", text: "Difficulty in managing shifts and performance tracking." },
                        ]}
                    />
                </Section>

                <Section title="3. The Solution">
                    <Paragraph><strong>Everything in one place.</strong><br /> Mesa360 integrates all essential restaurant functions into a single, intuitive interface.</Paragraph>
                    <FeatureList
                        items={[
                            { title: "Real-time Dashboard", text: "Instant overview of sales, active tables, and staff status." },
                            { title: "Smart Inventory", text: "Automated tracking and low-stock alerts." },
                            { title: "Staff Management", text: "Easy scheduling, role assignment, and performance metrics." },
                        ]}
                    />
                    <Figure src="/assets/imgs/projects/mesa360/dashboard.webp" alt="Mesa360 Dashboard - Sales Overview" caption="Real-time Sales & Operations Dashboard" />
                    <Figure src="/assets/imgs/projects/mesa360/design-system.webp" alt="Design System" caption="Mesa360 Design System" />
                </Section>

                <Section title="4. Key Features">
                    <SubHeading>Login & Security</SubHeading>
                    <Paragraph>Secure access for different roles (Admin, Manager, Staff) ensures data privacy and appropriate access control.</Paragraph>
                    <Figure src="/assets/imgs/projects/mesa360/login.webp" alt="Login Screen" />
                    <SubHeading>Table Management</SubHeading>
                    <Paragraph>Visual floor plan editor and real-time table status (Occupied, Reserved, Free) help hostesses manage seating efficiently.</Paragraph>
                    <Figure src="/assets/imgs/projects/mesa360/tables.webp" alt="Table Management" />
                    <SubHeading>Inventory Control</SubHeading>
                    <Paragraph>Detailed view of stock levels, supplier management, and automated ordering suggestions.</Paragraph>
                    <Figure src="/assets/imgs/projects/mesa360/inventory.webp" alt="Inventory Management" />
                    <SubHeading>Staff & Profile</SubHeading>
                    <Paragraph>Comprehensive profiles for staff members, including shift history and performance stats.</Paragraph>
                    <FigureGrid
                        images={[
                            { src: "/assets/imgs/projects/mesa360/staff-management.webp", alt: "Staff Management" },
                            { src: "/assets/imgs/projects/mesa360/profile.webp", alt: "User Profile" },
                        ]}
                    />
                </Section>

                <Section title="5. Outcome">
                    <Paragraph>Mesa360 represents a significant step forward in restaurant management software. The high-fidelity prototype demonstrates a user-centric approach, prioritizing clarity and efficiency in a high-paced environment.</Paragraph>
                </Section>

                <ProjectCTA
                    links={[
                        { label: "View Figma", href: "https://www.figma.com/design/NTqXSUgYyafYYoxja0gMj3/Mesa-360?node-id=0-1&t=mXgNbTJfZxJNoDIS-1", icon: "ri-external-link-line" },
                        { label: "Contact Me", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
