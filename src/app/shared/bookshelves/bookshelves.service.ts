import { Injectable } from '@angular/core';
import { TokenService } from '../auth/token.service';
import { ApiService } from '../api/api.service';
import { IBookshelf } from '../api/ibookshelf';
import { IBookshelfList } from '../api/ibookshelf-list';
import { Bookshelves } from './bookshelves.enum';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/toArray';

@Injectable()
export class BookshelvesService {
	private $bookshelves: Array<IBookshelf> = [];
	readonly acceptedBookshelves: Array<number> = [
		Bookshelves.BooksForYou,
		Bookshelves.Favorites,
		Bookshelves.HaveRead,
		Bookshelves.ReadingNow,
		Bookshelves.RecentlyViewed,
		Bookshelves.ToRead
	];

	constructor(private api: ApiService, private tokenService: TokenService) {
		this.tokenService.authClaim.subscribe(
			isAuthenticated => {
				this.$bookshelves = [];
				if (isAuthenticated) {
					this.api.bookshelfList()
						.flatMap((res: IBookshelfList) => res.items)
						.filter((b: IBookshelf) => this.acceptedBookshelves.includes(b.id))
						.distinct()
						.toArray()
						.subscribe(
							(result: Array<IBookshelf>) => {
								this.$bookshelves = result;
								console.log('Bookshelves list:' + JSON.stringify(this.$bookshelves));
							},
							err => {

							});
				}
			}
		);
	}

	get list() {
		return this.$bookshelves;
	}

}
