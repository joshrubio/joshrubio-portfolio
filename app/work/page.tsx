
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Static1 from "@/components/sections/Static1"
import Contact1 from "@/components/sections/Contact1"

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
										{/* Mesa360 */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" style={{ height: '450px', objectFit: 'cover', width: '100%' }} src="/assets/imgs/projects/mesa360/hero.jpg" alt="Mesa360" />
													<Link href="/projects/mesa360" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/projects/mesa360" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">UX/UI</p>
															<h3 className="fw-semibold">Mesa360 - POS System</h3>
														</Link>
														<Link href="/projects/mesa360" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">A comprehensive Point of Sale system designed to streamline restaurant management. Features inventory tracking, staff management, and real-time analytics.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Personal Project</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Completion Time</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Ongoing</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Figma</p>
													</div>
												</div>
											</div>
										</div>

										{/* Teller */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" style={{ height: '450px', objectFit: 'cover', width: '100%' }} src="/assets/imgs/work/img-teller.png" alt="Teller" />
													<Link href="/projects/teller" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/projects/teller" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">UX/UI</p>
															<h3 className="fw-semibold">Teller - AI Writing Assistant</h3>
														</Link>
														<Link href="/projects/teller" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">AI-powered writing assistant that helps users improve their writing style and tone. Features smart feedback, unified workspace, and visual plotting.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Personal Project</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Completion Time</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">4 Weeks</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Figma, React, OpenAI API</p>
													</div>
												</div>
											</div>
										</div>

										{/* MOODS */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" style={{ height: '450px', objectFit: 'cover', width: '100%' }} src="/assets/imgs/work/img-moods.png" alt="MOODS" />
													<Link href="/projects/moods" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/projects/moods" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">UX/UI</p>
															<h3 className="fw-semibold">MOODS - Social Music Platform</h3>
														</Link>
														<Link href="/projects/moods" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">A social music platform that allows users to share their moods through playlists and discover new music. Pivot from BeatBoop with a focus on community.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Personal Project</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Completion Time</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">5 Weeks</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Figma, React, Spotify API</p>
													</div>
												</div>
											</div>
										</div>

										{/* Take Away */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" style={{ height: '450px', objectFit: 'cover', width: '100%' }} src="/assets/imgs/work/img-takeaway.png" alt="Take Away" />
													<Link href="/projects/take-away" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/projects/take-away" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">UX/UI</p>
															<h3 className="fw-semibold">Take Away - Food Delivery App</h3>
														</Link>
														<Link href="/projects/take-away" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">A food delivery app developed to meet the needs of both clients and restaurants combining beauty and simplicity. MVP developed in 5 weeks.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">No-country</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Completion Time</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">5 Weeks</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Figma, ShadCN</p>
													</div>
												</div>
											</div>
										</div>

										{/* The Sower Store */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" style={{ height: '450px', objectFit: 'cover', width: '100%' }} src="/assets/imgs/work/img-thesower.png" alt="The Sower Store" />
													<Link href="/projects/the-sower-store" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/projects/the-sower-store" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">E-COMMERCE</p>
															<h3 className="fw-semibold">The Sower Store</h3>
														</Link>
														<Link href="/projects/the-sower-store" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">A full-stack e-commerce platform built with the MERN stack, featuring a custom admin dashboard, payment integration, and responsive design.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Personal Project</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Completion Time</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">6 Weeks</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">React, Node.js, MongoDB</p>
													</div>
												</div>
											</div>
										</div>

										{/* Wissen */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" style={{ height: '450px', objectFit: 'cover', width: '100%' }} src="/assets/imgs/work/img-wissen.png" alt="Wissen" />
													<Link href="/projects/wissen" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/projects/wissen" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">E-LEARNING</p>
															<h3 className="fw-semibold">Wissen - Learning Platform</h3>
														</Link>
														<Link href="/projects/wissen" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">An online learning platform designed to provide a seamless educational experience for students and instructors. Features course management and progress tracking.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Personal Project</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Completion Time</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">4 Weeks</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">React, Tailwind CSS</p>
													</div>
												</div>
											</div>
										</div>

										{/* Thinkboard */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" style={{ height: '450px', objectFit: 'cover', width: '100%' }} src="/assets/imgs/work/img-thinkboard.png" alt="Thinkboard" />
													<Link href="/projects/thinkboard" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/projects/thinkboard" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">WEB APP</p>
															<h3 className="fw-semibold">Thinkboard - Notes App</h3>
														</Link>
														<Link href="/projects/thinkboard" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">A full-stack notes application built with the MERN stack featuring CRUD operations, rate limiting, and responsive design.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Personal Project</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Completion Time</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">3 Weeks</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">MongoDB, Express, React, Node</p>
													</div>
												</div>
											</div>
										</div>

										{/* Lifepoint Church */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" style={{ height: '450px', objectFit: 'cover', width: '100%' }} src="/assets/imgs/projects/lifepoint.png" alt="Lifepoint Church" />
													<Link href="/projects/lifepoint-church" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/projects/lifepoint-church" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">WORDPRESS</p>
															<h3 className="fw-semibold">Lifepoint Church Website</h3>
														</Link>
														<Link href="/projects/lifepoint-church" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">A welcoming, content-driven WordPress website designed and developed for a growing evangelical community. Focused on clarity and accessibility.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Lifepoint Church</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Completion Time</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">4 Weeks</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">WordPress, PHP, CSS</p>
													</div>
												</div>
											</div>
										</div>

										{/* Carmen Zambrano */}
										<div className="card-custom" data-index={0}>
											<div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
												<div className="card__image-container zoom-img position-relative">
													<img className="card__image" style={{ height: '450px', objectFit: 'cover', width: '100%' }} src="/assets/imgs/work/img-carmen.png" alt="Carmen Zambrano" />
													<Link href="/projects/carmen-zambrano" className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
												</div>
												<div className="card__content px-md-4 px-3">
													<div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
														<Link href="/projects/carmen-zambrano" className="card_title_link">
															<p className="text-primary-1 mb-0 mb-md-2">WORDPRESS</p>
															<h3 className="fw-semibold">Carmen Zambrano Portfolio</h3>
														</Link>
														<Link href="/projects/carmen-zambrano" className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
															<i className="ri-arrow-right-up-line" />
														</Link>
													</div>
													<p className="text-300 mb-lg-auto mb-md-4 mb-3">A professional portfolio designed for a veteran journalist to showcase her extensive work in media. Built with WordPress and Elementor.</p>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Client</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">Carmen Zambrano</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Completion Time</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">4 Weeks</p>
													</div>
													<div className="d-md-flex content">
														<p className="mb-0 fs-7 text-dark text-uppercase w-40">Tools</p>
														<p className="mb-0 card__description text-300 fs-6 mb-0">WordPress, Elementor</p>
													</div>
												</div>
											</div>
										</div>
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