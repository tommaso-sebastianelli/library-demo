import { Component } from '@angular/core';

class TabComponent {
  link: string;
  name: string;
  constructor (_name: string, _link: string) {
    this.name = _name;
    this.link = _link;
  }
}

export const tabs: TabComponent[] = [
  {name: 'search', link: '/'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  navTabs = tabs;
}

