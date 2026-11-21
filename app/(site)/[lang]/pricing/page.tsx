import { notFound } from "next/navigation"

import { PageHero } from "@/components/molecules/PageHero"
import { ClosingSections } from "@/components/organisms/ClosingSections"
import { PricingPlans } from "@/components/organisms/PricingPlans"
import { faqEntries, pricingPlans } from "@/data/pricing"
import { hasLocale } from "@/i18n/config"

interface PricingProps {
	params: Promise<{ lang: string }>
}

export default async function Pricing({ params }: PricingProps) {
	const { lang } = await params
	if (!hasLocale(lang)) notFound()

	return (
		<>
			<PageHero
				label="My Pricing"
				title="Affordable Solutions for Every"
				accent="Budget"
				summary="Flexible Plans Tailored to Meet Your Unique Needs, Ensuring High-Quality Services Without Breaking the Bank"
			/>
			<PricingPlans plans={pricingPlans} faq={faqEntries} />
			<ClosingSections lang={lang} />
		</>
	)
}
