export interface ServiceDetail {
	title: string
	tagline: string
	details: readonly { label: string; text: string }[]
}

const tagline = "Creative. Unique. Reality."

export const serviceDetails: readonly ServiceDetail[] = [
	{
		title: "UI/UX Design",
		tagline,
		details: [
			{ label: "User Research", text: "Interviews, audits and competitor analysis to understand who the product is for and what gets in their way." },
			{ label: "Wireframing and Prototyping", text: "Low-fidelity flows first, then interactive prototypes that make every decision testable before anything is built." },
			{ label: "User Testing", text: "Usability sessions with real people, so the design is judged by behavior and not by opinion." },
		],
	},
	{
		title: "Mobile App Design",
		tagline,
		details: [
			{ label: "Cross-Platform Design", text: "Interfaces that feel native on iOS and Android while sharing one consistent design system." },
			{ label: "Interactive Prototypes", text: "Clickable prototypes with real flows, states and transitions, ready to test with users and hand to developers." },
			{ label: "Consistent Branding", text: "Typography, color and components that keep the app recognizably yours on every screen." },
		],
	},
	{
		title: "Brand Identity Design",
		tagline,
		details: [
			{ label: "Visual Identity", text: "Logo, color palette and typography built as a system instead of a one-off asset." },
			{ label: "Design Systems", text: "Reusable components and clear guidelines that keep every touchpoint consistent as the brand grows." },
			{ label: "Brand Applications", text: "Packaging, social posts, web and print pieces that carry the identity from a pouch to an inbox." },
		],
	},
	{
		title: "Web Development",
		tagline,
		details: [
			{ label: "Custom Websites", text: "Responsive sites built with Next.js, WordPress or a custom stack, shaped around your content and goals." },
			{ label: "E-commerce", text: "WooCommerce and custom storefronts with catalogs, checkout and the integrations a real business needs." },
			{ label: "Performance and Accessibility", text: "Fast, accessible, SEO-ready pages, with the engineering to keep them that way." },
		],
	},
]
