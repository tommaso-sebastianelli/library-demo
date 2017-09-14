import { Injectable } from '@angular/core';

import {Book} from './book';

@Injectable()
export class BookService {

  private api_url = 'https://www.googleapis.com/books/v1/volumes?q={}&maxResults=1';
  
  constructor() { 
    
  }

  list(keyword: string): Book[]{
    return;
  }

  get(): Book{
    return;
  }

}
