import Image from "next/image"
import Link from "next/link"

import type { Project } from "@/data/projects"

export default function ProjectCard({ project }: { project: Project }) {
	const href = `/projects/${project.slug}`

	return (
		<div className="card-custom" data-index={0}>
			<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
				<div className="card__image-container zoom-img position-relative">
					<Image
						className="card__image"
						style={{ height: '450px', objectFit: 'cover', width: '100%' }}
						src={project.thumbnail.src}
						width={project.thumbnail.width}
						height={project.thumbnail.height}
						sizes="(min-width: 1200px) 1200px, 100vw"
						alt={project.title}
					/>
					<Link href={href} className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
				</div>
				<div className="card__content px-md-4 px-3">
					<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
						<Link href={href} className="card_title_link">
							<p className="text-primary-1 mb-0 mb-md-2">{project.label}</p>
							<h3 className="fw-semibold">{project.workTitle}</h3>
						</Link>
						<Link href={href} className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
							<i className="ri-arrow-right-up-line" />
						</Link>
					</div>
					<p className="text-300 mb-lg-auto mb-md-4 mb-3">{project.description}</p>
					<div className="d-md-flex content">
						<p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
						<p className="mb-0 card__description text-300 fs-6 mb-0">{project.client}</p>
					</div>
					{project.duration && (
						<div className="d-md-flex content">
							<p className="mb-0 fs-7 text-dark text-uppercase w-40">Completion Time</p>
							<p className="mb-0 card__description text-300 fs-6 mb-0">{project.duration}</p>
						</div>
					)}
					<div className="d-md-flex content">
						<p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
						<p className="mb-0 card__description text-300 fs-6 mb-0">{project.tools.join(", ")}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
