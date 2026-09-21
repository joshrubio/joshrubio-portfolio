import fs from "fs"
import path from "path"

export interface ImageSize {
	width: number
	height: number
}

/**
 * Reads the pixel dimensions of a PNG/JPEG/WebP stored under /public (server-side, at build time),
 * so pages can render next/image without hand-written width/height.
 * Returns null if the file does not exist or is not a PNG/JPEG/WebP.
 */
export function getImageSize(src: string): ImageSize | null {
	const file = path.join(process.cwd(), "public", src)
	if (!fs.existsSync(file)) return null
	const buf = fs.readFileSync(file)

	// PNG: width/height live in the IHDR chunk
	if (buf[0] === 0x89 && buf[1] === 0x50) {
		return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
	}

	// WebP: RIFF container; the size lives in the first chunk (lossy, lossless or extended)
	if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
		const chunk = buf.toString("ascii", 12, 16)
		if (chunk === "VP8 ") {
			return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff }
		}
		if (chunk === "VP8L") {
			const b = buf.readUInt32LE(21)
			return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 }
		}
		if (chunk === "VP8X") {
			return { width: buf.readUIntLE(24, 3) + 1, height: buf.readUIntLE(27, 3) + 1 }
		}
	}

	// JPEG: walk the markers until a Start-Of-Frame segment
	if (buf[0] === 0xff && buf[1] === 0xd8) {
		let i = 2
		while (i < buf.length) {
			if (buf[i] !== 0xff) { i++; continue }
			const marker = buf[i + 1]
			const length = buf.readUInt16BE(i + 2)
			if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
				return { width: buf.readUInt16BE(i + 7), height: buf.readUInt16BE(i + 5) }
			}
			i += 2 + length
		}
	}
	return null
}
