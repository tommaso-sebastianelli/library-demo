import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';

import {OnInit, ViewChild, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav;
  constructor(public media: ObservableMedia) {
  }

  ngOnInit() {
    this.media.asObservable()
      .filter((change: MediaChange) => change.mqAlias === 'lg')
      .subscribe(() => {
        this.sidenav.open();
        this.sidenav.mode = 'side';
      });

    this.media.asObservable()
      .filter((change: MediaChange) => change.mqAlias !== 'lg')
      .subscribe(() => {
        this.sidenav.close();
        this.sidenav.mode = 'over';
      });
  }

}
