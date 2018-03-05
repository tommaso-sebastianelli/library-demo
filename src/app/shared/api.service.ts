import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/toPromise';

import { Book } from '../shared/bookshelf/book/book';
import { isNullOrUndefined } from 'util';

@Injectable()
export class ApiService {
  private readonly api_url = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) {

  }
  public list(title?: string, author?: string, publisher?: string, offset?: number, limit?: number): Observable<Book[]> {
    let url = `${this.api_url}?xq=`;
    if (title)
      url = url.concat(`+intitle:{${title}}`);
    if (author)
      url = url.concat(`+inauthor:{${author}}`);
    if (publisher)
      url = url.concat(`+inpublisher:{${publisher}}`);

    url = url.concat(`&startIndex=${(offset) ? offset : 0}&maxResults=${(limit) ? limit : 10}&orderBy=relevance&projection=lite`);
    return this.http.get(url)
      .map(response => (response.json().error) ? Observable.throw(response.json().error) : response.json())
      .map(response => (response.items) ? response.items : []) //check response
      .map(response => response
        .map(item => new Book(item))
        .filter(item => item.id !== null))
      .catch((err) => {
        return Observable.throw(err);
      });
  }

  public get(id: string): Observable<Book> {
    const url = `${this.api_url}/${id}`;
    return this.http.get(url)
      .map(response => (response.json().error) ? Observable.throw(response.json().error) : response.json())
      .map(response => response.items
        .map(item => new Book(item))
        .filter(item => item.id !== null))
      .catch((err) => {
        return Observable.throw(err);
      });
  }
}

