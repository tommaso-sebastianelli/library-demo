import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Book } from './book/book';
import { Animations } from '../../app.animations';
import { DEFAULT_QUERY_LIMIT } from '../../app.config';


@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss'],
  animations: Animations
})
export class BookshelfComponent implements OnInit {
  length: number;
  pageSize: number;
  pageSizeOptions: number[];
  @Input() books: Book[];


  constructor() {

  }

  ngOnInit() {
    this.length = 100;
    this.pageSize = DEFAULT_QUERY_LIMIT;
    this.pageSizeOptions = [5, 10, 25];
  }


  @Output()
  onPagerChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  // MdPaginator Output
  pageEvent(e: PageEvent) {
    //emit the event upwards to bookshelf parent
    this.onPagerChange.emit(e);
  };


}
