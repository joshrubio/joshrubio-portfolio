
'use client'
import { projects } from "@/data/projects"
import CountUp from 'react-countup'

export default function Static1() {
	const totalProjects = projects.length
	const webApps = projects.filter(p => p.categories.includes('webapp')).length
	const wordpressProjects = projects.filter(p => p.categories.includes('wordpress')).length

	return (
		<>
			<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900">
				<div className="container">
					<div className="inner">
						<div className="row align-items-center justify-content-between">
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={3} className="odometer ds-1 text-dark fw-semibold" /></span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">Years of</p>
											<p className="fs-5 mb-0 fw-bold">Experience</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={totalProjects} className="odometer ds-1 text-dark fw-semibold" /></span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">Projects</p>
											<p className="fs-5 mb-0 fw-bold">Completed</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={webApps} className="odometer ds-1 text-dark fw-semibold" /></span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">Web</p>
											<p className="fs-5 mb-0 fw-bold">Applications</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-auto col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={wordpressProjects} className="odometer ds-1 text-dark fw-semibold" /></span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">WordPress</p>
											<p className="fs-5 mb-0 fw-bold">Projects</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
