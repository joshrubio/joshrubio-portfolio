# Josh Rubio - Portfolio

A modern, responsive portfolio website showcasing full-stack development projects and technical expertise. Built with Next.js 14, TypeScript, and featuring smooth animations and an elegant user interface.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, and TypeScript
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: Enhanced user experience with GSAP and WOW.js animations
- **Project Showcase**: Filterable portfolio grid with isotope layout
- **Interactive UI**: Swiper carousels, count-up animations, and smooth scrolling
- **SEO Optimized**: Server-side rendering with Next.js for optimal performance
- **Fast Performance**: Optimized images and code splitting for quick load times

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 14.1.3
- **Language**: TypeScript 5
- **UI Library**: React 18

### Styling & Animation
- **CSS**: Custom CSS with responsive design
- **Animations**: GSAP, WOW.js
- **UI Components**: Swiper, React CountUp, Isotope Layout

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/joshrubio/joshrubio-portfolio.git
   cd joshrubio-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
josh-portfolio/
├── app/                    # Next.js app directory
│   └── [lang]/            # Every page lives here: en (no prefix) and es
│       ├── projects/<slug>/   # Individual project pages
│       ├── work/              # Portfolio page (cards generated from data/projects.ts)
│       └── page.tsx           # Home page
├── components/            # React components
│   ├── elements/         # Reusable UI elements (ProjectCard, PortfolioFilter...)
│   └── sections/         # Page sections
├── data/
│   ├── projects.ts       # Single source of truth for all projects
│   └── projects.es.ts    # Spanish text of the project cards
├── i18n/                 # Languages: config, dictionaries (en.ts, es.ts), provider, preferences
├── middleware.ts         # Serves English without a prefix and Spanish under /es
├── public/               # Static assets
│   └── assets/imgs/projects/<slug>/   # Thumbnail and case-study images per project
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## ➕ Adding a Project

Projects are defined once in `data/projects.ts` and rendered automatically in the home grid (with filters) and in `/work`.

1. **Add images** under `public/assets/imgs/projects/<slug>/`. The card image must be named `thumbnail.webp` (or `.png`/`.jpg`); put any case-study images in the same folder.
2. **Add an entry** to the `projects` array in `data/projects.ts`:
   ```ts
   {
       slug: "my-project",
       title: "My Project",                    // home grid title
       subtitle: "Short description",          // home grid subtitle
       workTitle: "My Project - Short name",   // /work card title
       label: "UX/UI",                         // tag above the /work card title
       description: "One or two sentences.",
       client: "Personal Project",
       duration: "4 Weeks",
       tools: ["Figma", "React"],
       thumbnail: { src: "/assets/imgs/projects/my-project/thumbnail.png", width: 1024, height: 576 },
       categories: ["uxui"]                    // uxui | fullstack | automation | branding | wordpress
   }
   ```
   `width` and `height` are the real pixel dimensions of the thumbnail (used by `next/image` to reserve space).
3. **Create the detail page** at `app/[lang]/projects/<slug>/page.tsx`. Build it with the shared components in `components/projects/ProjectPage.tsx` (`ProjectHeader`, `Section`, `Callout`, `ProcessSteps`, `Figure`, `FigureGrid`, `Terminal`, `Takeaways`...); see `conquest-brain`, `teller-framework`, `rx-library`, `lifepoint-church` or `the-new-paper` for complete examples. Images referenced with `Figure` are read from `public/` at build time (PNG, JPEG and WebP), so no `width`/`height` is needed.
4. **New filter category?** Add it to `projectCategories` in `data/projects.ts`; the filter buttons are generated from that list.
5. **Spanish card text.** Add the project to `data/projects.es.ts` (`label`, `subtitle`, `workTitle`, `description`) so its cards read in Spanish. Without it the cards fall back to English. The case-study page itself is English only.

## 🌐 Languages

The site has English (default, no prefix, so every existing URL is unchanged) and Spanish under `/es`. `middleware.ts` rewrites unprefixed paths to `/en/...` and redirects `/en/...` to the unprefixed path; the pages live in `app/[lang]/`.

- **Translated:** the site chrome (menu, footer, off-canvas, switch) and the home page, plus the `/work` header and the project cards. Strings live in `i18n/dictionaries/en.ts` and `es.ts`, which must have the same shape (TypeScript enforces it). Internal links go through `components/elements/LocaleLink.tsx`, which adds the `/es` prefix.
- **English only:** case studies, blog posts and the template pages (services, pricing...). Their chrome is in the chosen language.
- **Switch:** `EN | ES` in the navbar. Choosing Spanish shows a module saying that most content is English and where the translate button is.
- **Translate button (navbar):** translates the content of the current page with the browser's built-in Translator API (on the device, Chrome 138+ and desktop Edge), or opens Google Translate where the API is missing. The first click also shows a module explaining it. The browser remembers the visitor's language (`localStorage`: `preferred-language`); when a later page is in another language, a module offers to translate it (with "always translate" and "not now" options). No extra permanent button is needed.
- **Adding a language:** add it to `i18n/config.ts`, create its dictionary and its `projects.<code>.ts`, and check the middleware.

### Adding projects with Claude Code

The workflow above is also captured as a project skill, `.claude/skills/update-portfolio/`. It holds the structure and tone of the case studies, how screenshots and diagrams are produced, a privacy checklist and a log of earlier passes, and it is updated at the end of each pass. Ask Claude Code to "add my new projects to the portfolio" and it will read it first.

### Manual Deployment

```bash
# Build the project
npm run build

# Start the production server
npm start
```

## 🔧 Configuration

The project uses Next.js 14 with TypeScript. Key configuration files:

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.mjs` - Next.js configuration
- `data/projects.ts` - Project data and filter categories

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **GitHub**: [@joshrubio](https://github.com/joshrubio)
- **Portfolio**: [Live Site](https://joshrubio.es)

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add contact form with email integration
- [ ] Include resume download functionality
- [ ] Add more project case studies

---

Built with ❤️ using Next.js and TypeScript
