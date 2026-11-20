# Assets: screenshots, diagrams, thumbnails

All tooling lives in a scratch folder, not in the repo. Install once there:

```bash
npm i puppeteer-core sharp
```

The scripts in `../scripts/` are working examples from the last pass. Copy them to the scratch folder and adapt; they use Chrome at its default Windows path (change `executablePath` elsewhere). Writes go to the scratch folder, then to `public/assets/imgs/projects/<slug>/`.

## Image conventions (from the history)

| Kind | Format | Notes |
| --- | --- | --- |
| Real screenshots | `screen-<what>.webp`, quality about 82 | 1440 px wide for desktop, 1080 to 1280 for lesson/app crops. Phones: capture with `dpr: 2`, resize to 560 px wide, show with `<Figure narrow>` |
| Thumbnail | `thumbnail.webp` (older ones `.png`) | 16:9, real pixel size goes in `data/projects.ts` |
| Diagrams | `<name>.png` (palette PNG, about 40 to 60 KB) | 1800 px wide, see below |
| Dark and light variants | `screen-<x>-dark.webp` / `-light.webp` | Show both when the app has two themes |

When an old image is replaced, `git rm` it in the same pass.

## Screenshots of real things

- Prefer **real captures** of live sites or locally running apps (`scripts/shot.mjs`: viewport, full page, scroll position, scroll-through to trigger reveal animations, clicks, wheel zoom, dark mode, localStorage seeding such as `theme`).
- Reveal-on-scroll pages: scroll through the page first or sections stay invisible. Use `scrollY` for section shots.
- Persisted state leaks between jobs in one browser (a theme set by one job applies to the next). Set `storage` explicitly on each job.
- **Redaction is built into `shot.mjs`**: emails and phone numbers in visible text are replaced before every screenshot. Extend it when a page shows other personal data. Check each capture by eye.
- **Hide framework overlays** before capturing a dev server (Next.js: inject `nextjs-portal{display:none!important}` through `evaluateOnNewDocument`, guarding for `document.documentElement` being null on the first call).
- **Capture a flow in steps** at one fixed viewport (1440x900 for desktop) so the images can go in a `Carousel`: the empty form, the filled one, the preview, the progress state, the success state and the result.
- **Admin consoles and anything with user data**: never capture the real thing. Copy the project to the scratch folder **without** `.git`, `.env*`, data folders and `node_modules`, reinstall, seed fictional data (the project's own data layer, e.g. JSON files), run it on a spare port with dummy secrets, log in with a script, capture, stop the server. Say "fictional data" on the page.
- Apps with no UI of their own that run inside another host (Claude Artifacts, for example): build a standalone copy with a stub of the host API and synthetic data (`scripts/study-space-demo-example.mjs`). Use lessons or records about public code, never other projects' content.

## Diagrams in the house style

The look established in `ccaabdb` and `800d957`: ivory background `#faf9f5`, white cards with a thin warm border, **one** terracotta accent (`#d9694a`) used for the kicker and for the one or two cards that matter, a serif title (Source Serif 4), Inter for text, upper-case micro labels, light gray arrows, very little text per box. Colored dots only to tell sibling projects apart.

`scripts/diagram-lib.mjs` implements it: `page({kicker, title, sub, body})`, `row([cards])` with arrows between cards, `card({eb, t, d, accent, dot, pills})`, `.grid`, `.note`, `.pills`, `render(name, html, outDir)`. `scripts/diagram-example.mjs` has twelve finished diagrams to copy from (flows in two rows, three-card groups, status lists, public/private split).

Rules: one idea per diagram; a title that says the point ("Articles live in git, people live in Redis"); 4 cards per row at most (3 for longer text); no diagram that only repeats a list; read each PNG after rendering and fix wrapping.

Reuse the same diagram across sibling pages when it shows a shared ecosystem (`ecosystem.png` in three folders), with a page-specific caption.

## Thumbnails for projects with no UI

A 1440x810 card in the same style (`scripts/thumbnail-card-example.mjs`): serif title on the left, on the right a rendered example of the project's central artifact (a release file, a note). Use only the project's fictional examples.

## Convert

```js
sharp(src).webp({ quality: 82 }).toFile(out)                          // screenshots
sharp(src).png({ palette: true, quality: 90 }).toFile(out)            // diagrams
sharp(src).extract({ left, top, width, height })                      // crops
```
