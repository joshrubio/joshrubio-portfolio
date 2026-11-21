import Link from "@/components/atoms/LocaleLink"
import {
    BulletList,
    Callout,
    Carousel,
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
    TableOfContents,
    Takeaways,
} from "@/components/case-study"

export const metadata = {
    title: "The New Paper - A Trilingual Local Newspaper | Josh D. Rubio",
    description: "A local newspaper for Rotterdam with a publishing console, a double opt-in newsletter and email-verified comments. Articles live in git, personal data in Redis. Designed and built end to end for a journalist.",
}

const IMG = "/assets/imgs/projects/the-new-paper"

const SECTIONS = [
    "1. Overview",
    "2. Goals",
    "3. The Front Page",
    "4. Reading and Commenting",
    "5. The Console",
    "6. Publishing an Article",
    "7. Architecture",
    "8. The Newsletter",
    "9. Privacy and Safety",
    "10. Key Decisions",
    "11. Outcome",
    "12. Role",
]

export default function TheNewPaper() {
    return (
        <ProjectPage>
            <ProjectHeader
                badge={{ label: "Visit Live Site", href: "https://thenewpaper.nl/" }}
                status="Live · since June 2026 · for Carmen Zambrano"
                title="The New Paper - A Trilingual Local Newspaper"
                summary="A newspaper about Rotterdam, with a console where the editor publishes, a newsletter nobody receives without confirming, and comments that count once the email is verified. Designed and built end to end."
                meta={[
                    { label: "Role", value: "Design & Development" },
                    { label: "Client", value: "Carmen Zambrano" },
                    { label: "Stack", value: "Next.js, TypeScript, Redis" },
                    { label: "Languages", value: "ES · EN · NL" },
                ]}
                hero={{ src: `${IMG}/thumbnail.webp`, alt: "The front page of The New Paper" }}
            />

            <ProjectBody>
                <TableOfContents items={SECTIONS} />

                <Section title="1. Overview">
                    <Paragraph>
                        <strong>A local paper with its own publishing system.</strong> Carmen Zambrano is a journalist with over thirty years of experience who now lives in Rotterdam. The New Paper is the newspaper she founded and edits: news, culture and community from the city, written in Dutch and presented in Spanish, English and Dutch.
                    </Paragraph>
                    <Paragraph>
                        It began in June 2026 as her portfolio, designed like a newspaper front page. By October it had a name of its own, <em>The New Paper</em>, and the portfolio moved to <Link href="/projects/carmen-zambrano">a site of its own</Link>. This page is about the newspaper.
                    </Paragraph>
                    <Figure src={`${IMG}/ecosystem.webp`} alt="Pressroom, The New Paper and the portfolio" caption="The newspaper sits between a drafting tool and a portfolio" />
                </Section>

                <Section title="2. Goals">
                    <Callout tone="danger" title="⚠️ What it needed to do">
                        <BulletList>
                            <li><strong>Be edited by a journalist</strong>, not a developer: write, add photos, publish</li>
                            <li><strong>Speak three languages</strong>: Spanish, English and Dutch interface, for a community that reads in all three</li>
                            <li><strong>Grow an audience</strong> with a newsletter and comments, without becoming a data liability</li>
                            <li><strong>Cost almost nothing to run</strong> and have very little to break</li>
                        </BulletList>
                    </Callout>
                    <Callout tone="success" title="✓ The approach">
                        <Paragraph>
                            <strong>Public content is code, personal data is data.</strong> Articles are committed to the repository, so every publication is a reviewable change. Subscribers, comments and campaigns live in a separate store, because the repository is public.
                        </Paragraph>
                    </Callout>
                </Section>

                <Section title="3. The Front Page">
                    <Paragraph>
                        The design is borrowed from print: a serif masthead with the date, columns divided by thin rules, grayscale photography, and one burgundy accent for categories and calls to action. A light redesign softened the cards and introduced the burgundy newsletter band.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Editor's card", text: "A profile block beside the lead story, so the paper has a face from the first screen." },
                            { title: "Latest news", text: "A looping carousel with clickable dots, then the rest of the notes in two rows." },
                            { title: "Voices from the newsroom", text: "Quotes from the editor and the team about published notes, each linked to its article." },
                            { title: "Advertising", text: "Three sample ads show how paid placement will work. They are labelled as examples, and their content comes from each advertiser's own pages, with no invented services or figures." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/screen-home-more.webp`} alt="Home page: more notes, an advertisement and the newsroom voices" caption="Further down: notes, a sample advertisement and the newsroom's voices" />
                <FigureGrid
                    images={[
                        { src: `${IMG}/screen-es.webp`, alt: "Front page in Spanish", caption: "Spanish" },
                        { src: `${IMG}/screen-nl.webp`, alt: "Front page in Dutch", caption: "Dutch" },
                    ]}
                />
                <FigureGrid
                    images={[
                        { src: `${IMG}/screen-mobile.webp`, alt: "Front page on a phone", caption: "On a phone the bar shrinks to one button", narrow: true },
                        { src: `${IMG}/screen-mobile-menu.webp`, alt: "Phone menu open", caption: "The menu opens over the page with every link and the language switch", narrow: true },
                    ]}
                />

                <Section title="4. Reading and Commenting">
                    <Paragraph>
                        Articles are written in Dutch, and a reader whose interface is in another language sees a notice and a translate button.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Translation on the device", text: "The button uses the browser's built-in translator (Chrome 138+ and desktop Edge). The text never goes to a server, and the byline is left alone because it is already in the interface language." },
                            { title: "Rich content", text: "Paragraphs, subheadings, pull quotes, photo galleries with a lightbox, embedded video and an info box with practical details." },
                            { title: "Comments without accounts", text: "A reader writes a name, an email and up to 1,500 characters. The comment appears once the email is verified." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/screen-article.webp`} alt="An article page" caption="An article, with its translate button above the headline" />
                <Figure src={`${IMG}/screen-comments.webp`} alt="Comment form and newsletter band" caption="The comment form, with its two consent boxes, above the newsletter band" />
                <Figure src={`${IMG}/comments.webp`} alt="How a comment gets published" caption="From writing a comment to moderating it" />

                <Section title="5. The Console">
                    <Paragraph>
                        The console is a small admin behind a signed session cookie: a sidebar with the editor, the list of notes, comments, subscribers and the newsletter. It was designed around one person publishing from a laptop or a phone.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Write and publish", text: "One form turns an article into commits and a rebuilt site. The next section follows it step by step." },
                            { title: "Moderation", text: "Comments can be hidden, shown again or deleted. Hidden comments stay visible to the editor." },
                            { title: "Subscribers", text: "Search, status, language and source of each sign-up, a CSV export, and a copy-unsubscribe-link button for people who ask by email." },
                        ]}
                    />
                    <Paragraph>
                        The screenshots below use fictional subscribers and comments. They advance on their own and stop when you hover; click one to enlarge it.
                    </Paragraph>
                </Section>
                <Carousel
                    images={[
                        { src: `${IMG}/screen-admin-editor.webp`, alt: "Console: writing a note", caption: "Writing a note" },
                        { src: `${IMG}/screen-admin-newsletter.webp`, alt: "Console: composing a newsletter", caption: "Composing a newsletter" },
                        { src: `${IMG}/screen-admin-comments.webp`, alt: "Console: moderating comments", caption: "Moderating comments" },
                        { src: `${IMG}/screen-admin-subscribers.webp`, alt: "Console: subscribers", caption: "Subscribers" },
                    ]}
                />

                <Section title="6. Publishing an Article">
                    <Paragraph>
                        Publishing is the console&apos;s main job, and it is a single form: the title and subtitle, the language the note is written in, a category, a date, an excerpt for the cards, the text, an optional pull quote, a cover photo, a gallery and an optional link to the original LinkedIn post. The steps below are the real flow, run once on a copy of the project with sample text and public photos.
                    </Paragraph>
                    <Carousel
                        images={[
                            { src: `${IMG}/screen-publish-1-form.webp`, alt: "Publishing form", caption: "1. The form: title, language, category, date, excerpt and a cover photo" },
                            { src: `${IMG}/screen-publish-2-editor.webp`, alt: "Text editor", caption: "2. The text, written with simple marks and a formatting bar" },
                            { src: `${IMG}/screen-publish-3-preview.webp`, alt: "Editor preview", caption: "3. The preview renders the marks as the article will show them" },
                            { src: `${IMG}/screen-publish-4-progress.webp`, alt: "Publishing progress", caption: "4. Publishing: photos upload one by one, then the article is committed" },
                            { src: `${IMG}/screen-publish-5-success.webp`, alt: "Published", caption: "5. Done: the site updates by itself in a few minutes" },
                            { src: `${IMG}/screen-publish-6-article.webp`, alt: "The published article", caption: "6. The article, with the cover, the formatted text and an admin-only delete button" },
                        ]}
                        interval={6000}
                    />
                    <Figure src={`${IMG}/publishing.webp`} alt="From the form to a live article" caption="What happens between the button and the live page" />
                    <FeatureList
                        items={[
                            { title: "Text with marks, not HTML", text: "Bold, italics and underline are written as ** * and ++, a line starting with ## is a subheading, and a blank line starts a paragraph. The toolbar and Ctrl+B, Ctrl+I and Ctrl+U insert the marks, and the browser's undo still works after using a button." },
                            { title: "A preview that is the real thing", text: "The preview uses the same renderer as the public article, so what the editor sees is what the reader gets." },
                            { title: "Language per article", text: "Each note is written in one language and the form says so, so readers whose interface differs see a notice and a translate button." },
                            { title: "Photos that always fit", text: "A cover and as many gallery photos as needed. Each is shrunk in the browser to 1600 px WebP, uploaded in its own request and resized again on the server, so a phone photo never hits the 4.5 MB limit that once broke publishing." },
                            { title: "Safe by default", text: "Required fields block the button, a repeated title is refused instead of overwriting, and errors say what happened in plain language: the session expired, a photo is too heavy, the server took too long." },
                            { title: "Every step is a commit", text: "An article arrives as commits named after it, and deleting is also one commit: the admin-only button removes the article and its photos, except any that another note or the About page still uses. Git history is the undo." },
                        ]}
                    />
                </Section>

                <Section title="7. Architecture">
                    <Paragraph>
                        There is no CMS and no application database for articles. Publishing serialises the form into typed content blocks and commits them through the GitHub API; Vercel redeploys and the article becomes a static page. In development, a local mode writes to disk instead, so the whole flow can be tested without touching GitHub or Vercel.
                    </Paragraph>
                    <Paragraph>
                        Everything personal goes elsewhere. Subscribers, comments and campaigns live in Redis (Upstash), with a JSON file in development, and email goes out through Resend. Without a Resend key, a development build writes each email to an outbox folder instead of sending it.
                    </Paragraph>
                </Section>
                <Figure src={`${IMG}/architecture.webp`} alt="The New Paper architecture" caption="Articles in git, people in Redis" />

                <Section title="8. The Newsletter">
                    <Paragraph>
                        The newsletter is the part with the most rules, because it is the part that can hurt a reader.
                    </Paragraph>
                    <FeatureList
                        items={[
                            { title: "Double opt-in", text: "A sign-up is pending until the person confirms from an email in their language. The link is valid for seven days." },
                            { title: "A button, not a link", text: "Opening the confirmation link confirms nothing. Antivirus tools that visit links would otherwise subscribe people by themselves." },
                            { title: "One-click unsubscribe", text: "Every email has a personal unsubscribe link and the List-Unsubscribe headers that Gmail and Yahoo require. Unsubscribing removes the person from the list." },
                            { title: "Sends that can resume", text: "Issues go out in batches of 100, wait and retry when the provider says slow down, and a cut send continues from the history without repeating anyone." },
                            { title: "Audience by language", text: "All subscribers, or only Spanish, English or Dutch readers, with a preview and a test email first." },
                        ]}
                    />
                </Section>
                <Figure src={`${IMG}/newsletter.webp`} alt="Newsletter flow" caption="Sign-up on one side, sending on the other" />

                <Section title="9. Privacy and Safety">
                    <FeatureList
                        items={[
                            { title: "A privacy policy in three languages", text: "It describes what is stored for subscribers and commenters and with which providers." },
                            { title: "Rate limits", text: "Sign-up, comments and admin login are limited, shared across serverless instances through Redis." },
                            { title: "Signed links", text: "Confirmation and unsubscribe links are signed, so they cannot be forged or guessed." },
                            { title: "Private by construction", text: "A comment's email never leaves the server, and unverified comments are deleted after seven days." },
                            { title: "Six test scripts", text: "End-to-end tests for publishing, sign-up, languages, rich text, the newsletter and comments, run against fake Redis and Resend servers so they touch nothing real." },
                        ]}
                    />
                </Section>

                <Section title="10. Key Decisions">
                    <SubHeading>Articles as a file instead of a CMS</SubHeading>
                    <Paragraph>
                        A CMS adds a service, a login and a bill. A file in git adds history, review and rollback for free, and a static page is the fastest and cheapest thing to serve. The cost is that publishing is a commit, which is why the console exists.
                    </Paragraph>
                    <SubHeading>A public repository, so people live elsewhere</SubHeading>
                    <Paragraph>
                        Making the code public forced a clean line: nothing about a person is allowed in git. It also made the newsletter runbook honest, because it can describe the system without any secret in it.
                    </Paragraph>
                    <SubHeading>Translate on the device</SubHeading>
                    <Paragraph>
                        A translation API would be better in places, but it would send each reader&apos;s page to a server and cost money per article. The browser&apos;s own translator is free, private and good enough for news, and where it is missing the button simply does not appear.
                    </Paragraph>
                    <SubHeading>Consent as a switch</SubHeading>
                    <Paragraph>
                        Commenting currently requires ticking the promotional-emails box. That is an editorial choice, but GDPR asks for marketing consent to be free and separate. The rule lives in one constant, and the form and the API both adapt when it is turned off.
                    </Paragraph>
                </Section>

                <Section title="11. Outcome">
                    <StatTiles
                        items={[
                            { value: "3", label: "languages in the interface" },
                            { value: "19", label: "articles published" },
                            { value: "6", label: "end-to-end test scripts" },
                            { value: "~10k", label: "lines of code" },
                            { value: "0", label: "databases for articles" },
                        ]}
                    />
                </Section>

                <Section title="12. Role">
                    <Paragraph>
                        I designed and built the newspaper end to end: the design system, the public site, the console, the newsletter and the deployment. Carmen is the editor and decides what gets published; the console is built for her to use on her own.
                    </Paragraph>
                </Section>

                <Takeaways
                    items={[
                        { title: "Separate what is public from what is personal", text: "Putting the code in a public repository made that line impossible to blur." },
                        { title: "Consent flows are product design", text: "A button instead of a link, and a one-click unsubscribe, cost little and protect the people the paper depends on." },
                        { title: "Boring parts are a feature", text: "Static pages, a file and a key-value store leave very little to maintain." },
                    ]}
                    next="Handle bounces and spam complaints through the provider's webhooks, schedule sends for a chosen hour, and clean up expired pending sign-ups automatically."
                />

                <ProjectCTA
                    links={[
                        { label: "Visit Live Site", href: "https://thenewpaper.nl/", icon: "ri-external-link-line" },
                        { label: "View Source Code", href: "https://github.com/joshrubio/thenewpaper", icon: "ri-github-fill" },
                        { label: "Pressroom", href: "/projects/pressroom" },
                        { label: "Discuss This Project", href: "/#contact", icon: "ri-arrow-right-line" },
                    ]}
                />
            </ProjectBody>
        </ProjectPage>
    )
}
