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
    
  }

  ngOnInit() {
    this.activeView = 0;
  }

  onEnter(keyword: string){
    return this.bookService.list(keyword)
    .then(
      books => this.switchResults(books)    
    );
  }

  switchResults(books:Book[]){
    this.books = books;
    this.activeView = 1;
  }

  switchSearch(){
    this.activeView = 0;
  }

}
