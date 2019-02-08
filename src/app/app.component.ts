import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import { AuthService } from '../assets/libs/angularx-social-login-master';
import { SocialUser } from '../assets/libs/angularx-social-login-master';
import { TokenService } from './shared/auth/token.service';
import { ApiService } from './shared/api/api.service';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { OnInit, ViewChild, Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatSidenav, MatSnackBar } from '@angular/material';

import { LogoutDialogComponent } from './shared/logout-dialog/logout-dialog.component';
import { BookshelvesService } from './shared/bookshelves/bookshelves.service';
import { AboutComponent } from './shared/about/about.component';

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
		public tokenService: TokenService, public dialog: MatDialog, public bookshelves: BookshelvesService,
		public changeDetectorRef: ChangeDetectorRef, private snackBar: MatSnackBar) {
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

	onMenuItemClick() {
		if (this.sideNavMode === 'over') {
			this.sidenav.close();
		}
	}

	showAboutModal() {
		this.dialog.open(AboutComponent, {
			width: '450px'
		});
	}
}
