
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ProjectCard from "@/components/elements/ProjectCard"
import Static1 from "@/components/sections/Static1"
import Contact1 from "@/components/sections/Contact1"
import { projects } from "@/data/projects"

export const metadata = {
	title: "Work | Josh D. Rubio",
	description: "A selection of UX/UI case studies, full-stack applications and WordPress websites by Josh D. Rubio.",
}

export default function Work() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-work pt-120 pb-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto">
									<div className="text-center">
										<Link href="/#" className="btn btn-gradient d-inline-block text-uppercase"> recent Work </Link>
										<h3 className="ds-3 mt-3 mb-4 text-dark">Explore <span className="text-300">My Latest Work and Discover the</span> Craftsmanship Behind <span className="text-300">Each Design</span></h3>
										<p className="text-300 fs-5">
											Explore my latest work and discover the craftsmanship behind each design: <br />
											a detailed look into how I bring innovation and creativity to life
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="card-scroll mt-8">
									<div className="cards">
										{projects.map((project) => (
											<ProjectCard key={project.slug} project={project} />
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
