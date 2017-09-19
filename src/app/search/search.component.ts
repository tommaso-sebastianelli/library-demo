import { Component, OnInit } from '@angular/core';

import{BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {
  title: string;
  books: Book[];
  activeView: number;

  constructor(private bookService: BookService) {
    this.books = [];
  }

  ngOnInit() {
    this.activeView = 0;
  }

  onEnter(keyword: string) {
    return this.bookService.list(keyword)
      .then(
      books => this.switchResults(books)
      );
  }

  switchResults(books: object[]):void {
    this.initBooksArray(books);
    this.activeView = 1;
  }

  switchSearch(): void {
    this.activeView = 0;
  }

  initBooksArray(books: object[]){
    books.forEach(b => {
      this.books.push(new Book(b));
    })
  }

}
