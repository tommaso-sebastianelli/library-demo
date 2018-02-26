import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Book } from './book/book';
import { Observable } from 'rxjs/Observable';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {
  length: number;
  pageSize: number;
  pageSizeOptions: number[];
  // @Input() books: Observable<Book[]>;

  constructor() {

  }

  ngOnInit() {
    this.length = 100;
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 100];
  }


  @Output()
  onPagerChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  // MdPaginator Output
  pageEvent(e: PageEvent) {
    //emit the event upwards to bookshelf parent
    this.onPagerChange.emit(e);
  };


}
