export interface IVolume {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: {
		title: string;
		authors: Array<String>;
		publisher: string;
		publishedDate: string;
		description: string;
		printType: string;
		categories: Array<string>;
		imageLinks: {
			smallThumbnail: string;
			thumbnail: string;
		};
		language: string;
		previewLink: string;
		infoLink: string;
		canonicalVolumeLink: string;
		pageCount: number;
		averageRating: number;
		ratingsCount: number;
		maturityRating: string;
	};
}
