export class Book {
    id: string;
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    smallThumbnail: string;
    thumbnail: string;

    constructor(obj: any) {
        this.id = obj.id;
        this.title = obj.volumeInfo.title;
        this.authors = obj.volumeInfo.authors;
        this.publisher  = obj.volumeInfo.publisher;
        this.publishedDate = obj.volumeInfo.publishedDate;
        this.description = obj.volumeInfo.description;
        this.smallThumbnail = obj.imageLinks.smallThumbnail;
        this.thumbnail = obj.imageLinks.thumbnail;
    }
}
