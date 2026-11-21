# Case-study pages: structure, tone and components

Models to open first: `app/(site)/[lang]/projects/lifepoint-church/page.tsx` (rebuild + evolution, long), `janus/page.tsx` (short, satellite), `conquest-brain/page.tsx` and `teller-framework/page.tsx` (no UI, diagrams and terminals), `rx-library/page.tsx` (client work, role split), `the-new-paper/page.tsx` (UI-heavy), `pressroom/page.tsx` and `learn-by-doing/page.tsx` (tooling).

## Skeleton

```tsx
import { Callout, FeatureList, Figure, FigureGrid, Paragraph, ProcessSteps, ProjectBody, ProjectCTA,
         ProjectHeader, ProjectPage, Section, StatTiles, SubHeading, TableOfContents, Takeaways,
         Terminal } from "@/components/case-study"

export const metadata = { title: "<Name> - <What it is> | Josh D. Rubio", description: "<1-2 sentences>" }
const IMG = "/assets/imgs/projects/<slug>"
```

`ProjectPage` > `ProjectHeader` (badge, status, title, summary, 4 `meta` tiles, `hero`) > `ProjectBody` (table of contents on long pages, numbered `Section`s, `Takeaways`, `ProjectCTA`).

Order that every page follows: **Overview** (what it is and why it exists, the story in two short paragraphs) → **Problem / Solution** `Callout`s (`danger` = "⚠️ The Problem" or "⚠️ What it needed to do", `success` = "✓ The Solution" or "✓ The approach") → `ProcessSteps` (4 tiles) when there is a pipeline → the sections that show the work → **Key Decisions** (`SubHeading` + one short paragraph each, with the trade-off) → **Outcome** (`StatTiles`, 4 to 6) → **Role** when it was not solo → `Takeaways` (3 items + one `next` line) → `ProjectCTA`.

Short pages (Janus) skip the table of contents and number the sections inline. Pages over about 8 sections get `TableOfContents` with the section titles (anchor ids come from the titles).

## Header

- `badge`: "Visit Live Site" or "View on GitHub". Omit for private projects.
- `status`: small line above the title: "Siegfried satellite · 1 of 5", "Version 2 · 2026 · rebuilt from the WordPress original", "Prototype · v0.9.0 · November 2026".
- `title`: "<Name> - <Short descriptor>" (same as `workTitle` in the data file).
- `meta`: Role, Stack, Type or Client or Team, plus one of Timeline / Languages / Identity. Role values used: "Design & Development", "Design Direction & Public Site".

## Tone

- English, first person only when the role matters ("I designed and built…", "My part in Version 2"). Otherwise impersonal and concrete.
- Short sentences, no hype, no adjectives that cannot be checked. Bold the first sentence of the overview as a thesis.
- Say what a decision cost, not only what it gave ("The cost is real, since a change now goes through me").
- Name limits, simulations and fictional data on the page ("Everything infrastructural is simulated on purpose", "screenshots use fictional subscribers").
- Illustrative terminal sessions carry a caption: "Illustrative: the flow and the sources are real, the wording is an example."
- No em dashes. No emojis except the ⚠️ and ✓ in the two `Callout` titles.

## Components (all in `components/case-study`)

| Component | Use |
| --- | --- |
| `Section`, `SubHeading`, `Paragraph` | Text structure |
| `FeatureList` | Bold lead + sentence, for features, decisions, roles |
| `Callout` | Problem / solution / note |
| `ProcessSteps` | Four numbered tiles: label + hint |
| `Figure`, `FigureGrid` | One image or a pair; images are measured at build time, so give no width/height. Missing files render nothing |
| `Figure narrow` | Phone screenshots |
| `Gallery` | Grid of cropped thumbnails with click-to-zoom, for many small images (see "Layout cases") |
| `Carousel` | Looping slideshow of 3 or more landscape screenshots of one thing (see "Layout cases") |
| `Terminal` | Animated terminal; roles `you`, `agent`, `flag`, `ok`, `dim` |
| `DataTable` | Comparisons, commands, built/next |
| `StatTiles` | Outcome numbers, only numbers that can be counted |
| `Quote` | Dark pull quote, rarely |
| `Takeaways` | Dark closing block |
| `ProjectCTA` | Buttons: live site, source, sibling case study, "Discuss This Project" (`/#contact`) |

Link sibling case studies with plain `<a href="/projects/<slug>">`.

## Layout cases: which component for which images

Choosing the wrong container deforms screenshots. Decide from the shape and the count of the images, not from habit.

| Images | Use | Why |
| --- | --- | --- |
| One landscape screenshot or a diagram | `Figure` | Full width, natural ratio, optional caption |
| Two landscape images that are compared (light/dark, ES/NL, before/after) | `FigureGrid` | Two columns on desktop, stacked on phones |
| Two or three **portrait** phone screenshots | `FigureGrid` with `narrow: true` on each | Each stays phone-width instead of stretching |
| **Three or more landscape screenshots of the same thing** (an admin console, the steps of a flow) | `Carousel` | One image at a time, shown whole at its own ratio, looping, with arrows, dots, pause and click-to-zoom. Three columns of landscape images become illegible slivers |
| A dense set of many small, unrelated images where a grid is the point | `Gallery` | Thumbnails cropped to 16:10 with click-to-zoom. Never for screenshots whose edges matter |
| A flow in steps | `Carousel` with numbered captions ("1. The form…") plus one diagram | The captions tell the story, the diagram shows the system behind it |

Rules:

- **Never put landscape screenshots in three or more columns.** Pairs only; more than two goes to a `Carousel`.
- A `Carousel` takes images of the same ratio (it sizes itself from the first one). Capture all of them at the same viewport, for example 1440x900.
- Autoplay is on, pauses on hover, focus, hidden tab and the Pause button, and is off with reduced motion. Do not build another slider; use `Carousel` and pass `interval` (milliseconds) for longer captions.
- When a component is new or used for the first time, **look at it** at desktop and phone widths before reporting. Examples of what that caught: `Gallery` rendered tall crops because `next/image` writes a `height` attribute and the style did not set `height: auto`.
- Every image must read at its displayed size. If the text in a screenshot is unreadable at column width, crop to the part that matters or capture at a larger scale.

## Feature coverage

Before writing a page, list the project's user-facing flows from its routes, admin pages and API routes (for TheNewPaper: publish an article, delete it, upload photos, subscribe, confirm, send a newsletter, moderate comments, translate). Each flow is either covered on the page or consciously left out. A flow that is the reason the product exists (publishing, checkout, sign-up) gets its **own section** with a diagram and a step-by-step walkthrough captured from the real flow (or a sandbox copy), not one bullet inside a console section.

## Data entry (`data/projects.ts`)

New projects go at the top of the array (newest first). A rewritten existing project keeps the position the user chooses; ask. Fields: `slug`, `title`, `subtitle`, `workTitle`, `label` (uppercase tag: "FULL-STACK", "AUTOMATION", "WEB APP", "WORDPRESS", "BRANDING", "AI TOOLING", "WEB DESIGN & DEV"), one-to-two-sentence `description` ending in "Designed and built end to end." when true, `client` ("Personal Project" or the client), optional `duration` (omit when unknown), `tools` (3 to 5), `thumbnail` with real pixel size, `categories` (`uxui`, `fullstack`, `automation`, `branding`, `wordpress`). When a project stops being WordPress, move it out of `wordpress`.

Thumbnails live at `public/assets/imgs/projects/<slug>/thumbnail.webp` (or `.png`/`.jpg`), 16:9.
