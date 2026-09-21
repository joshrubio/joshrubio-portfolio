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
    title: "PharmacyTime - WooCommerce Pharmacy Website | Josh D. Rubio",
    description: "A custom WordPress theme and WooCommerce store for a compounding pharmacy brand, with an automated Airtable-to-WooCommerce catalog pipeline. Designed and developed end to end.",
}

const IMG = "/assets/imgs/projects/pharmacy-time"

export default function PharmacyTime() {
    return (
        <ProjectPage>
            <ProjectHeader
                title="PharmacyTime - Pharmacy Website"
                summary="A custom WordPress + WooCommerce website for a pharmacy brand, designed and developed from scratch, with a catalog pipeline that keeps the store in sync with Airtable."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Client", value: "Proventheory" },
                    { label: "Stack", value: "WordPress, WooCommerce, PHP" },
                    { label: "Automation", value: "Python + Airtable" },
                ]}
                hero={{ src: `${IMG}/thumbnail.png`, alt: "PharmacyTime website" }}
            />

            <ProjectBody>
                <Section title="Overview">
                    <Paragraph>
                        Client project developed for the agency Proventheory, for the Pharmacy Time brand. I designed the site and built the custom theme, the WooCommerce store and the tooling around it, from catalog import to deployment. The brand now appears live as Pharmacy You (the pharmacytime.com domain redirects there), which is the name visible in the screenshots.
                    </Paragraph>
                </Section>

                <Section title="Design">
                    <Paragraph>
                        A deep purple gradient palette with lavender accents and white rounded cards, paired with a clean sans-serif and italic serif accents on key words. The home page leads with a hero that combines a search box and category shortcuts, then walks the visitor through programs, a three-step care journey and the shop.
                    </Paragraph>
                </Section>

                <Figure src={`${IMG}/programs.png`} alt="Medical programs section" caption="Medical programs section" />
                <Figure src={`${IMG}/home.png`} alt="Weight-management program cards" caption="Program cards on the home page" />

                <Section title="What I Built">
                    <FeatureList
                        items={[
                            { title: "Custom theme", text: "A bespoke WordPress theme instead of an off-the-shelf template, so the brand and the shopping flow are fully controlled." },
                            { title: "WooCommerce store", text: "Catalog, filterable shop, product pages, cart and checkout for a pharmacy product line." },
                            { title: "Catalog pipeline", text: "Python scripts import products from Airtable into WooCommerce, driven by a rules file, with a dry-run mode to preview changes safely." },
                            { title: "Deployment workflow", text: "Staging and production environments on WP Engine with scripted deploys and a main-to-production branch strategy." },
                        ]}
                    />
                </Section>

                <Figure src={`${IMG}/how-it-works.png`} alt="Three-step care journey" caption="Three-step care journey" />
                <FigureGrid
                    images={[
                        { src: `${IMG}/shop.png`, alt: "Filterable shop", caption: "Filterable shop" },
                        { src: `${IMG}/product.png`, alt: "Product page", caption: "Product page" },
                    ]}
                />
                <Figure src={`${IMG}/mobile.png`} alt="Mobile view" caption="Responsive at 390px" narrow />

                <ProjectCTA links={[{ label: "Discuss a Similar Project", href: "/#contact", icon: "ri-arrow-right-line" }]} />
            </ProjectBody>
        </ProjectPage>
    )
}
