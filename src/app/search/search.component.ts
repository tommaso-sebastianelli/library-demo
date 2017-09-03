import { Component, OnInit } from '@angular/core';

import{BookService} from '../book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent implements OnInit {
  title: string;
  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  search(keyword: string, limit: number): object{
    return;
  }

}
