import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Brands1 from "@/components/sections/Brands1"
import Contact1 from "@/components/sections/Contact1"
import Home1 from "@/components/sections/Home1"
import Projects1 from "@/components/sections/Projects1"
import Service1 from "@/components/sections/Service1"
import Skills2 from "@/components/sections/Skills2"
import Static1 from "@/components/sections/Static1"
import Resume1 from "@/components/sections/Resume1"
import Testimonials1 from "@/components/sections/Testimonials1"
import { getDictionary } from "@/i18n/dictionaries"
import type { Locale } from "@/i18n/config"

export default function Home({ params }: { params: { lang: Locale } }) {
	const { home } = getDictionary(params.lang)

	return (
		<>
			<Layout headerStyle={1} footerStyle={1} translated>
				<Home1 t={home.hero} />
				<Static1 />
				<Service1 t={home.services} />
				<Projects1 t={home.projects} />
				<Resume1 t={home.resume} />
				<Skills2 />
				<Brands1 t={home.brands} />
				<Testimonials1 t={home.testimonials} />
				<Blog1 t={home.blog} />
				<Contact1 />
			</Layout>
		</>
	)
}
