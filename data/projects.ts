export interface Project {
    id: number;
    title: string;
    subtitle: string;
    slug: string;
    image: string;
    categories: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Mesa360",
        subtitle: "POS System (UX/UI)",
        slug: "mesa360",
        image: "/assets/imgs/projects/mesa360/hero.jpg",
        categories: ["webapp"]
    },
    {
        id: 2,
        title: "Teller",
        subtitle: "AI Writing Assistant (UX/UI)",
        slug: "teller",
        image: "/assets/imgs/work/img-teller.png",
        categories: ["webapp"]
    },
    {
        id: 3,
        title: "MOODS",
        subtitle: "Social Music Platform (UX/UI)",
        slug: "moods",
        image: "/assets/imgs/work/img-moods.png",
        categories: ["webapp"]
    },
    {
        id: 4,
        title: "Take Away",
        subtitle: "Food Delivery App (UX/UI)",
        slug: "take-away",
        image: "/assets/imgs/work/img-takeaway.png",
        categories: ["webapp"]
    },
    {
        id: 5,
        title: "The Sower Store",
        subtitle: "MERN Ecommerce Platform",
        slug: "the-sower-store",
        image: "/assets/imgs/work/img-thesower.png",
        categories: ["ecommerce", "webapp"]
    },
    {
        id: 6,
        title: "Wissen",
        subtitle: "E-learning Platform",
        slug: "wissen",
        image: "/assets/imgs/work/img-wissen.png",
        categories: ["elearning", "webapp"]
    },
    {
        id: 7,
        title: "Thinkboard",
        subtitle: "MERN Notes App",
        slug: "thinkboard",
        image: "/assets/imgs/work/img-thinkboard.png",
        categories: ["webapp"]
    },
    {
        id: 8,
        title: "Lifepoint Church",
        subtitle: "WordPress Website",
        slug: "lifepoint-church",
        image: "/assets/imgs/projects/lifepoint.png",
        categories: ["wordpress"]
    },
    {
        id: 9,
        title: "Carmen Zambrano",
        subtitle: "Journalist Portfolio (WordPress)",
        slug: "carmen-zambrano",
        image: "/assets/imgs/work/img-carmen.png",
        categories: ["wordpress"]
    }
];
