import { permanentRedirect } from "next/navigation"

// Template placeholder page that no longer exists: articles live at /blog/<id>.
export default function BlogDetails() {
	permanentRedirect("/blog-list")
}
