import type { Metadata } from "next"
import Layout from "@/components/layout/Layout"
import BlogPost from "@/components/blog/BlogPost"
import Static1 from "@/components/sections/Static1"
import Contact1 from "@/components/sections/Contact1"
export const metadata: Metadata = {
	title: "Blog | Josh D. Rubio",
	description: "Articles from real projects: mock-first integrations, retrieval-only search, accessibility as an engineering constraint, WordPress rebuilds, auditable AI workflows and design systems.",
}

export default function BlogList() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<section className="section-blog-list pt-150">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mx-lg-auto mb-lg-0">
									<div className="text-center">
										<span className="btn btn-gradient d-inline-block text-uppercase">
											Blog
										</span>
										<h1 className="ds-3 mt-3 mb-4 text-300">
											<span className="text-dark">Notes from the work:</span> engineering, accessibility and AI-assisted tooling
										</h1>
										<p className="text-300 fs-5 mb-0">
											Articles drawn from my own projects: what we built, what we decided and what I would check next time.
										</p>
									</div>
								</div>
							</div>
							<BlogPost />
						</div>
					</section>
					<div className="pb-120" />
					<Static1 />
					<Contact1 />
				</div>
			</Layout>
		</>
	)
}