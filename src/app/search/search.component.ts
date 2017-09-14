import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import{BookService} from '../book.service';
import {Book} from '../book';
=======
import { BookService } from '../book.service';
>>>>>>> f511edeb70074ddd414cae744fb12e8a7a86ec4f

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

<<<<<<< HEAD
  switchSearch(){
    this.activeView = 0;
=======
  search(keyword: string, limit: number): object {
    return;
>>>>>>> f511edeb70074ddd414cae744fb12e8a7a86ec4f
  }

}
