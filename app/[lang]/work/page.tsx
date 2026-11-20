
import Layout from "@/components/layout/Layout"
import Link from "@/components/elements/LocaleLink"
import ProjectCard from "@/components/elements/ProjectCard"
import Static1 from "@/components/sections/Static1"
import Contact1 from "@/components/sections/Contact1"
import { localizeProject, projects } from "@/data/projects"
import { getDictionary } from "@/i18n/dictionaries"
import { hasLocale, type Locale } from "@/i18n/config"

export function generateMetadata({ params }: { params: { lang: string } }) {
	const { work } = getDictionary(hasLocale(params.lang) ? params.lang : "en")
	return { title: work.metaTitle, description: work.metaDescription }
}

export default function Work({ params }: { params: { lang: Locale } }) {
	const { work, card } = getDictionary(params.lang)
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} translated>
				<div>
					<section className="section-work pt-120 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase"> {work.badge} </Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">{work.heading[0]} <span className="text-300">{work.heading[1]}</span> {work.heading[2]} <span className="text-300">{work.heading[3]}</span></h3>
										<p className="text-300 fs-5">{work.intro}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="card-scroll mt-8">
									<div className="cards">
										{projects.map((project) => (
											<ProjectCard key={project.slug} project={localizeProject(project, params.lang)} labels={card} />
										))}
									</div>
								</div>
							</div>
						</div>
					</section>

					{/*Static 1*/}
					<Static1 />

					{/* Contact 1*/}
					<Contact1 />
				</div>
			</Layout>
		</>
	)
}
