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
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "HeyTides - Peptide Pharmacy Website | Josh D. Rubio",
    description: "A custom WordPress theme and WooCommerce store for a modern compounding and peptide-focused pharmacy brand. Designed and developed end to end.",
}

const IMG = "/assets/imgs/projects/heytides"

export default function HeyTides() {
    return (
        <ProjectPage>
            <ProjectHeader
                title="HeyTides - Peptide Pharmacy Website"
                summary="A website for a modern compounding and peptide-focused pharmacy: prescription therapies, injectables and performance-driven wellness, presented with clinical-grade clarity."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Client", value: "Proventheory" },
                    { label: "Stack", value: "WordPress, WooCommerce, PHP" },
                    { label: "Automation", value: "Python + Airtable" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "HeyTides website" }}
            />

            <ProjectBody>
                <Section title="Overview">
                    <Paragraph>
                        Client project developed for the agency Proventheory, for the HeyTides brand, a pharmacy specializing in prescription therapies, injectables and advanced peptide protocols. I handled the visual design and the full development of the theme and store.
                    </Paragraph>
                </Section>

                <Section title="Design">
                    <Paragraph>
                        A warm coral-to-orange gradient with a terracotta CTA, heavy tightly-tracked headlines with italic serif accents, and a "Modern Care" hero that sets the tone: confident and friendly rather than clinical. Image tiles explain the service (pharmacy, delivery, provider oversight, chat) and a step-by-step timeline shows how care works.
                    </Paragraph>
                </Section>

                <Figure src={`${IMG}/home.png`} alt="Partner-in-health section" caption="Partner-in-health section with calls to action" />
                <Figure src={`${IMG}/features.png`} alt="Feature tiles" caption="Feature tiles: pharmacy, delivery, provider oversight" />

                <Section title="What I Built">
                    <FeatureList
                        items={[
                            { title: "Custom theme", text: "A bespoke WordPress theme built around the brand's warm, approachable identity." },
                            { title: "WooCommerce store", text: "Product catalog with category and dosage filters, product pages and checkout." },
                            { title: "Catalog pipeline", text: "Products are imported from Airtable into WooCommerce with Python scripts and a catalog rules file, with dry-run previews." },
                            { title: "Staging workflow", text: "A staging site on WP Engine for review, with scripted deploys." },
                        ]}
                    />
                </Section>

                <Figure src={`${IMG}/product.png`} alt="Product page" caption="Product page" />
                <Figure src={`${IMG}/mobile.png`} alt="Mobile view" caption="Responsive at 390px" narrow />

                <ProjectCTA links={[{ label: "Discuss a Similar Project", href: "/#contact", icon: "ri-arrow-right-line" }]} />
            </ProjectBody>
        </ProjectPage>
    )
}
