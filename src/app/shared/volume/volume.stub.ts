import { IVolume } from "../api/ivolume";

export const VolumeStub: IVolume = {
	kind: "volume",
	etag: "",
	id: "0",
	selfLink: "",
	volumeInfo: {
		authors: ['dummy-author-1', 'dummy-author-2'],
		averageRating: 0,
		canonicalVolumeLink: "",
		categories: [],
		description: "test",
		imageLinks: null,
		infoLink: "test",
		language: "",
		maturityRating: "",
		pageCount: 0,
		previewLink: "",
		printType: "",
		publishedDate: "",
		publisher: "dummy-publisher",
		ratingsCount: 0,
		title: "test"
	}
}