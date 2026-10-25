export const projectCategories = [
    { key: "uxui", label: "UX/UI" },
    { key: "fullstack", label: "Full-stack" },
    { key: "automation", label: "Automation" },
    { key: "branding", label: "Branding" },
    { key: "wordpress", label: "WordPress" },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]["key"];

export interface ProjectImage {
    src: string;
    width: number;
    height: number;
}

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    /** Title shown on the /work cards */
    workTitle: string;
    /** Small uppercase tag above the title on the /work cards */
    label: string;
    description: string;
    client: string;
    /** Omit when unknown; the /work card hides the row. */
    duration?: string;
    tools: string[];
    /** Stored at /assets/imgs/projects/<slug>/thumbnail.<ext> */
    thumbnail: ProjectImage;
    categories: ProjectCategory[];
}

export const projects: Project[] = [
    {
        slug: "siegfried",
        title: "Siegfried",
        subtitle: "Development Control Plane",
        workTitle: "Siegfried - Development Control Plane",
        label: "FULL-STACK & AI",
        description: "A markdown vault with RAG search over Supabase and pgvector, plus a kanban that tracked five satellite apps from idea to launch. Designed and built end to end.",
        client: "Personal Project",
        tools: ["Next.js", "Supabase", "pgvector", "Voyage AI"],
        thumbnail: { src: "/assets/imgs/projects/siegfried/thumbnail.png", width: 1536, height: 864 },
        categories: ["fullstack", "automation"]
    },
    {
        slug: "argus",
        title: "Argus",
        subtitle: "Simulated Operations Console",
        workTitle: "Argus - Operations Console",
        label: "WEB APP",
        description: "A map-first operations dashboard: a seeded simulation of eight assets, a live event feed and a rules engine that explains every recommendation. A Siegfried satellite.",
        client: "Personal Project",
        tools: ["Next.js", "MapLibre", "TypeScript"],
        thumbnail: { src: "/assets/imgs/projects/argus/thumbnail.png", width: 1536, height: 864 },
        categories: ["fullstack", "uxui"]
    },
    {
        slug: "athena",
        title: "Athena",
        subtitle: "Drone Swarm Mission Planner",
        workTitle: "Athena - Mission Planner",
        label: "WEB APP",
        description: "Draw an area on a real map and get a boustrophedon coverage plan split across a fleet, with a kinematic playback of the swarm. A Siegfried satellite.",
        client: "Personal Project",
        tools: ["Next.js", "MapLibre", "Turf.js"],
        thumbnail: { src: "/assets/imgs/projects/athena/thumbnail.png", width: 1536, height: 864 },
        categories: ["fullstack", "uxui"]
    },
    {
        slug: "themis",
        title: "Themis",
        subtitle: "Compliance Findings Viewer",
        workTitle: "Themis - Compliance Findings",
        label: "AI INTERFACE",
        description: "LLM-generated NIST SP 800-171 findings on infrastructure-as-code, shown as a scanner-style log with detail pages and a live paste-and-scan. A Siegfried satellite.",
        client: "Personal Project",
        tools: ["Next.js", "Groq", "TypeScript"],
        thumbnail: { src: "/assets/imgs/projects/themis/thumbnail.png", width: 1536, height: 864 },
        categories: ["fullstack", "uxui"]
    },
    {
        slug: "siren",
        title: "Siren",
        subtitle: "Acoustic Classification Viewer",
        workTitle: "Siren - Acoustic Classifier Viewer",
        label: "ML INTERFACE",
        description: "An interpretation layer over a real vessel-noise classifier: spectrograms, per-class confidence and an honest page on where the model fails. A Siegfried satellite.",
        client: "Personal Project",
        tools: ["Next.js", "Python", "scikit-learn", "librosa"],
        thumbnail: { src: "/assets/imgs/projects/siren/thumbnail.png", width: 1536, height: 864 },
        categories: ["fullstack", "uxui"]
    },
    {
        slug: "janus",
        title: "Janus",
        subtitle: "Developer Platform Portal",
        workTitle: "Janus - Developer Platform",
        label: "FULL-STACK & AI",
        description: "A self-service developer portal in miniature: service catalog, simulated provisioning, pipelines and a RAG assistant over its own docs. A Siegfried satellite.",
        client: "Personal Project",
        tools: ["Next.js", "Voyage AI", "Groq", "shadcn/ui"],
        thumbnail: { src: "/assets/imgs/projects/janus/thumbnail.png", width: 1536, height: 864 },
        categories: ["fullstack"]
    },
    {
        slug: "conquest-brain",
        title: "Conquest Brain",
        subtitle: "YouTube Production Pipeline",
        workTitle: "Conquest Brain - Content Automation",
        label: "AUTOMATION",
        description: "A documented 12-stage workflow with Python tooling and a local dashboard that takes a documentary YouTube episode from idea to 4K master. Designed and built end to end.",
        client: "Personal Project",
        tools: ["Python", "FFmpeg", "Whisper", "LLM tooling"],
        thumbnail: { src: "/assets/imgs/projects/conquest-brain/thumbnail.png", width: 1024, height: 576 },
        categories: ["automation"]
    },
    {
        slug: "teller-framework",
        title: "Teller Framework",
        subtitle: "AI Story Bible for Writers",
        workTitle: "Teller Framework - AI Story Bible",
        label: "AUTOMATION",
        description: "A file-based story bible where markdown nodes declare their own dependencies, so any AI with file access can write consistent, canon-accurate fiction across sessions.",
        client: "Personal Project",
        tools: ["Markdown", "YAML", "Claude Code"],
        thumbnail: { src: "/assets/imgs/projects/teller-framework/thumbnail.png", width: 1024, height: 576 },
        categories: ["automation"]
    },
    {
        slug: "the-long-run",
        title: "The Long Run",
        subtitle: "Brand Identity",
        workTitle: "The Long Run - Brand Identity",
        label: "BRANDING",
        description: "Brand identity for a pet nutrition brand: logo family, color and type system, packaging, social, apparel and a 30-template email system built on one promise, More Days Together.",
        client: "Proventheory",
        tools: ["Brand identity", "Packaging", "Email design"],
        thumbnail: { src: "/assets/imgs/projects/the-long-run/thumbnail.webp", width: 1440, height: 810 },
        categories: ["branding"]
    },
    {
        slug: "rx-library",
        title: "RX Library",
        subtitle: "Telehealth Platform",
        workTitle: "RX Library - Telehealth Platform",
        label: "WEB APP",
        description: "A white-label, multi-tenant telehealth platform built on FHIR: patient app, operator console and clinical portal in one Next.js application. I worked on the frontend and the business logic.",
        client: "Proventheory",
        tools: ["Next.js", "TypeScript", "Medplum (FHIR)", "Playwright", "Terraform"],
        thumbnail: { src: "/assets/imgs/projects/rx-library/thumbnail.png", width: 1600, height: 900 },
        categories: ["fullstack"]
    },
    {
        slug: "rxlibrary-homepage",
        title: "RX Library Website",
        subtitle: "Interactive Marketing Website",
        workTitle: "RX Library - Interactive Marketing Website",
        label: "WEB DESIGN & DEV",
        description: "The marketing website of the RX Library telehealth platform: a 3D-led narrative, a modular product story and interactive role previews. Designed and developed end to end.",
        client: "RX Library",
        tools: ["Next.js", "Tailwind CSS", "Three.js", "Vercel"],
        thumbnail: { src: "/assets/imgs/projects/rxlibrary-homepage/thumbnail.png", width: 1440, height: 810 },
        categories: ["fullstack"]
    },
    {
        slug: "pharmacy-time",
        title: "PharmacyTime",
        subtitle: "WooCommerce Pharmacy Website",
        workTitle: "PharmacyTime - Pharmacy Website",
        label: "WORDPRESS",
        description: "A custom WordPress theme and WooCommerce store for a pharmacy brand, with a Python pipeline that syncs the catalog from Airtable. Designed and developed end to end.",
        client: "Proventheory",
        tools: ["WordPress", "WooCommerce", "PHP", "Python", "Airtable"],
        thumbnail: { src: "/assets/imgs/projects/pharmacy-time/thumbnail.png", width: 1440, height: 810 },
        categories: ["wordpress"]
    },
    {
        slug: "heytides",
        title: "HeyTides",
        subtitle: "Peptide Pharmacy Website",
        workTitle: "HeyTides - Peptide Pharmacy Website",
        label: "WORDPRESS",
        description: "A website for a modern compounding and peptide-focused pharmacy: custom WordPress theme, WooCommerce store and an Airtable-driven catalog. Designed and developed end to end.",
        client: "Proventheory",
        tools: ["WordPress", "WooCommerce", "PHP", "Python", "Airtable"],
        thumbnail: { src: "/assets/imgs/projects/heytides/thumbnail.png", width: 1440, height: 810 },
        categories: ["wordpress"]
    },
    {
        slug: "mesa360",
        title: "Mesa360",
        subtitle: "POS System (UX/UI)",
        workTitle: "Mesa360 - POS System",
        label: "UX/UI",
        description: "A comprehensive Point of Sale system designed to streamline restaurant management. Features inventory tracking, staff management, and real-time analytics.",
        client: "Personal Project",
        duration: "Ongoing",
        tools: ["Figma"],
        thumbnail: { src: "/assets/imgs/projects/mesa360/thumbnail.jpg", width: 1024, height: 585 },
        categories: ["uxui"]
    },
    {
        slug: "teller",
        title: "Teller",
        subtitle: "AI Writing Assistant (UX/UI)",
        workTitle: "Teller - AI Writing Assistant",
        label: "UX/UI",
        description: "AI-powered writing assistant that helps users improve their writing style and tone. Features smart feedback, unified workspace, and visual plotting.",
        client: "Personal Project",
        duration: "4 Weeks",
        tools: ["Figma", "React", "OpenAI API"],
        thumbnail: { src: "/assets/imgs/projects/teller/thumbnail.png", width: 1024, height: 560 },
        categories: ["uxui"]
    },
    {
        slug: "moods",
        title: "MOODS",
        subtitle: "Social Music Platform (UX/UI)",
        workTitle: "MOODS - Social Music Platform",
        label: "UX/UI",
        description: "A social music platform that allows users to share their moods through playlists and discover new music. Pivot from BeatBoop with a focus on community.",
        client: "Personal Project",
        duration: "5 Weeks",
        tools: ["Figma", "React", "Spotify API"],
        thumbnail: { src: "/assets/imgs/projects/moods/thumbnail.png", width: 1024, height: 717 },
        categories: ["uxui"]
    },
    {
        slug: "take-away",
        title: "Take Away",
        subtitle: "Food Delivery App (UX/UI)",
        workTitle: "Take Away - Food Delivery App",
        label: "UX/UI",
        description: "A food delivery app developed to meet the needs of both clients and restaurants combining beauty and simplicity. MVP developed in 5 weeks.",
        client: "No-country",
        duration: "5 Weeks",
        tools: ["Figma", "ShadCN"],
        thumbnail: { src: "/assets/imgs/projects/take-away/thumbnail.png", width: 1024, height: 477 },
        categories: ["uxui"]
    },
    {
        slug: "the-sower-store",
        title: "The Sower Store",
        subtitle: "MERN Ecommerce Platform",
        workTitle: "The Sower Store",
        label: "E-COMMERCE",
        description: "A full-stack e-commerce platform built with the MERN stack, featuring a custom admin dashboard, payment integration, and responsive design.",
        client: "Personal Project",
        duration: "6 Weeks",
        tools: ["React", "Node.js", "MongoDB"],
        thumbnail: { src: "/assets/imgs/projects/the-sower-store/thumbnail.png", width: 2368, height: 1728 },
        categories: ["fullstack"]
    },
    {
        slug: "wissen",
        title: "Wissen",
        subtitle: "E-learning Platform",
        workTitle: "Wissen - Learning Platform",
        label: "E-LEARNING",
        description: "An online learning platform designed to provide a seamless educational experience for students and instructors. Features course management and progress tracking.",
        client: "Personal Project",
        duration: "4 Weeks",
        tools: ["React", "Tailwind CSS"],
        thumbnail: { src: "/assets/imgs/projects/wissen/thumbnail.png", width: 1024, height: 747 },
        categories: ["fullstack"]
    },
    {
        slug: "thinkboard",
        title: "Thinkboard",
        subtitle: "MERN Notes App",
        workTitle: "Thinkboard - Notes App",
        label: "WEB APP",
        description: "A full-stack notes application built with the MERN stack featuring CRUD operations, rate limiting, and responsive design.",
        client: "Personal Project",
        duration: "3 Weeks",
        tools: ["MongoDB", "Express", "React", "Node"],
        thumbnail: { src: "/assets/imgs/projects/thinkboard/thumbnail.png", width: 1024, height: 535 },
        categories: ["fullstack"]
    },
    {
        slug: "lifepoint-church",
        title: "Lifepoint Church",
        subtitle: "From WordPress to a Custom Platform",
        workTitle: "Lifepoint Church - Custom Platform",
        label: "FULL-STACK",
        description: "A church website that grew from a WordPress theme into a four-language platform: a public Next.js site, a content console and a NestJS API, with accessibility, dark mode and Arabic right-to-left support. Built with Oswaldo.",
        client: "Lifepoint Church",
        duration: "2024 - 2026",
        tools: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"],
        thumbnail: { src: "/assets/imgs/projects/lifepoint-church/thumbnail.webp", width: 1536, height: 864 },
        categories: ["fullstack"]
    },
    {
        slug: "carmen-zambrano",
        title: "Carmen Zambrano",
        subtitle: "Journalist Portfolio (WordPress)",
        workTitle: "Carmen Zambrano Portfolio",
        label: "WORDPRESS",
        description: "A professional portfolio designed for a veteran journalist to showcase her extensive work in media. Built with WordPress and Elementor.",
        client: "Carmen Zambrano",
        duration: "4 Weeks",
        tools: ["WordPress", "Elementor"],
        thumbnail: { src: "/assets/imgs/projects/carmen-zambrano/thumbnail.png", width: 1024, height: 576 },
        categories: ["wordpress"]
    }
];
