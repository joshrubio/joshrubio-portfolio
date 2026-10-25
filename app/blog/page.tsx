import { permanentRedirect } from "next/navigation"

// The blog listing lives at /blog-list (it is the page the menu links to).
export default function Blog() {
	permanentRedirect("/blog-list")
}
