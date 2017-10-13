import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoansComponent } from './loans/loans.component';

import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MatToolbar, MatIcon, MatButton, MatSidenavContainer, MatSidenav } from '@angular/material';
import { appRoutes } from './app.routes';
import { ObservableMedia } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
      ),
        MatToolbar, 
        MatIcon, 
        MatButton, 
        MatSidenavContainer, 
        MatSidenav,
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent,
        SearchComponent,
        LoansComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        ObservableMedia
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
