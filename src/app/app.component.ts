import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { Router, RoutesRecognized } from '@angular/router';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { OnInit, AfterViewInit, ViewChild, Component, Input, Renderer2 } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import { trigger, state, style, animate, transition} from '@angular/animations';

import {appRoutes} from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('searchInput', [
      state('inactive', style({
        width: 0
      })),
      transition('active <=> inactive', animate('200ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  Title: string;
  Search: string;
  sideNavMode: string;
  @ViewChild('sidenav') sidenav;
  @ViewChild('search') search;

  constructor(private router: Router, public media: ObservableMedia, private renderer: Renderer2, public snackbar: MdSnackBar) {
    this.Search = 'inactive';
    this.sideNavMode = 'over';
  }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.Title = val.state.root.firstChild.data.title;
      }
    });

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
