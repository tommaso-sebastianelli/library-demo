import { Component, OnInit, OnDestroy, Renderer2, Inject } from '@angular/core';
import { Router, NavigationEnd, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET, ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api/api.service';
import { LoadingService } from '../shared/loading/loading.service';
import { ErrorService } from '../shared/error/error.service';
import { IVolumeList } from '../shared/api/ivolume-list';
import { TokenService } from '../shared/auth/token.service';
import { Subscription } from 'rxjs/Subscription';
import { PageEvent } from '@angular/material/paginator';
import { BookshelvesService } from '../shared/bookshelves/bookshelves.service';
import { VolumeAction } from '../shared/volume/volume-action';
import { IVolume } from '../shared/api/ivolume';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { DOCUMENT } from '@angular/platform-browser';

interface IQueryParams extends Object {
	take?: number;
	offset?: number;
}

@Component({
	selector: 'app-bookshelf',
	templateUrl: './bookshelf.component.html',
	styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit, OnDestroy {
	result: IVolumeList;
	routerSub: Subscription;
	id: number;
	actions: VolumeAction[];


	constructor(private router: Router, private activatedRoute: ActivatedRoute, private api: ApiService, private loading: LoadingService,
		private error: ErrorService, private token: TokenService, public bookshelves: BookshelvesService, private snackBar: MatSnackBar,
		private renderer: Renderer2, @Inject(DOCUMENT) document) {
		this.routerSub = this.router.events
			.filter((event) => event instanceof NavigationEnd)
			.subscribe((result: any) => {
				const tree: UrlTree = this.router.parseUrl(result.url);
				const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
				const s: UrlSegment[] = g.segments;
				this.id = parseInt(s[1].path, 10);
				// console.log(s[0].parameters);

				this.token.authClaim.subscribe(
					isAuthenticated => {
						if (isAuthenticated) {
							this.loading.wait().subscribe(
								() => {
									console.log('Bookshelf n. ' + this.id);
									this.activatedRoute.queryParams
										.subscribe((params: IQueryParams) => {
											this.api.bookshelfVolumeList(this.id, params.offset, params.take)
												.subscribe(
													res => {
														this.result = res;
													},
													e => {
														this.loading.done().subscribe(() => {
															this.error.throw(e).subscribe(() => {
																this.init();
																this.routerSub.unsubscribe();
																this.router.navigateByUrl('/search');
															});
														});
													},
													() => {
														this.loading.done().subscribe(() => {

														});
													});
										});
								}
							);
						}
					}
				);
			});

		this.actions = [
			{
				name: "Remove",
				translateId: "bookshelf-remove",
				icon: "delete_outline",
				callback: (data: IVolume) => {
					this.api.volumeRemove(data.id, this.id).subscribe(
						success => {
							this.showSnackBarSuccess(data);
							this.renderer.setAttribute(document.getElementById(data.id), 'hidden', null);
						},
						error => {
							this.showSnackBarFail();
						});
				}
			}
		]
	}

	ngOnInit() {

	}

	ngOnDestroy() {
		this.routerSub.unsubscribe();
	}

	private init() {
		this.result = null;
	}

	private updateQueryParams(params: IQueryParams): void {
		this.router.navigate([], {
			relativeTo: this.activatedRoute,
			queryParams: params
		});
	}

	onPagerChange(pagerStatus: PageEvent): void {
		this.updateQueryParams(<IQueryParams>{
			take: pagerStatus.pageSize,
			offset: pagerStatus.pageIndex * pagerStatus.pageSize
		});
	}


	private showSnackBarSuccess(data: IVolume) {
		this.snackBar.openFromComponent(SnackbarComponent, {
			duration: 5000,
			data: {
				messageId: "snack-volume-remove",
				undo: () => {
					this.api.volumeAdd(data.id, this.id).subscribe(
						() => {
							this.snackBar.dismiss();
							this.renderer.removeAttribute(document.getElementById(data.id), 'hidden', null);
						},
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
