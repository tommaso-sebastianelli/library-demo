import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MatToolbarModule , MatIconModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { appRoutes } from './app.routes';
import { ObservableMedia } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BookshelfComponent } from './shared/bookshelf/bookshelf.component';
import { PlaceholderComponent } from './shared/placeholder/placeholder.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
      ),
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        NoopAnimationsModule
      ],
      declarations: [
        AppComponent,
        SearchComponent,
        BookshelfComponent,
        PlaceholderComponent
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
