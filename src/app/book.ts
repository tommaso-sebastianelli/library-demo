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
        this.smallThumbnail = (obj.volumeInfo.imageLinks.smallThumbnail) ? obj.volumeInfo.imageLinks.smallThumbnail : "assets/img/book_placeholder.png";
        this.thumbnail = (obj.volumeInfo.imageLinks.thumbnail) ? obj.volumeInfo.imageLinks.thumbnail : "assets/img/book_placeholder.png";
    }
}
