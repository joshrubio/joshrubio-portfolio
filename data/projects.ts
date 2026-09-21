export const projectCategories = [
    { key: "uxui", label: "UX/UI" },
    { key: "fullstack", label: "Full-stack" },
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
    duration: string;
    tools: string[];
    /** Stored at /assets/imgs/projects/<slug>/thumbnail.<ext> */
    thumbnail: ProjectImage;
    categories: ProjectCategory[];
}

export const projects: Project[] = [
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
        subtitle: "WordPress Website",
        workTitle: "Lifepoint Church Website",
        label: "WORDPRESS",
        description: "A welcoming, content-driven WordPress website designed and developed for a growing evangelical community. Focused on clarity and accessibility.",
        client: "Lifepoint Church",
        duration: "4 Weeks",
        tools: ["WordPress", "PHP", "CSS"],
        thumbnail: { src: "/assets/imgs/projects/lifepoint-church/thumbnail.png", width: 1024, height: 684 },
        categories: ["wordpress"]
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
