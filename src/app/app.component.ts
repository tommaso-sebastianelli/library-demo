import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import { AuthService } from '../assets/libs/angularx-social-login-master';
import { SocialUser } from '../assets/libs/angularx-social-login-master';
import { TokenService } from './shared/auth/token.service';
import { ApiService } from './shared/api/api.service'
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { OnInit, ViewChild, Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LogoutDialogComponent } from './shared/logout-dialog/logout-dialog.component';
import { IBookshelfList } from './shared/api/ibookshelf-list';

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
  bookshelves: Observable<IBookshelfList>;
  sideNavMode: string;

  @ViewChild('sidenav') sidenav;
  @ViewChild('search') search;

  public eventsSubject: Subject<Event> = new Subject<Event>();

  constructor(public media: ObservableMedia, private authService: AuthService, private api: ApiService, protected tokenService: TokenService, public dialog: MatDialog) {
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
      // user is authenticated
      if (user) {
        return this.api.bookshelfList().do(result => console.log(JSON.stringify(result)));
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
  }

  private setSidenavDesktop() {
    this.sidenav.open();
    this.sideNavMode = 'side';
  }
}
