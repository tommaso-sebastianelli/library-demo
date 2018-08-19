import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET, ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/api/api.service';
import { LoadingService } from '../shared/loading/loading.service';
import { ErrorService } from '../shared/error/error.service';
import { IVolumeList } from '../shared/api/ivolume-list';
import { TokenService } from '../shared/auth/token.service';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { DEFAULT_QUERY_LIMIT } from '../app.config';

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
  id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private api: ApiService, private loading: LoadingService, private error: ErrorService, private token: TokenService) {
    this.routerSub = this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((result: any) => {
        const tree: UrlTree = this.router.parseUrl(result.url);
        const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        const s: UrlSegment[] = g.segments;
        this.id = s[1].path;
        //console.log(s[0].parameters);
        this.token.authClaim.subscribe(
          isAuthenticated => {
            if (isAuthenticated) {
              this.loading.wait().subscribe(
                () => {
                  console.log("Bookshelf n. " + this.id);
                  this.activatedRoute.queryParams
                    .subscribe((params: IQueryParams) => {
                      this.api.bookshelfVolumeList(this.id, params.offset, params.take)
                        .subscribe(
                          result => {
                            this.result = result;
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
        )
      });
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

}
