
import Layout from "@/components/layout/Layout"
import Link from "next/link"

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
													<img className="card__image" style={{ height: '450px', objectFit: 'cover', width: '100%' }} src="/assets/imgs/work/img-background.png" alt="Thinkboard" />
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
					<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
						<div className="container">
							<div className="inner">
								<div className="row align-items-center justify-content-between">
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">3</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Year of</p>
													<p className="fs-5 mb-0 fw-bold">Experience</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">12</span></span>
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
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">4</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Satisfied</p>
													<p className="fs-5 mb-0 fw-bold">Happy Clients</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-auto col-md-6">
										<div className="counter-item-cover counter-item">
											<div className="content text-center mx-auto d-flex align-items-center">
												<span className="ds-3 count text-primary-1 fw-medium my-0">+<span className="odometer ds-1 text-dark fw-semibold">8</span></span>
												<div className="text-start ms-2">
													<p className="fs-5 mb-0 text-300">Learning Projects</p>
													<p className="fs-5 mb-0 fw-bold">Self-Driven</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact 1*/}
					<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
						<div className="container position-relative z-1">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">Get in touch</h3>
							<span className="fs-5 fw-medium text-200">
								I'm always excited to take on new projects and collaborate with innovative minds. If you
								<br />
								have a project in mind or just want to chat about design, feel free to reach out!
							</span>
							<div className="row mt-8">
								<div className="col-lg-4 d-flex flex-column">
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-phone-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Phone Number</span>
											<h6 className="mb-0">+34-643-529-116</h6>
										</div>
										<Link href="/tel:+1-234-567-8901" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-mail-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">Email</span>
											<h6 className="mb-0">joshuerubio@gmail.com</h6>
										</div>
										<Link href="/mailto:someone@example.com" className="position-absolute top-0 start-0 w-100 h-100" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-skype-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">GitHub</span>
											<h6 className="mb-0">@joshrubio</h6>
										</div>
										<Link href="https://github.com/joshrubio" className="position-absolute top-0 start-0 w-100 h-100" target="_blank" />
									</div>
									<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
										<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
											<i className="ri-map-2-fill text-primary-1 fs-26" />
										</div>
										<div className="ps-3">
											<span className="text-400 fs-5">LinkedIn</span>
											<h6 className="mb-0">Josh D. Rubio</h6>
										</div>
										<Link href="https://www.linkedin.com/in/joshuerubio/" className="position-absolute top-0 start-0 w-100 h-100" target="_blank" />
									</div>
								</div>
								<div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
									<div className="position-relative">
										<div className="position-relative z-2">
											<h3>Leave a messge</h3>
											<form action="#">
												<div className="row mt-3">
													<div className="col-md-6 ">
														<label className="mb-1 mt-3 text-dark" htmlFor="name">Your name <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="name" name="name" placeholder="John Doe" aria-label="username" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="email">Email address <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="email" name="email" placeholder="contact.john@gmail.com" aria-label="email" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="phone">Your phone <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder="+01 234 567 89" aria-label="phone" />
													</div>
													<div className="col-md-6">
														<label className="mb-1 mt-3 text-dark" htmlFor="subject">Subject <span className="text-primary-1">*</span></label>
														<input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder="I want to contact for...." aria-label="subject" />
													</div>
													<div className="col-12">
														<label className="mb-1 mt-3 text-dark" htmlFor="message">Message <span className="text-primary-1">*</span></label>
														<textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder="Your message here...." aria-label="With textarea" />
													</div>
													<div className="col-12">
														<button type="submit" className="btn btn-gradient mt-3">
															Send Message
															<i className="ri-arrow-right-up-line" />
														</button>
													</div>
												</div>
											</form>
										</div>
										<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
									</div>
								</div>
							</div>
						</div>
						<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
							<div className="wow img-custom-anim-top">
								<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">william.design</h3>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		</>
	)
}