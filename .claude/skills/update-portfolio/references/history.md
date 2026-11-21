# History of passes and lessons

Learned from `git log` of this repo. **Append a new entry at the end of every pass** (date, what was added, what was learned, what was left open). Fix wrong entries instead of piling up contradictions.

## Passes so far

| Date | Commits | What happened | Lesson |
| --- | --- | --- | --- |
| 2025-11 | `2d08e70`, `fb224f4`, `6dc4f42` | Template portfolio, project thumbnails, README | Started from a purchased Next.js template (Bootstrap-style classes: `text-300`, `bg-6`, `bg-light`, `btn-gradient`). Reuse those classes rather than adding CSS |
| 2026-03 | `221d350`..`fe11635` | Skills icons, light/dark contrast fixes, Take Away bento gallery | Every new page must be checked in **both themes**; forced colour classes fixed contrast issues. Dark is the default |
| 2026-09-21 | `90564b7` | Single source of truth: `data/projects.ts` generates home grid, `/work` cards and filters; images moved to `public/assets/imgs/projects/<slug>/` | Never hand-write cards. Add data, the rest follows |
| 2026-09-22 | `6e7a1dc` | Six projects (Conquest Brain, Teller Framework, The Long Run, RX Library, RX Library Website, PharmacyTime, HeyTides) and the shared components in `components/projects/ProjectPage.tsx`; `util/image-size.ts` | Build pages from shared blocks. `Figure` measures images at build time. New categories (`automation`, `branding`) were added when a project did not fit |
| 2026-09-22 | `d744075` | RX Library Website rewritten section by section with one screenshot each; a role was corrected | **Confirm the role with the user** for client work ("brand designer, under supervision"). Replace superseded images in the same commit |
| 2026-10-08 | `064f25f`, `ba44d87`, `99df723` | Social preview image, favicon, `.claude/launch.json` | Metadata and the preview config exist; use `portfolio-dev` to verify |
| 2026-10-25 | `ccaabdb` | Siegfried and five satellite apps: real WebP screenshots of each app, diagrams in the light "Claude" style, newest first | Real captures beat mockups. Private repos get no GitHub link |
| 2026-10-25 | `800d957` | All diagrams redrawn in the lighter style: ivory background, one terracotta accent, fewer words | **The diagram style is now fixed** (`assets.md`). Keep file names stable when redrawing so pages need no edits |
| 2026-10-25 | `813be1a` | GitHub badges and buttons added when the satellite repos were made public | Re-check repo visibility on each pass |
| 2026-10-25 | `932763f` | Lifepoint Church rewritten around the current version, with a table of contents, anchors, an architecture diagram, an evolution section and a v1/v2 comparison; WordPress original summarised | **Pattern for replacing an old project**: current version first, evolution after, same slug, `TableOfContents` for long pages, credit teammates |
| 2026-10-25 | `3a86ca1`, `7dc5abb`, `4565def` | Resume updated from the CV, six blog posts drawn from the projects (`data/posts`), new Mesa360 thumbnail | Optional follow-ups after a pass: resume, a blog post about the new work, thumbnails |
| 2026-11-20 | not committed at the time of writing | Added Learn by Doing, The New Paper and Pressroom; rewrote Carmen Zambrano around the Next.js rebuild; created this skill | See below |

| 2026-11-21 | not committed at the time of writing | Added Pan de Vida (multilingual outreach site for a Christian community, AR/ES/EN, RTL) in third position | See "Pass of 2026-11-21" |

## Pass of 2026-11-21 in detail

- Source: local folder `D:\Coding\Pandevida`, repo `joshrubio/Pandevida` (public), live at `www.pandevidaparati.com` (also `pandevida.vercel.app`). Next.js 16, React 19, Tailwind 4, Framer Motion, Resend; three JSON dictionaries; Arabic is the default locale (the bare domain redirects to `/arabic`, with no browser-language negotiation although `PROJECT_CONTEXT.md` says otherwise: **trust the code, not the context file**).
- The user chose: client work ("Pan de Vida", role Design & Development, no people named), **third position** in the grid (after Learn by Doing and Lifepoint Church). Asked before writing, as the rules say.
- Assets: real captures of the live site at 1440x900 (hero, Bible + Jesus, Good News, Who We Are, contact, video collection), Arabic and Spanish versions, phone captures at dpr 2 (Arabic hero, menu with language buttons). Three diagrams (structure, languages, contact). Thumbnail is the hero cropped to 16:9. The footer of the live site shows the community's real emails and phones: **it was never captured**; sections were chosen with `scrollY` to stay above it, and `shot.mjs` masks contact data anyway. The form was not submitted on the live site.
- Sections of the page: Overview, What It Needed to Do, Structure, The Page (a `Carousel` of five captures), Three Languages Right to Left, Contact, Key Decisions, Outcome and Role.
- Things noticed and left out of the page on purpose (reported to the user instead): the contact action has no spam protection or rate limit and sends from Resend's test sender; `PROJECT_CONTEXT.md` says Next.js 15 while `package.json` says 16; some small labels in the video section are hard-coded in English; Google Analytics is loaded from the root layout.
- **Lesson:** props that take plain strings (`FeatureList` `text`, `title`, captions) do not decode HTML entities, so `&apos;` printed literally. Use a plain `'` inside strings and keep `&apos;` only in JSX text.

## Pass of 2026-11-20 in detail

- Sources: GitHub repos `joshrubio/learn-by-doing`, `thenewpaper`, `pressroom` and `carmenmazambrano.nl` (private). **Local folder names do not match repo names**: the `thenewpaper` repo is checked out in the local folder `carmenzambrano`; `carmenmazambrano.nl` is the portfolio of the same journalist (the older WordPress `carmenzambrano.nl` is the page that was rewritten, slug `carmen-zambrano`).
- Real captures of the live sites (`thenewpaper.nl`, `carmenmazambrano.nl`) with contact data masked; the admin console captured from a sandbox copy with fictional subscribers and comments; the Learn by Doing study space captured from a standalone copy with synthetic lessons about this portfolio.
- Pressroom has no UI and holds real contacts in gitignored folders: its page uses diagrams, a terminal and a card built from its fictional example only.
- Twelve diagrams plus the shared `ecosystem.png` (one journalist, three pieces of software) in three folders.
- Environment quirks met: git "dubious ownership" (use `git -c safe.directory=...` per command, do not change global config); the Browser pane may be hidden, so verify with headless Chrome through `puppeteer-core`; every `/projects/*` page logs a 404 for `footer-1/background.png` (relative CSS URL, not caused by new pages).
- **Grid position is the user's call.** The default is newest first, but after this pass the user asked to swap the Carmen Zambrano and Lifepoint Church entries, so Lifepoint sits second and Carmen last. Ask where a rewritten project should go instead of moving it to the top by default.
- **The counter strip** (`components/sections/Static1.tsx`) is derived from `data/projects.ts` (total, web apps = `uxui` or `fullstack`, automation, WordPress), so a pass changes it automatically. "Years of experience" counts full years since January 2022 (`EXPERIENCE_START`) and grows by itself. The strip has five items: one row from `xl`, three plus two on `lg`. If a new category ever needs a counter, add it there and recheck the wrapping at 1100 and 1280 px.
- **Corrections the user made after the first delivery** (each became a rule): (1) three landscape admin screenshots in a `Gallery` rendered as tall slivers, so the `Carousel` component and the "Layout cases" table exist; (2) the TheNewPaper page treated publishing as one bullet although it is the product's main flow, so there is now a "Publishing an Article" section and the "Feature coverage" rule; (3) the user chose where rewritten projects sit in the grid.
- **Side change in the TheNewPaper repo during the same session:** the phone navigation stacked its links, so it was replaced by a burger menu (`src/components/ui/MobileMenu.tsx`, new `nav.menu` and `nav.closeMenu` keys in the three dictionaries). The portfolio's phone screenshots of the newspaper show the new menu, so they only match the live site after that change is deployed. When a pass changes a project's UI, retake its screenshots afterwards and say whether the live site matches.
- Sandbox publishing run: the real publish flow can be exercised end to end on a sandbox copy with `PUBLISH_MODE=local` (it writes article files and photos to the copy, nothing to GitHub). Titles must be new on every run (a repeated title is refused). Hide the Next.js dev badge (`nextjs-portal`) before capturing.
- **Second session, 2026-11-20 (portfolio only):** (1) `/work` cards had a fixed 450 px image height that cropped thumbnails; the image box is now 16:9 on desktop and phones. (2) The site became bilingual: English at the existing URLs and Spanish under `/es` (see `references/i18n.md`). The user chose "base and home" as the scope, a translate button **in the navbar** (first click translates and shows a module, the browser remembers the language, and a module offers to translate pages in another language, so there is no permanent bar), and a notice when Spanish is selected. A first version with a strip above the navbar was rejected. (3) The hero technology strip hover was broken: the dark-theme rule forced `border: 0 !important`, so the gradient ring never showed and only the border colour crept in late; replaced by a fading ring and a small lift. (4) Home grid order was curated: Teller Framework, MOODS and Take Away were moved up, interleaved between the Siegfried satellites and never side by side. The order is data (`data/projects.ts`) so `/work` follows it too.
- **Lessons from the i18n work:** a matcher string written through a shell heredoc lost a backslash and silently matched nothing (check with `curl` for `x-middleware-rewrite`); relative asset URLs break under `/es`; adding controls to the navbar overflowed phones, so the language switch is one small button below 576 px, the brand shrinks, and in the 992 to 1099 px range the social icons are hidden; the template had pre-existing issues that were left alone and reported: placeholder testimonials, a contact form with `action="#"`, "william.design" in the mobile menu (fixed because it was a visible leftover).
- Left open: no blog post, no Resume/Skills changes, README only touched where it described the workflow; Pressroom's README says "early scaffold", which the page repeats.

## Project sources and relationships

| Project | Repo | Visibility | Live | Notes |
| --- | --- | --- | --- | --- |
| Siegfried + Janus, Siren, Themis, Athena, Argus | `joshrubio/<Name>` | public (made public 2026-10-25) | | Satellites of Siegfried |
| Conquest Brain, Teller Framework | `Conquest-Brain`, `Teller` | public | | Automation, no UI |
| Learn by Doing | `learn-by-doing` | public | | Claude Code plugin, v0.9.0 |
| Pressroom | `pressroom` | public | | Early scaffold; contacts private and gitignored |
| The New Paper | `thenewpaper` | public | thenewpaper.nl | Local folder `carmenzambrano` |
| Carmen Zambrano portfolio | `carmenmazambrano.nl` | private | carmenmazambrano.nl | Replaced the WordPress site |
| RX Library, PharmacyTime, HeyTides, The Long Run | client work (Proventheory) | private | | Describe the work, not internal data |
| Lifepoint Church | built with Oswaldo | | iglesialifepoint.com | v1 WordPress, v2 custom platform |
| Pan de Vida | `Pandevida` | public | pandevidaparati.com | Local folder `Pandevida`; client work; footer of the live site shows real contacts, never capture it |
