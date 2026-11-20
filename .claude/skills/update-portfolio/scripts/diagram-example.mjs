import { page, row, card, render, close } from "./diagram-lib.mjs";

const OUT = process.env.OUT_DIR ?? "./out"; // set OUT_DIR to the scratchpad folder
const only = process.argv[2];
const jobs = {};

/* ------------------------------------------------------------ The New Paper */
jobs["tnp/architecture"] = page({
  kicker: "Architecture",
  title: "Articles live in git, people live in Redis",
  sub: "Public content is a TypeScript file in the repository, so a publication is a reviewable commit. Everything personal stays in a database that the public repository never sees.",
  body: `
  <div class="label">Publishing, once per article</div>
  ${row([
    { eb: "/admin/new", t: "Editor", d: "Rich text, photos compressed in the browser to WebP." },
    { eb: "/api/admin/publish", t: "Serialise", d: "Turns the form into typed content blocks." },
    { eb: "GitHub API", t: "Commit", d: "Article and images land in the repo.", accent: true },
    { eb: "Vercel", t: "Redeploy", d: "The new article is a static page." },
  ])}
  <div class="label">People's data, never in git</div>
  ${row([
    { eb: "Forms", t: "Subscribe, comment", d: "Consent boxes, one link at most, rate limited." },
    { eb: "API routes", t: "Validate", d: "Signed links, double opt-in, no secrets in the client." },
    { eb: "Upstash Redis", t: "Store", d: "Subscribers, comments and campaigns.", accent: true },
    { eb: "Resend", t: "Send", d: "Confirmations and newsletters, in batches of 100." },
  ])}`,
});

jobs["tnp/newsletter"] = page({
  kicker: "Newsletter",
  title: "Nobody gets a newsletter they did not confirm",
  sub: "Sign-up is double opt-in, a mail client's link scanner cannot confirm by accident, and every email carries a one-click unsubscribe.",
  body: `
  <div class="label">Subscriber</div>
  ${row([
    { eb: "Footer or /newsletter", t: "Sign up", d: "Name, email, consent. Stored as pending." },
    { eb: "In their language", t: "Confirmation email", d: "A signed link, valid for 7 days." },
    { eb: "/confirm", t: "Press the button", d: "Opening the link confirms nothing. The button does.", accent: true },
    { eb: "List", t: "Confirmed", d: "Only now can they receive an issue." },
  ])}
  <div class="label">Editor</div>
  ${row([
    { eb: "/admin/newsletter", t: "Compose", d: "Subject, text, audience: all, es, en or nl." },
    { eb: "Preview + test", t: "Send to yourself", d: "Always before the first real send." },
    { eb: "Batches of 100", t: "Send", d: "Waits and retries on a 429. A cut send can resume without repeats.", accent: true },
    { eb: "Every email", t: "One-click unsubscribe", d: "List-Unsubscribe header (RFC 8058), required by Gmail and Yahoo." },
  ])}`,
});

jobs["tnp/comments"] = page({
  kicker: "Comments",
  title: "A comment counts once the email is verified",
  sub: "Readers comment without an account. The cost of that is spam, so verification, limits and moderation are part of the design.",
  body: `
  ${row([
    { eb: "Under each article", t: "Write", d: "Name, email, up to 1,500 characters and one link." },
    { eb: "Stored as unverified", t: "Verify by email", d: "Unverified comments expire and are deleted after 7 days." },
    { eb: "Public", t: "Published", d: "Only name, text and date are shown. The email never leaves the server.", accent: true },
    { eb: "/admin/comments", t: "Moderate", d: "Hide, show again or delete." },
  ])}
  <div class="grid" style="grid-template-columns:repeat(3,1fr)">
    ${card({ eb: "Return visits", t: "Verified-email cookie", d: "Kept for 90 days, so a regular reader verifies once." })}
    ${card({ eb: "Consent", t: "Promo opt-in is a flag", d: "One constant switches the checkbox between required and optional, in the form and the API at once." })}
    ${card({ eb: "Abuse", t: "Rate limits", d: "Shared across serverless instances through Redis, with an in-memory fallback in development." })}
  </div>`,
});

/* --------------------------------------------------------- carmenmazambrano.nl */
jobs["cm/structure"] = page({
  kicker: "Structure",
  title: "One page, three languages, no environment variables",
  sub: "The portfolio is a static site. A small proxy picks the language, the page is generated once per language, and every word on it lives in a dictionary.",
  body: `
  ${row([
    { eb: "proxy.js", t: "Pick a language", d: "Cookie first, then the browser's Accept-Language." },
    { eb: "/es · /en · /nl", t: "Static page", d: "generateStaticParams builds one per language.", accent: true },
    { eb: "Browser", t: "Motion on top", d: "Framer Motion, GSAP and Lenis smooth scrolling." },
  ])}
  <div class="label">Where the content comes from</div>
  <div class="grid" style="grid-template-columns:repeat(3,1fr)">
    ${card({ eb: "i18n/dictionaries", t: "Words", d: "Three JSON files that must share the same keys.", pills: ["es", "en", "nl"] })}
    ${card({ eb: "data/content.js", t: "Facts", d: "Profile, 14 roles, skills and posts: things that do not change with language." })}
    ${card({ eb: "thenewpaper.nl", t: "Publications", d: "Titles stay in Dutch and link to the original, with the active language prefix." })}
  </div>`,
});

jobs["shared/ecosystem"] = page({
  kicker: "Ecosystem",
  title: "One journalist, three pieces of software",
  sub: "A tool that drafts, a newspaper that publishes and a portfolio that shows the work. Each is its own repository and none of them needs the others to run.",
  body: `
  ${row([
    { eb: "Automation", t: "Pressroom", d: "Drafts Dutch press releases from a dump of photos and notes, and remembers every contact.", accent: true },
    { eb: "Newspaper", t: "The New Paper", d: "Trilingual local newspaper with admin, newsletter and comments." },
    { eb: "Portfolio", t: "carmenmazambrano.nl", d: "Her story, 14 roles and latest publications, in three languages." },
  ])}
  <div class="note">Pressroom inserts an approved release into the newspaper's content file as a draft change, and the portfolio links to what the newspaper publishes. Nothing is committed or pushed automatically.</div>`,
});

/* ------------------------------------------------------------------ Pressroom */
jobs["pressroom/entity-model"] = page({
  kicker: "Data model",
  title: "Eleven entities, all plain markdown",
  sub: "Every entity is a markdown file with YAML frontmatter, versioned in git. They point at each other by id, and a reference check must come back empty before any data change is committed.",
  body: `
  <div class="grid" style="grid-template-columns:1fr 1.25fr 1.1fr">
    ${card({ eb: "Who publishes", t: "Outlet · Beat", d: "The outlet holds a style profile: tone, structure, rules. A beat is the template for a topic, such as culture.", accent: true })}
    ${card({ eb: "What it is about", t: "Subject · Organization · Person · Venue · Asset", d: "An exhibition links its organizations, people, venue and assets. Each asset carries its credit and a rights flag." })}
    ${card({ eb: "What happened", t: "Release · Thread · Communication · Action", d: "The text and its status, plus the email and WhatsApp history per contact and any follow-up still open." })}
  </div>
  <div class="label">Rules that hold it together</div>
  <div class="grid" style="grid-template-columns:repeat(3,1fr)">
    ${card({ eb: "References", t: "By id, never by path", d: "<code>store.brokenRefs()</code> must return an empty list." })}
    ${card({ eb: "Validation", t: "Zod on every load", d: "A malformed file fails loudly instead of drifting." })}
    ${card({ eb: "Thread status", t: "Derived, not stored", d: "Computed from the last message, open actions and today's date." })}
  </div>`,
});

jobs["pressroom/workflow"] = page({
  kicker: "Workflow",
  title: "From a dump of material to a sent release",
  sub: "Claude drafts, a person approves, and every step leaves a trace in the memory so the next release starts with context.",
  body: `
  ${row([
    { eb: "inbox/", t: "A dump", d: "Photos, a flyer, a few notes." },
    { eb: "Entities", t: "Subject, people, venue", d: "Reused when they already exist." },
    { eb: "Dutch", t: "Draft", d: "Outlet profile, beat template and 2–3 similar past releases.", accent: true },
    { eb: "In chat", t: "Approval", d: "Nothing leaves without an explicit yes." },
  ])}
  ${row([
    { eb: "After the yes", t: "Google Doc", d: "For the journalist to review and edit." },
    { eb: "Gmail", t: "Email draft", d: "Saved as a draft, never sent by the tool." },
    { eb: "Text only", t: "WhatsApp", d: "A short message to copy and send." },
    { eb: "Memory", t: "Log it", d: "A communication on a thread, plus actions for what is pending.", accent: true },
  ])}
  <div class="pills"><span class="pill">Anything missing is marked [TE BEVESTIGEN]</span><span class="pill">Only assets with rights: cleared are attached</span><span class="pill">Press text in Dutch, conversation in Spanish</span></div>`,
});

jobs["pressroom/public-private"] = page({
  kicker: "Privacy",
  title: "A public repository that never holds a contact",
  sub: "The code is open source. The journalist's address book, conversations and real releases never reach it, by layout and by gitignore.",
  body: `
  <div class="grid" style="grid-template-columns:1fr 1fr">
    <div class="card accent"><div class="eb">Tracked in the public repository</div><div class="t">The system</div><div class="d">
      <p style="margin-bottom:10px">Code and schemas</p><p style="margin-bottom:10px">Outlet profiles: patterns only, no sentences from articles</p><p style="margin-bottom:10px">One template per beat</p><p>Fictional examples with the same layout as real data</p></div></div>
    <div class="card"><div class="eb">Gitignored, on one machine</div><div class="t">The memory</div><div class="d">
      <p style="margin-bottom:10px"><code>data/</code> people, organizations, releases, threads</p><p style="margin-bottom:10px"><code>inbox/</code> raw material to process</p><p style="margin-bottom:10px"><code>outputs/</code> generated files</p><p><code>samples/</code> other outlets' articles used to learn style</p></div></div>
  </div>
  <div class="note" style="margin-top:8px">The store takes a list of folders and reads them in order, <code>data/</code> first and then the repo. The tests point it at <code>examples/</code>, so a fresh clone runs on fictional data.</div>`,
});

jobs["pressroom/publish-web"] = page({
  kicker: "Publishing",
  title: "From an approved release to a diff in the website repo",
  sub: "One command converts a release into an article entry. A human still reviews and publishes it from the website's own repository.",
  body: `
  ${row([
    { eb: "data/releases", t: "Release", d: "It needs an author and no broken references." },
    { eb: "npm run publish:web", t: "Convert", d: "The Dutch text becomes paragraphs, subheadings and an info box." },
    { eb: "content/articles/index.ts", t: "Insert", d: "Placed on top of the newspaper's list.", accent: true },
    { eb: "Website repo", t: "Review the diff", d: "Commit and push by hand." },
  ])}
  <div class="note">The target comes from <code>PRESSROOM_SITE_DIR</code> in a gitignored <code>.env</code>, so no local path is ever committed. Nothing is committed or pushed by the tool.</div>`,
});

jobs["pressroom/thread-status"] = page({
  kicker: "Memory",
  title: "A thread's status is computed, never typed",
  sub: "Statuses go stale the moment someone forgets to update them. Pressroom derives them from what is on record, checked in this order.",
  body: `
  <div class="grid" style="grid-template-columns:repeat(6,1fr);gap:18px">
    ${card({ eb: "1", t: "closed", d: "Marked closed." })}
    ${card({ eb: "2", t: "needs_action", d: "An action is still open." })}
    ${card({ eb: "3", t: "empty", d: "No messages yet." })}
    ${card({ eb: "4", t: "replied", d: "The last message came in." })}
    ${card({ eb: "5", t: "needs_followup", d: "Our message is 5+ days old.", accent: true })}
    ${card({ eb: "6", t: "awaiting_reply", d: "Our message is recent." })}
  </div>`,
});

/* -------------------------------------------------------------- Learn by Doing */
jobs["lbd/how-it-works"] = page({
  kicker: "How it works",
  title: "From a commit to a lesson you can study later",
  sub: "Nothing interrupts the work. Lessons are written when Claude commits, and they wait until you open the study space.",
  body: `
  <div class="label">When Claude commits</div>
  ${row([
    { eb: "PostToolUse hook", t: "Check the repo", d: "Off, undecided or on. Only repos you turned on spend tokens." },
    { eb: "Skill", t: "Write 1 to 3 lessons", d: "From the real patch, your profile and the project memory.", accent: true },
    { eb: "MCP tool", t: "Save as notes", d: "Plain Markdown files on your machine." },
  ])}
  <div class="label">When you run /study</div>
  ${row([
    { eb: "Content hash", t: "Sync", d: "Only new and edited notes travel." },
    { eb: "Artifact", t: "Study space", d: "Private, in your own claude.ai account.", accent: true },
    { eb: "Your answers", t: "Progress", d: "Spaced review at 1, 3, 7, 16 and 35 days." },
  ])}`,
});

jobs["lbd/lesson-anatomy"] = page({
  kicker: "A lesson",
  title: "Six steps, and only the exercise changes",
  sub: "Every lesson has the same shape, so the method feels familiar. You guess before you read, and you never have to write code if you do not want to.",
  body: `
  <div class="grid" style="grid-template-columns:repeat(6,1fr);gap:18px">
    ${card({ eb: "01", t: "Introduction", d: "What the repo is and where the change lives." })}
    ${card({ eb: "02", t: "Context", d: "What was being built, what you will learn." })}
    ${card({ eb: "03", t: "Predict", d: "You commit to a guess first.", accent: true })}
    ${card({ eb: "04", t: "Concept", d: "A short mental model, not a definition." })}
    ${card({ eb: "05", t: "Exercise", d: "Exactly one, from the kinds you chose.", accent: true })}
    ${card({ eb: "06", t: "Result", d: "Right, partly or not yet. It feeds the review." })}
  </div>
  <div class="label">Exercises, in three families</div>
  <div class="grid" style="grid-template-columns:repeat(3,1fr)">
    ${card({ eb: "Remember", t: "Recordar", d: "Multiple choice and free recall.", pills: ["opción múltiple", "recuerdo libre"] })}
    ${card({ eb: "Reason", t: "Explicar", d: "Say it in your own words and defend a choice.", pills: ["explícalo", "justifica", "compara"] })}
    ${card({ eb: "Read code", t: "Leer código", d: "Understand and review what you did not write.", pills: ["predice", "encuentra el error", "revisa un cambio"] })}
  </div>`,
});

const names = Object.keys(jobs).filter((n) => !only || n.startsWith(only));
for (const n of names) await render(n.replace("/", "__"), jobs[n], OUT);
await close();
