import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {
  length: number;
  pageSize: number;
  pageSizeOptions: number[];
  constructor() { }

  ngOnInit() {
    this.length = 100;
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 100];
  }  

  // MdPaginator Output
  pageEvent: PageEvent;

}
