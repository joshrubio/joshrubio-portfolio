export interface PricingPlan {
	name: string
	price: string
	unit: string
	features: readonly string[]
}

export const pricingPlans: readonly PricingPlan[] = [
	{
		name: "basic",
		price: "$49",
		unit: "/Hour",
		features: [
			"Require your wireframe",
			"Design using Figma, Framer",
			"Develop with Webflow, React, WordPress, Laravel/PHP",
			"Remote/Online collaboration",
			"Available on business days, no weekends",
			"6 months of support",
		],
	},
	{
		name: "Business",
		price: "$99",
		unit: "/Hour",
		features: [
			"No wireframe needed",
			"Design using Figma, Framer",
			"Develop with Webflow, React, WordPress, Laravel/PHP",
			"Remote/Online collaboration",
			"Available on business days, no weekends",
			"12 months of support",
			"Your project is always a priority",
			"Customer care gifts included",
		],
	},
]

const placeholderAnswer =
	"You may also realize cost savings from your energy efficient choices in your custom home. Federal tax credits for some green materials can allow you to deduct as much."

export interface FaqEntry {
	question: string
	answer: string
}

export const faqEntries: readonly FaqEntry[] = [
	"What is the main focus of your portfolio?",
	"Will you include a blog or other written content?",
	"How much do your services cost?",
	"How long does it take to see results?",
	"Do you offer ongoing support?",
	"Do you work with businesses in my industry?",
].map((question) => ({ question, answer: placeholderAnswer }))
