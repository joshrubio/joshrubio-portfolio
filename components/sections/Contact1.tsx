'use client'

import Link from "@/components/elements/LocaleLink"

import { useLocale } from "@/i18n/LocaleProvider"

export default function Contact1() {
	const { t } = useLocale()
	const c = t.home.contact
	return (
		<>

			<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
				<div className="container position-relative z-1">
					<h3 className="ds-3 mt-3 mb-3 text-primary-1">{c.title}</h3>
					<span className="fs-5 fw-medium text-200">
						{c.subtitle}
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
								<Link href="tel:+34643529116" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
									<i className="ri-mail-fill text-primary-1 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-5">Email</span>
									<h6 className="mb-0">joshuerubio@gmail.com</h6>
								</div>
								<Link href="mailto:joshuerubio@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
									<i className="ri-github-fill text-primary-1 fs-26" />
								</div>
								<div className="ps-3">
									<span className="text-400 fs-5">GitHub</span>
									<h6 className="mb-0">@joshrubio</h6>
								</div>
								<Link href="https://github.com/joshrubio" className="position-absolute top-0 start-0 w-100 h-100" target="_blank" />
							</div>
							<div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
								<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
									<i className="ri-linkedin-fill text-primary-1 fs-26" />
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
									<h3>{c.formTitle}</h3>
									<form action="#">
										<div className="row mt-3">
											<div className="col-md-6 ">
												<label className="mb-1 mt-3 text-dark" htmlFor="name">{c.name} <span className="text-primary-1">*</span></label>
												<input type="text" className="form-control border rounded-3" id="name" name="name" placeholder={c.namePlaceholder} aria-label="username" />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-dark" htmlFor="email">{c.email} <span className="text-primary-1">*</span></label>
												<input type="text" className="form-control border rounded-3" id="email" name="email" placeholder={c.emailPlaceholder} aria-label="email" />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-dark" htmlFor="phone">{c.phone} <span className="text-primary-1">*</span></label>
												<input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder={c.phonePlaceholder} aria-label="phone" />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-dark" htmlFor="subject">{c.subject} <span className="text-primary-1">*</span></label>
												<input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder={c.subjectPlaceholder} aria-label="subject" />
											</div>
											<div className="col-12">
												<label className="mb-1 mt-3 text-dark" htmlFor="message">{c.message} <span className="text-primary-1">*</span></label>
												<textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder={c.messagePlaceholder} aria-label="With textarea" />
											</div>
											<div className="col-12">
												<button type="submit" className="btn btn-gradient mt-3">
													{c.send}
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
						<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">josh.rubio</h3>
					</div>
				</div>
			</section>

		</>
	)
}
