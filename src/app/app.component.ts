import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import { AuthService } from "../assets/libs/angularx-social-login-master";
import { /*FacebookLoginProvider,*/ GoogleLoginProvider, SocialUser } from "../assets/libs/angularx-social-login-master";
import { TokenService } from './shared/auth/token.service';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { OnInit, ViewChild, Component } from '@angular/core';
import { MatDrawer } from '@angular/material';
// import { trigger, state, style, animate, transition} from '@angular/animations';

import {appRoutes} from './app.routes';

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
  authClaim: Observable<boolean>;

  sideNavMode: string;

  @ViewChild('sidenav') sidenav;
  @ViewChild('search') search;

  constructor(public media: ObservableMedia, private authService: AuthService, private tokenService: TokenService) {
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
      console.log("user: " + this.user);
      });

      this.authClaim = this.tokenService.anyToken;
      this.tokenService.anyToken.subscribe(anyToken => {        
        console.log("userHasToken: " + anyToken);
      });
    };

    private setSidenavMobile() {
      this.sidenav.close();
      this.sideNavMode = 'over';
    }
  
    private setSidenavDesktop() {
      this.sidenav.open();
      this.sideNavMode = 'side';
    }
  }
