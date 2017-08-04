import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import {Router, RoutesRecognized} from '@angular/router';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';

import {OnInit, ViewChild, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  Title: string;
  @ViewChild('sidenav') sidenav;
  constructor(private router: Router, public media: ObservableMedia) {
  }

  ngOnInit() {
    this.router.events.subscribe(val => {
            if (val instanceof RoutesRecognized) {
               this.Title = val.state.root.firstChild.data.title;
            }
        });

    this.media.asObservable()
      .filter((change: MediaChange) => change.mqAlias === 'lg' || change.mqAlias === 'xl')
      .subscribe(() => {
        this.sidenav.open();
        this.sidenav.mode = 'side';
      });

    this.media.asObservable()
      .filter((change: MediaChange) => change.mqAlias !== 'lg' && change.mqAlias !== 'xl')
      .subscribe(() => {
        this.sidenav.close();
        this.sidenav.mode = 'over';
      });
  }
}
