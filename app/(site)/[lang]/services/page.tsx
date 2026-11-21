import { notFound } from "next/navigation"

import { PageHero } from "@/components/molecules/PageHero"
import { ClosingSections } from "@/components/organisms/ClosingSections"
import { ServicesList } from "@/components/organisms/ServicesList"
import { serviceDetails } from "@/data/services"
import { hasLocale } from "@/i18n/config"

interface ServicesProps {
	params: Promise<{ lang: string }>
}

export default async function Services({ params }: ServicesProps) {
	const { lang } = await params
	if (!hasLocale(lang)) notFound()

	return (
		<>
			<PageHero
				label="My Services"
				title="Transforming Ideas into Intuitive Designs for Engaging User"
				accent="Experiences"
				summary="With expertise in mobile app and web design, I transform ideas into visually stunning and user-friendly interfaces that captivate and retain users. Explore my work and see design in action."
			/>
			<ServicesList services={serviceDetails} />
			<ClosingSections lang={lang} />
		</>
	)
}
