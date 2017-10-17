import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
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
  Search: string;
  sideNavMode: string;
  @ViewChild('sidenav') sidenav;
  @ViewChild('search') search;

  constructor(public media: ObservableMedia) {
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
  }


  setSidenavMobile() {
    this.sidenav.close();
    this.sideNavMode = 'over';
  }

  setSidenavDesktop() {
    this.sidenav.open();
    this.sideNavMode = 'side';
  }
}
