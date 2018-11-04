import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, PageEvent, MatSnackBar, MatSnackBarConfig } from '@angular/material';

import 'rxjs/add/operator/map';

import { ApiService } from '../shared/api/api.service';
import { LoadingService } from '../shared/loading/loading.service';
import { ErrorService } from '../shared/error/error.service';


import { Animations } from '../app.animations';

import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { DEFAULT_QUERY_LIMIT } from '../app.config';
import { IVolumeList } from '../shared/api/ivolume-list';
import { NoResultDialogComponent } from './no-result-dialog/no-result-dialog.component';
import { VolumeAction } from '../shared/volume/volume-action';
import { IVolume } from '../shared/api/ivolume';
import { Bookshelves } from '../shared/bookshelves/bookshelves.enum';
import { SnackbarComponent } from '../snackbar/snackbar.component';

interface IQueryParams {
	title?: string;
	author?: string;
	publisher?: string;
	take?: number;
	offset?: number;
}

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	animations: Animations
})
export class SearchComponent implements OnInit {
	searchDialogRef: MatDialogRef<SearchDialogComponent>;
	noResultDialogRef: MatDialogRef<NoResultDialogComponent>;
	animations: any;
	result: IVolumeList;
	actions: VolumeAction[];

	constructor(private api: ApiService, private loading: LoadingService, private error: ErrorService, public searchDialog: MatDialog,
		private activatedRoute: ActivatedRoute, private router: Router, public noResultDialog: MatDialog,
		private changeDetectorRef: ChangeDetectorRef, private snackBar: MatSnackBar) {
		this.init();
		// read query params from url

		this.actions = [
			{
				name: "Favorites",
				translateId: "favorites-page-title",
				icon: "favorite_border",
				callback: (data: IVolume) => {
					this.api.volumeAdd(data.id, Bookshelves.Favorites).subscribe(
						success => {
							this.showSnackBarSuccess(data);
						},
						error => {
							this.showSnackBarFail();
						});
				}
			},
			{
				name: "To Read",
				translateId: "to-read-page-title",
				icon: "list",
				callback: (data: IVolume) => {
					this.api.volumeAdd(data.id, Bookshelves.ToRead).subscribe(
						success => {
							this.showSnackBarSuccess(data);
						},
						error => {
							this.showSnackBarFail();
						});
				}
			},
			{
				name: "Reading",
				translateId: "reading-page-title",
				icon: "list",
				callback: (data: IVolume) => {
					this.api.volumeAdd(data.id, Bookshelves.ReadingNow).subscribe(
						success => {
							this.showSnackBarSuccess(data);
						},
						error => {
							this.showSnackBarFail();
						});
				}
			},
			{
				name: "Have read",
				translateId: "have-read-page-title",
				icon: "list",
				callback: (data: IVolume) => {
					this.api.volumeAdd(data.id, Bookshelves.HaveRead).subscribe(
						success => {
							this.showSnackBarSuccess(data);
						},
						error => {
							this.showSnackBarFail();
						});
				}
			}
		]
	}

	private init(): void {
		this.result = null;
		this.animations = {
			fab: ''
		};
	}

	ngOnInit() {
		this.activatedRoute.queryParams
			.subscribe(params => {
				if (params.title || params.author || params.publisher) {
					console.log(params);
					this.getVolumes(params);
				} else {
					this.init();
				}
			});
	}

	openDialog(): void {
		this.searchDialogRef = this.searchDialog.open(SearchDialogComponent, {
			data: {
				onSearch: (title: string, author: string, publisher: string) => {
					this.searchDialogRef.close();
					this.updateQueryParams({
						title: title,
						author: author,
						publisher: publisher,
						take: DEFAULT_QUERY_LIMIT,
						offset: 0
					});
				}
			}
		});
	}

	onPagerChange(pagerStatus: PageEvent): void {
		this.updateQueryParams(<IQueryParams>{
			title: this.activatedRoute.snapshot.queryParams.title,
			author: this.activatedRoute.snapshot.queryParams.author,
			publisher: this.activatedRoute.snapshot.queryParams.publisher,
			take: pagerStatus.pageSize,
			offset: pagerStatus.pageIndex * pagerStatus.pageSize
		});
	}

	private updateQueryParams(params: IQueryParams): void {
		this.router.navigate([], {
			relativeTo: this.activatedRoute,
			queryParams: params
		});
	}

	private getVolumes = (params: IQueryParams) => {
		// FIXME: loading service creates a 'ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.'
		setTimeout(() => {
			this.loading.wait();
			this.api.volumeList(params.title, params.author, params.publisher, params.offset, params.take).subscribe(
				result => {
					if (result.totalItems > 0) {
						this.result = result;
						this.animations.fab = (this.result.totalItems) ? 'active' : '';
					} else {
						this.showNoResultError();
					}
				},
				e => {
					this.loading.done().subscribe(() => {
						this.error.throw(e).subscribe(() => {
							this.init();
						});
					});
				},
				() => {
					this.loading.done().subscribe(() => {
						// show no result placeholder
					});
				}
			);
		}, 0);

	}

	showNoResultError() {
		this.init();
		this.noResultDialogRef = this.noResultDialog.open(NoResultDialogComponent);
	}

	private showSnackBarSuccess(data: IVolume) {
		this.snackBar.openFromComponent(SnackbarComponent, {
			duration: 5000,
			data: {
				messageId: "snack-volume-save",
				undo: () => {
					this.api.volumeRemove(data.id, Bookshelves.Favorites).subscribe(
						() => this.snackBar.dismiss(),
						() => this.snackBar.dismiss()
					);
				}
			}
		});
	}
	private showSnackBarFail() {
		this.snackBar.openFromComponent(SnackbarComponent, {
			duration: 5000,
			data: {
				messageId: "snack-error"
			}
		});
	}
}
