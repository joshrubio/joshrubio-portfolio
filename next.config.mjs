const retiredTemplatePages = ["/index-2", "/index-3", "/work-single", "/legacy-home"]
const redirectedToBlog = ["/blog", "/blog-details"]

/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			...retiredTemplatePages.flatMap((source) => [
				{ source, destination: "/", permanent: true },
				{ source: `/es${source}`, destination: "/es", permanent: true },
			]),
			...redirectedToBlog.flatMap((source) => [
				{ source, destination: "/blog-list", permanent: true },
				{ source: `/es${source}`, destination: "/es/blog-list", permanent: true },
			]),
		]
	},
}

export default nextConfig
