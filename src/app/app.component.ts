import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import { AuthService } from '../assets/libs/angularx-social-login-master';
import { SocialUser } from '../assets/libs/angularx-social-login-master';
import { TokenService } from './shared/auth/token.service';
import { ApiService } from './shared/api/api.service';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { OnInit, ViewChild, Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatSidenav } from '@angular/material';

import { LogoutDialogComponent } from './shared/logout-dialog/logout-dialog.component';
import { BookshelvesService } from './shared/bookshelves/bookshelves.service';
import { Bookshelves } from './shared/bookshelves/bookshelves.enum';

// import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
	// animations: [
	//   trigger('searchInput', [
	//     state('inactive', style({
	//       width: 0
	//     })),
	//     transition('active <=> inactive', animate('200ms ease-in'))
	//   ])
	// ]
})
export class AppComponent implements OnInit {
	user: SocialUser;
	sideNavMode: string;

	@ViewChild('sidenav') sidenav: MatSidenav;
	@ViewChild('search') search;

	public eventsSubject: Subject<Event> = new Subject<Event>();

	constructor(public media: ObservableMedia, private authService: AuthService, private api: ApiService,
		protected tokenService: TokenService, public dialog: MatDialog, public bookshelves: BookshelvesService,
		public changeDetectorRef: ChangeDetectorRef) {
		this.sideNavMode = 'over';
	}

	ngOnInit() {
		if (this.media.isActive('sm')) {
			this.setSidenavMobile();
		}
		this.media.asObservable()
			.filter((change: MediaChange) => change.mqAlias === 'lg' || change.mqAlias === 'xl')
			.subscribe(() => {
				this.setSidenavDesktop();
			});

		this.media.asObservable()
			.filter((change: MediaChange) => change.mqAlias !== 'lg' && change.mqAlias !== 'xl')
			.subscribe(() => {
				this.setSidenavMobile();
			});

		this.authService.authState.subscribe((user) => {
			this.user = user;
			console.log('user: ' + JSON.stringify(this.user));

			if (user) {
				// user is authenticated
			}
		});
	}

	openLogoutModal() {
		const dialogRef = this.dialog.open(LogoutDialogComponent, {
			width: '450px',
			data: this.user
		});
	}

	onScroll(e: Event) {
		this.eventsSubject.next(e);
	}

	private setSidenavMobile() {
		this.sidenav.close();
		this.sideNavMode = 'over';
		this.changeDetectorRef.detectChanges();
	}

	private setSidenavDesktop() {
		this.sidenav.open();
		this.sideNavMode = 'side';
		this.changeDetectorRef.detectChanges();
	}

	getBookshelfIcon(id: number | string): string {
		switch (id) {
			case Bookshelves.Favorites: return 'favorite_border';
			case Bookshelves.ReadingNow: return 'list';
			case Bookshelves.ToRead: return 'list';
			case Bookshelves.HaveRead: return 'list';
			case Bookshelves.RecentlyViewed: return 'access_time';
			case Bookshelves.BooksForYou: return 'explore';
			default: return '';
		}
	}

	onMenuItemClick() {
		if (this.sideNavMode === 'over') {
			this.sidenav.close();
		}
	}
}
