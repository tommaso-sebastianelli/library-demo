import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';

// import { Book } from '../bookshelf/book/book';
import { TokenService } from '../auth/token.service';
import { IVolumeList } from './ivolume-list';
import { IBookshelfList } from './ibookshelf-list';
import { IVolume } from './ivolume';
import { IBookshelf } from './ibookshelf';

@Injectable()
export class ApiService {
	public readonly api_key = 'AIzaSyD3avINA09gFSCeggY4WfIgFh631WGkqVg';
	public readonly api_url = 'https://www.googleapis.com/books/v1';
	public readonly paths = {
		volumes: '/volumes',
		myLibrary: {
			bookshelves: '/mylibrary/bookshelves'
		}
	};

	constructor(private http: Http, private token: TokenService) {

	}

	public volumeList(title?: string, author?: string, publisher?: string, offset?: number, limit?: number): Observable<IVolumeList> {
		let url = `${this.api_url}${this.paths.volumes}?q=`;
		if (title) {
			url = url.concat(`+intitle:{${title}}`);
		}
		if (author) {
			url = url.concat(`+inauthor:{${author}}`);
		}
		if (publisher) {
			url = url.concat(`+inpublisher:{${publisher}}`);
		}
		url = url.concat(`&startIndex=${(offset) ? offset : 0}&maxResults=${(limit) ? limit : 10}` +
			`&orderBy=relevance&projection=lite&key=${this.api_key}`);
		return this.http.get(url, {
			headers: this.getHeaders()
		}).map(response => (response.json().error) ? Observable.throw(response.json().error) : response.json());
	}

	public volumeGet(id: string): Observable<IVolume> {
		const url = `${this.api_url}${this.paths.volumes}/${id}?key=${this.api_key}`;
		return this.http.get(url, {
			headers: this.getHeaders()
		})
			.map(response => (response.json().error) ? Observable.throw(response.json().error) : response.json())
			.catch((err) => {
				return Observable.throw(err);
			});
	}

	public bookshelfList(): Observable<IBookshelfList> {
		const url = `${this.api_url}${this.paths.myLibrary.bookshelves}?key=${this.api_key}`;
		return this.http.get(url, {
			headers: this.getHeaders()
		}).map(response => (response.json().error) ? Observable.throw(response.json().error) : response.json())
			.catch((err) => {
				return Observable.throw(err);
			});
	}

	public bookshelfGet(id: string): Observable<IBookshelf> {
		const url = `${this.api_url}${this.paths.myLibrary.bookshelves}/${id}?key=${this.api_key}`;
		return this.http.get(url, {
			headers: this.getHeaders()
		}).map(response => (response.json().error) ? Observable.throw(response.json().error) : response.json())
			.catch((err) => {
				return Observable.throw(err);
			});
	}

	public bookshelfVolumeList(id: number, offset?: number, limit?: number): Observable<IVolumeList> {
		let url = `${this.api_url}${this.paths.myLibrary.bookshelves}/${id}/volumes`;
		url = url.concat(`?startIndex=${(offset) ? offset : 0}&maxResults=${(limit) ? limit : 10}&projection=lite&key=${this.api_key}`);
		return this.http.get(url, {
			headers: this.getHeaders()
		}).map(response => (response.json().error) ? Observable.throw(response.json().error) : response.json())
			.catch((err) => {
				return Observable.throw(err);
			});
	}

	private getHeaders(): Headers {
		const headers = new Headers();
		headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
		headers.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method');
		if (this.token.get()) { headers.set('Authorization', 'Bearer ' + this.token.get().authToken); }
		return headers;
	}
}

