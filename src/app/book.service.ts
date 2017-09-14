import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Book} from './book';

@Injectable()
export class BookService {

  private api_url = 'https://www.googleapis.com/books/v1/volumes';
  
  constructor(private http: Http) { 
    
  }

  public list(keyword: string, offset?:number, limit?:number): Promise<Book[]>{
    const url = `${this.api_url}?q={${keyword}}&startIndex=${(offset) ? offset : 0}&maxResults=${(limit) ? limit : 10}&projection=lite`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().items as Book[])
    .catch(this.handleError);
  }

  public get(id: string): Book{
    const url = `${this.api_url}/${id}`;
    return;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
