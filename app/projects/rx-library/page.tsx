import {
    Callout,
    FeatureList,
    Figure,
    FigureGrid,
    Paragraph,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    Section,
    StatTiles,
    SubHeading,
    Takeaways,
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "RX Library - White-label Telehealth Platform | Josh D. Rubio",
    description: "A multi-tenant, white-label telehealth platform built on FHIR: patient app, operator console and clinical portal in a single Next.js application. Frontend and business logic.",
}

const IMG = "/assets/imgs/projects/rx-library"

export default function RxLibrary() {
    return (
        <ProjectPage>
            <ProjectHeader
                title="RX Library - Telehealth Platform"
                summary="A white-label telehealth platform: operators configure a tenant, connect a provider network and a pharmacy, and ship a brand under their own domain. Think Shopify for telehealth."
                meta={[
                    { label: "Role", value: "Frontend & Business Logic" },
                    { label: "Client", value: "Proventheory" },
                    { label: "Stack", value: "Next.js, TypeScript, FHIR" },
                    { label: "Type", value: "Multi-tenant SaaS" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "RX Library platform" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>One platform, many telehealth brands.</strong> RX Library is the platform; <strong>RxLibrary</strong> is the first tenant built on it and the reference implementation. Future tenants inherit the same infrastructure with their own branding, catalog and provider-network choice.
                    </Paragraph>
                    <Paragraph>
                        Patients sign up, complete a medical intake, get matched with a licensed provider, receive a prescription and track fulfillment in one place. Providers work through a clinical queue, and operators manage their catalog and order pipeline from an admin dashboard.
                    </Paragraph>
                </Section>

                <Callout tone="danger" title="⚠️ The Challenge">
                    <p className="text-300 mb-2">
                        Launching a telehealth brand normally means stitching together a provider network, e-prescribing, a pharmacy, payments and a patient portal, and rebuilding all of it for the next brand. The constraints make it harder:
                    </p>
                    <ul className="text-300 mb-0">
                        <li><strong>Regulated, health-adjacent data</strong> that must be isolated per tenant and auditable</li>
                        <li><strong>Many external vendors</strong> that are slow, expensive or unavailable during development</li>
                        <li><strong>Three audiences</strong> (patients, providers, operators) with very different needs</li>
                    </ul>
                </Callout>

                <Callout tone="success" title="✓ The Solution">
                    <p className="text-300 mb-0">
                        <strong>A single FHIR-native codebase where a tenant is configuration, not code.</strong> One Next.js application serves every role, every external integration runs mocked until a key is added, and a new brand is a database row instead of a deploy.
                    </p>
                </Callout>

                <Section title="2. My Contribution">
                    <Paragraph>
                        A large team project developed for the agency Proventheory. I took part in building the <strong>frontend</strong> and was closely involved in the <strong>business logic</strong> behind the patient, provider and operator flows. The backend (Medplum bots, integration adapters and infrastructure) was built by Aditya Suri.
                    </Paragraph>
                </Section>

                <Section title="3. One App, Several Experiences">
                    <Paragraph>
                        A single Next.js application (57 routes: pages and API routes) serves every user. There is one login, and the role is detected from the user&apos;s Medplum membership, so each person lands in the right experience. Users with two roles get a context switch in the sidebar.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Patient", text: "Resumable intake, provider matching, prescriptions, billing, chat and a live order tracker." },
                            { title: "Tenant admin", text: "Catalog and pricing, branding, and the order pipeline with stalled and needs-review views." },
                            { title: "Provider", text: "Clinical queue, encounters, prescribing, and a read-only view of what the patient sees." },
                            { title: "Platform owner", text: "A super-admin console for managing tenants across the platform, on the roadmap." },
                        ]}
                    />
                </Section>

                <Figure src={`${IMG}/patient.png`} alt="Patient experience" caption="Patient experience: chat with the care team and order tracking" />
                <FigureGrid
                    images={[
                        { src: `${IMG}/admin-dashboard.png`, alt: "Operator dashboard", caption: "Operator dashboard: order pipeline health" },
                        { src: `${IMG}/provider-portal.png`, alt: "Provider portal", caption: "Clinical portal: the provider queue" },
                    ]}
                />

                <Section title="4. Architecture">
                    <Paragraph>
                        The platform is a Turborepo monorepo organised in three layers. Every record lives in a single <strong>FHIR R4</strong> backend, so patients, practitioners and prescriptions are interoperable by default.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Presentation", text: "The unified Next.js app with its API routes." },
                            { title: "Clinical substrate", text: "A self-hosted Medplum server: Patient, Practitioner, Task, Encounter, MedicationRequest, QuestionnaireResponse, Communication and AuditEvent resources, plus subscriptions that trigger server-side bots." },
                            { title: "Integration", text: "14 adapters that connect provider networks, e-prescribing, payments, messaging, video and the product catalog." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/architecture.png`} alt="RX Library architecture" caption="Platform architecture" />

                <Section title="5. Key Decisions">
                    <SubHeading>FHIR as the database schema</SubHeading>
                    <Paragraph>
                        Using FHIR resources instead of a custom schema makes every record interoperable by default and gives the team a standard vocabulary for the business logic.
                    </Paragraph>
                    <SubHeading>Mock-first integrations</SubHeading>
                    <Paragraph>
                        Every adapter implements the same interface and runs against Mock Service Worker fixtures by default. Adding the environment keys flips that adapter to live, and removing them flips it back, with the same code path in every environment. A fresh clone starts a working platform with zero credentials, and the test suite never touches a real vendor.
                    </Paragraph>
                    <SubHeading>A tenant is configuration, not code</SubHeading>
                    <Paragraph>
                        A tenant is a FHIR Organization with a configuration extension: slug, brand, legal name, provider network, e-prescribing provider and domain. The tenant is resolved from the request&apos;s host and there are no per-tenant branches in the code, so adding a tenant is a database row rather than a deploy. Authority is layered: the platform owns the master catalog and defaults, each tenant picks products, pricing and branding, and tenant clinicians can adapt protocols, with every edit audited.
                    </Paragraph>
                    <SubHeading>Automation never prescribes</SubHeading>
                    <Paragraph>
                        Bots can only propose a prescription. A licensed practitioner promotes a proposal into an order, which keeps the clinical decision with a human.
                    </Paragraph>
                </Section>

                <Section title="6. The Order Lifecycle">
                    <Paragraph>
                        Each order is a single FHIR Task whose business status walks through intake complete, provider assigned, consult scheduled, consult done, prescription sent, pharmacy processing, shipped, fulfilled and refill due. Side states such as stalled, needs review, on hold and cancelled catch the exceptions. A state-machine bot rejects illegal transitions and records every change in the audit log. The patient&apos;s order tracker mirrors these stages.
                    </Paragraph>
                    <Paragraph>
                        Eleven stateless, idempotent bots react to subscriptions, schedules and webhooks: intake-to-order conversion, provider routing, prescription transmission, hourly stall detection, refill and check-in reminders, a month-two renewal pipeline, an hourly catalog sync from Airtable and superbill PDF generation.
                    </Paragraph>
                </Section>

                <Section title="7. Integrations">
                    <FeatureList
                        items={[
                            { title: "Provider networks", text: "MDI, OpenLoop and Beluga, chosen per tenant." },
                            { title: "Prescribing and pharmacies", text: "RXNT e-prescribing and several pharmacy adapters." },
                            { title: "Payments and identity", text: "Stripe and Stripe Identity." },
                            { title: "Messaging and video", text: "Twilio, SendGrid and Daily.co." },
                            { title: "Hardening", text: "Idempotency, retryable-error classification, failure-mode tests for every adapter and signed-webhook verification." },
                        ]}
                    />
                </Section>

                <Section title="8. Access Control and Infrastructure">
                    <FeatureList
                        items={[
                            { title: "Isolation", text: "One parameterised access policy per role scopes every provider and admin query to their organization, and patients only see their own compartment. A live test asserts that a patient gets a 403 when reading another patient's record." },
                            { title: "Infrastructure as code", text: "AWS via Terraform: containers on ECS Fargate, a multi-AZ Postgres database, Redis, a load balancer with TLS, a web application firewall, secrets management and alarms." },
                            { title: "CI/CD", text: "GitHub Actions deploying through short-lived OIDC credentials, with no long-lived keys." },
                        ]}
                    />
                </Section>

                <Section title="9. Outcome">
                    <StatTiles
                        items={[
                            { value: "3", label: "roles, one app" },
                            { value: "14", label: "integration adapters" },
                            { value: "11", label: "server-side bots" },
                            { value: "800+", label: "unit tests" },
                            { value: "50+", label: "E2E specs" },
                        ]}
                    />
                </Section>

                <Takeaways
                    items={[
                        { title: "Standards pay off", text: "Building on FHIR meant the business logic could use an existing vocabulary instead of inventing one." },
                        { title: "Mocks unblock everyone", text: "Mock-first adapters let frontend and business logic move without waiting for vendor access." },
                        { title: "Configuration beats branching", text: "Keeping tenant differences in data avoided a codebase full of per-brand conditionals." },
                    ]}
                />

                <ProjectCTA
                    links={[
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                        { label: "See the Marketing Website", href: "/projects/rxlibrary-homepage" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
