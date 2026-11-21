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
			{ label: "User Research", text: "Conducting thorough user research…" },
			{ label: "Wireframing and Prototyping", text: "Designing detailed wireframes…" },
			{ label: "User Testing", text: "Implementing comprehensive user testing…" },
		],
	},
	{
		title: "Mobile App Design",
		tagline,
		details: [
			{ label: "Cross-Platform Design", text: "Creating designs that work smoothly…" },
			{ label: "Interactive Prototypes", text: "Developing interactive prototypes…" },
			{ label: "Consistent Branding", text: "Ensuring consistent branding…" },
		],
	},
	{ title: "Brand Identity Design", tagline, details: [] },
	{ title: "Web Development", tagline, details: [] },
]
