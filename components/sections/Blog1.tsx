import Link from "next/link"

import BlogPost from "@/components/blog/BlogPost"

export default function Blog1() {
	return (
		<>

			<section className="section-blog-1 position-relative pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Recent blog</h3>
							<span className="fs-5 fw-medium text-200"> Notes from real projects: integrations, retrieval, accessibility and AI-assisted workflows </span>
						</div>
						<div className="col-lg-auto">
							<Link href="/blog-list" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								View more
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<BlogPost limit={3} />
				</div>
			</section>

		</>
	)
}
