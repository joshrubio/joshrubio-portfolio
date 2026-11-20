import {
    Callout,
    DataTable,
    FeatureList,
    Figure,
    FigureGrid,
    Paragraph,
    ProcessSteps,
    ProjectBody,
    ProjectCTA,
    ProjectHeader,
    ProjectPage,
    Quote,
    Section,
    StatTiles,
    SubHeading,
    Takeaways,
} from "@/components/projects/ProjectPage"

export const metadata = {
    title: "The Long Run - Brand Identity | Josh D. Rubio",
    description: "Brand identity system for The Long Run, a pet nutrition brand: logo family, colour and type rules, packaging, social, apparel, and a 30-template email system, all built on one idea, More Days Together.",
}

const IMG = "/assets/imgs/projects/the-long-run"

export default function TheLongRun() {
    return (
        <ProjectPage>
            <ProjectHeader
                status="Brand design"
                title="The Long Run - Brand Identity"
                summary="A pet nutrition brand that borrows the language of old-school track and field. One promise, More Days Together, carried by a wordmark, a badge, a running dog and cat, and a color system where only the flavor changes."
                meta={[
                    { label: "Role", value: "Brand Designer" },
                    { label: "Category", value: "Pet nutrition" },
                    { label: "Scope", value: "Identity, packaging, social, email" },
                    { label: "Brand book", value: "v03, Sept 2026" },
                ]}
                hero={{ src: `${IMG}/thumbnail.webp`, alt: "The Long Run pouches in red, gold and blue" }}
            />

            <ProjectBody>
                <Section title="1. Overview">
                    <Paragraph>
                        <strong>Every part of the identity exists to carry one promise: More Days Together.</strong> The Long Run makes single-ingredient, freeze-dried treats for dogs and cats that are human grade, protein packed and crafted for vitality. The name and the track-and-field world it borrows from say the same thing twice: this is nutrition built for a lifetime, not a trend.
                    </Paragraph>
                    <Paragraph>
                        I designed the identity system, applied it to packaging, social and apparel, and then rebuilt the brand&apos;s email program on top of it, working under the supervision of the Proventheory team. The result is a brand that is documented in a 24-slide brand book, and where every element ships as a locked file that is used exactly as supplied.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/mockup-five-flavors.webp`} alt="The five flavors of The Long Run stand-up pouch" caption="Five flavors, one layout: only the flavor color changes" />

                <Callout tone="danger" title="⚠️ The Brand Challenge">
                    <p className="text-300 mb-2">
                        Pet food is a crowded shelf, and most of it talks the same way. The owner is skeptical about what is in the bag, and the category leans on pastel palettes, cartoon mascots and claims nobody can back up.
                    </p>
                    <ul className="text-300 mb-0">
                        <li><strong>Trust:</strong> the brand has to signal &quot;this is real food&quot; in seconds, from three meters away</li>
                        <li><strong>Range:</strong> five treat flavors, a Minis format and a spray family all have to feel like one brand</li>
                        <li><strong>Consistency:</strong> the same identity must survive a pouch, a tee, a booth and an inbox</li>
                    </ul>
                </Callout>

                <Section title="2. Strategy and Positioning">
                    <Paragraph>
                        The positioning is <strong>warm, never cute</strong>. Instead of talking to the owner as if they were a child, the brand speaks like a family diner that happens to know exactly what is in the food, and it borrows from 1950s diners, vintage sports uniforms and old-school athletics. The references are nostalgic, confident and a little worn in.
                    </Paragraph>
                    <Paragraph>
                        The strategy is written as <strong>three rules, and each one forbids something specific</strong>. That is what makes them useful when two people disagree about a layout and neither is wrong on taste alone.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Warm, never cute", text: "No pastel palettes, googly-eyed mascots, bouncy script or paw prints used as decoration." },
                            { title: "One loud thing", text: "The wordmark, the badge or the running pair leads on any surface. The other two support quietly." },
                            { title: "Color carries the flavor", text: "Cream and navy never move. The flavor hue is the only variable, and it does all of the shelf work." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/principles.webp`} alt="Brand book page with the three principles" caption="The three principles, each with what it rules out" />

                <ProcessSteps
                    steps={[
                        { label: "PROMISE", hint: "More Days Together" },
                        { label: "RULES", hint: "Three things it forbids" },
                        { label: "SYSTEM", hint: "Logo, color, type, motif" },
                        { label: "APPLY", hint: "Pack, social, apparel, email" },
                    ]}
                />

                <Section title="3. The Identity System">
                    <SubHeading>A logo family with a clear hierarchy</SubHeading>
                    <Paragraph>
                        The identity is a small set of locked assets in a strict order: <strong>wordmark, then badge, then everything else</strong>. The wordmark is set in Lilita One with a cream offset outline and fills the width it is given. The badge is a twelve-point starburst carrying a paw, with More Days Together set around it. The mark is a four-toe paw whose pad is an infinity loop, so it reads as a paw first and as &quot;forever&quot; second, once someone is holding the pack.
                    </Paragraph>
                    <Paragraph>
                        The badge is deliberately built from three parts, the <strong>starburst for the stamp of approval, the arc for the promise, and the paw for who it is for</strong>. Remove any one and it stops working.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/logo-anatomy.webp`} alt="Badge anatomy: starburst plus arc plus paw" caption="The badge is the sum of three parts and is never rebuilt from them" />
                <Figure src={`${IMG}/logo-set.webp`} alt="The full set of brand marks and the track pattern" caption="The full set: wordmark, badge, mark, and the four-band track pattern" />

                <Section title="4. Color and Typography">
                    <Paragraph>
                        The palette is sampled from the confirmed bag and built on a simple logic: <strong>cream is the field, navy is the constant, and the flavor hue is the variable</strong>. There is no fourth brand color. To add a flavor, you pick one saturated, food-derived hue that separates from cream at three meters and sits at least 20 degrees away from any existing flavor.
                    </Paragraph>
                    <DataTable
                        head={["Role", "Color", "Rule"]}
                        rows={[
                            ["The field", "Cream #EDD8C4", "Present on every surface."],
                            ["The variable", "Signal Red #B31714", "Also the Turkey Hearts flavor hue."],
                            ["The constant", "Navy #122537", "Never tinted."],
                            ["Flavor hues", "Blue #0B7DBC, green #529038, gold #F3A60A, orange #E2570D, purple #9C2E82", "One per SKU: frame, sweep, bottom band and flavor name. Never on the wordmark."],
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/palette.webp`} alt="Brand book palette page" caption="Primary palette and the flavor hues" />

                <Paragraph>
                    Type follows the same discipline: <strong>two typefaces, two jobs</strong>. Lilita One is for the wordmark and flavor names only, because it is bold and rounded enough to read at full bag width across a shelf. IBM Plex Mono handles every call out, spec and line of legal copy, and its monospace grid gives the system a vintage-modern feel against the diner-era color. Both are free and open source, so there is never a reason to substitute.
                </Paragraph>
                <Figure src={`${IMG}/typography.webp`} alt="Typography page: Lilita One and IBM Plex Mono with the type hierarchy" caption="Two typefaces, five levels of hierarchy" />

                <Section title="5. Illustration and Motion">
                    <Paragraph>
                        Two graphic devices give the brand its energy. <strong>The running pair</strong> is a dog and a cat mid-stride, always nose to tail, always left to right with the dog leading. It is the only illustrated element on the front of a pack and the visual shorthand for the promise. <strong>The track motif</strong> is a set of solid ribbons that frame the cream panel and sweep beneath the pair, opening at the lower left so the eye is carried off the edge: four bands on the big bags, three on the Minis, one continuous run on the labels.
                    </Paragraph>
                </Section>
                <FigureGrid
                    images={[
                        { src: `${IMG}/running-pair.webp`, alt: "The running dog and cat", caption: "The running pair and its solo layers" },
                        { src: `${IMG}/track-motif.webp`, alt: "The track motif: frame, sweep and curve", caption: "The track motif: frame, sweep, curve" },
                    ]}
                />

                <Section title="6. Voice">
                    <Paragraph>
                        The voice is <strong>confident, plain and a little nostalgic</strong>, and it never makes a claim it cannot back up. Three locked call outs carry the product: Crafted for Vitality as the emotional promise, Human Grade as the trust signal, and Protein Packed as the functional proof. The book also lists what the brand never says, so that copywriters have the same guardrails as designers.
                    </Paragraph>
                </Section>
                <Quote cite="From the brand book, voice page">
                    Tired legs. Happy tails.
                </Quote>
                <Figure src={`${IMG}/voice.webp`} alt="Voice page: how The Long Run sounds" caption={`We say "Real food, single ingredient." We never say "Superfood."`} />

                <Section title="7. Applied: Packaging">
                    <Paragraph>
                        Packaging is where the system does the most work. Each front panel follows <strong>eight locked elements</strong>: badge breaking the frame, a frame in the flavor hue, the wordmark at panel width, the descriptor, the running pair over the sweep, the flavor name, a window that shows the actual product, and the three call outs on the bottom band. Five flavors then share one layout and swap a single color.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/packaging-bigbags.webp`} alt="Big bag layout and five flavors" caption="The 3 oz bag: eight locked elements, five flavors" />
                <FigureGrid
                    images={[
                        { src: `${IMG}/pouch-front.webp`, alt: "Stand-up pouch front, Beef Liver", caption: "Front: shelf work, in the flavor hue" },
                        { src: `${IMG}/pouch-back.webp`, alt: "Stand-up pouch back, Beef Liver", caption: "Back: story, product, benefits, analysis, feeding" },
                    ]}
                />
                <Paragraph>
                    The back of the bag is <strong>cream-led</strong>, with the flavor color entering from the top right and one fixed reading order: story, product, benefits, analysis, calories, feeding, compliance. The Minis pouch keeps the same skeleton but drops the frame from four bands to three, replaces the badge with a smaller starburst, and reduces the back to the icon trio and the guaranteed analysis.
                </Paragraph>
                <Figure src={`${IMG}/packaging-minis.webp`} alt="Minis pouch layout" caption="Minis: same system, fewer bands, less copy" />
                <Paragraph>
                    A third family, the spray labels, needed a regulated facts panel, so the frame runs as <strong>one continuous sweep instead of wrapping a panel</strong>. A rectangle was the right shape for the required information, and the identity bends to it without losing the badge, the running pair or the color logic.
                </Paragraph>
                <Figure src={`${IMG}/packaging-labels.webp`} alt="Spray label layout and six labels" caption="Spray labels: one layout, six colors" />

                <Section title="8. Applied: Social, Patterns and Print">
                    <Paragraph>
                        Off the shelf, the brand needs to feel like a club, not a catalog. The apparel line, <strong>The Long Run Club</strong>, is a metaphor for the longer, healthier life owners hope to share with their pets, and it is built on Principle 02: quiet front, loud back. A small badge sits on the chest, and the full wordmark and running pair go on the back.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/area-apparel.webp`} alt="Apparel and gear: tees, caps, socks and bandanas" caption="The Long Run Club: tees, caps, socks and bandanas" />
                <Paragraph>
                    Static social content translates the identity into <strong>a flexible social language</strong>: logo-led posts build recognition, benefit and routine posts inform with personality, and a shared palette and hierarchy keep varied compositions consistent without repeating. The feed itself is photography-first, with one product post for every three lifestyle or club posts.
                </Paragraph>
                <Figure src={`${IMG}/area-social.webp`} alt="Static social posts" caption="Static social: logo-led, benefit-led and routine-led posts" />
                <Figure src={`${IMG}/area-patterns.webp`} alt="Four repeat patterns in navy, beige, kraft and brown" caption="Repeat patterns for packaging, merchandise, print and environments" />
                <Paragraph>
                    The same kit extends into a physical space. The booth concept uses a <strong>tiered display</strong>: a counter for the Minis and the spray range at browsing height, and an elevated stand that gives the core pouches more presence. Cream and navy hold the space together, and the flavor-coded packs provide the contrast and the wayfinding.
                </Paragraph>
                <Figure src={`${IMG}/area-booth.webp`} alt="Booth concept and product hierarchy" caption="Booth concept: color as navigation" />

                <Section title="9. Applied: The Email System">
                    <Paragraph>
                        The last area was email, where <strong>a brand usually falls apart</strong>: templates get built one at a time, with different fonts, colors and voice. I rebuilt six flows on the brand book, thirty emails in total, as a single system with one grammar of fifteen blocks. Blocks drop out when an email does not need them, and nothing else moves.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Color carries the flavor", text: "Each flow takes one real bag color. Saturated bands hold display type only, and body copy always sits on cream, which keeps every block above contrast minimums." },
                            { title: "Two faces, two jobs", text: "Lilita One on headlines and the discount code, IBM Plex Mono everywhere else, with Arial Black and Courier New fallbacks so Outlook keeps the weight and the character." },
                            { title: "Left aligned, 40px margin", text: "Text is left aligned instead of centered. That single change is most of the difference between a template and a brand." },
                            { title: "Tone by flow", text: "Welcome keeps the offer quiet, Your Cart creates urgency without alarm, and only the last cart email is allowed to say final." },
                        ]}
                    />
                </Section>
                <StatTiles
                    items={[
                        { value: "30", label: "email templates" },
                        { value: "6", label: "flows" },
                        { value: "5", label: "SKU colors" },
                        { value: "15", label: "content blocks" },
                    ]}
                />
                <Figure src={`${IMG}/email-system.webp`} alt="Email system overview: color, type and blocks" caption="The system: color roles, two faces, one block grammar" />
                <Figure src={`${IMG}/email-flows.webp`} alt="The Five and Your Cart email flows" caption="The Five (one email per bag) and Your Cart, five emails each" />
                <FigureGrid
                    images={[
                        { src: `${IMG}/email-hero-welcome.webp`, alt: "Welcome email hero", caption: "Welcome hero, Turkey Hearts red" },
                        { src: `${IMG}/email-full-length.webp`, alt: "A full-length cart email", caption: "A full email, with Klaviyo product-feed tags" },
                    ]}
                />
                <SubHeading>Fixing what could not both be true</SubHeading>
                <Paragraph>
                    Rebuilding the flows was also an audit. It surfaced <strong>five contradictions</strong> in the original emails, and all of them were fixed: a button that promised 15% over a body that promised 10%, three emails that all called themselves the final one, a discount code with an ampersand that breaks some checkouts, and two refill emails with mismatched or missing codes. Every discount code was otherwise carried over unchanged so nothing needs rebuilding in Shopify. Three other calls, such as a cart offer ladder that runs backwards, I left for the client to decide.
                </Paragraph>

                <Section title="10. Deliverables">
                    <StatTiles
                        items={[
                            { value: "24", label: "brand book slides" },
                            { value: "3", label: "brand marks + running pair" },
                            { value: "5", label: "flavors, big bag and Minis" },
                            { value: "6", label: "spray labels" },
                            { value: "30", label: "email templates" },
                        ]}
                    />
                    <FeatureList
                        items={[
                            { title: "Brand book", text: "Foundation, principles, logo rules, palette, typography, voice and applications, with a page on what breaks the logo." },
                            { title: "Packaging", text: "Big bag and Minis fronts and backs in five flavors, plus six spray labels." },
                            { title: "Social, apparel and patterns", text: "Static post system, Long Run Club apparel and gear, repeat patterns and a booth concept." },
                            { title: "Email system", text: "Six flows, thirty templates, one block grammar, ready to hand off to Klaviyo." },
                        ]}
                    />
                    <Paragraph>
                        The brand book is honest about what is still open: three taglines are live at once, and a few copy corrections remain on the packaging before anything reprints. It lists them on the last page rather than hiding them.
                    </Paragraph>
                </Section>

                <Takeaways
                    items={[
                        { title: "Rules that forbid something", text: "A principle that forbids nothing is decoration. Each of the three rules can settle a layout argument." },
                        { title: "Let one thing change", text: "Locking cream and navy and letting only the flavor hue vary made five SKUs feel like one brand." },
                        { title: "Ship locked files", text: "The wordmark, badge, mark and pattern are supplied artwork and never re-set, which protects the brand from good intentions." },
                        { title: "Brand shows up in the inbox", text: "Email is where identity usually falls apart, so it needed a system and an audit, not a template pack." },
                    ]}
                    next="Choose a single tagline before reprint, re-render the apparel mockups against the final badge, and measure how the flows perform once they go live."
                />

                <ProjectCTA
                    links={[
                        { label: "Discuss This Project", href: "/#contact" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
