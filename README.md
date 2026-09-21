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
│   ├── projects/<slug>/   # Individual project pages
│   ├── work/              # Portfolio page (cards generated from data/projects.ts)
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── elements/         # Reusable UI elements (ProjectCard, PortfolioFilter...)
│   └── sections/         # Page sections
├── data/
│   └── projects.ts       # Single source of truth for all projects
├── public/               # Static assets
│   └── assets/imgs/projects/<slug>/   # Thumbnail and case-study images per project
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## ➕ Adding a Project

Projects are defined once in `data/projects.ts` and rendered automatically in the home grid (with filters) and in `/work`.

1. **Add images** under `public/assets/imgs/projects/<slug>/`. The card image must be named `thumbnail.png` (or `.jpg`); put any case-study images in the same folder.
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
       categories: ["uxui"]                    // uxui | fullstack | wordpress
   }
   ```
   `width` and `height` are the real pixel dimensions of the thumbnail (used by `next/image` to reserve space).
3. **Create the detail page** at `app/projects/<slug>/page.tsx`. Copy a similar existing page (e.g. `thinkboard` for code projects, `mesa360` for UX/UI case studies).
4. **New filter category?** Add it to `projectCategories` in `data/projects.ts`; the filter buttons are generated from that list.

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
