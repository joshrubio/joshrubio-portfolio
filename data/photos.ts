export const photoIds = ["portrait", "thinking", "sitting-floor"] as const

export type PhotoId = (typeof photoIds)[number]

export interface Photo {
	id: PhotoId
	src: string
	width: number
	height: number
}

export const photos: Record<PhotoId, Photo> = {
	portrait: { id: "portrait", src: "/assets/imgs/josh/portrait-brown-jacket.webp", width: 720, height: 2156 },
	thinking: { id: "thinking", src: "/assets/imgs/josh/crouching-cheek-hand.webp", width: 642, height: 990 },
	"sitting-floor": { id: "sitting-floor", src: "/assets/imgs/josh/sitting-arm-on-knee.webp", width: 900, height: 1210 },
}
