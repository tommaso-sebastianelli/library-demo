import { TestBed, async, tick, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { async as _async } from "rxjs/scheduler/async";
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ObservableMedia } from '@angular/flex-layout';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatPaginatorModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PlaceholderComponent } from './shared/placeholder/placeholder.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { GoogleSignUpButtonComponent } from './shared/google-sign-up-button/google-sign-up-button.component';
import { VolumeShowcaseComponent } from './shared/volume-showcase/volume-showcase.component';
import { VolumeComponent } from './shared/volume/volume.component';

import { AuthService } from '../assets/libs/angularx-social-login-master';
import { ApiService } from './shared/api/api.service';
import { TokenService } from './shared/auth/token.service';
import { TokenServiceStub } from './shared/auth/token.stub';
import { BookshelvesService } from './shared/bookshelves/bookshelves.service';
import { Observable } from '../../node_modules/rxjs/Observable';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
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
				MatPaginatorModule,
				MatDialogModule,
				NoopAnimationsModule,
				MatMenuModule,
				HttpModule
			],
			declarations: [
				AppComponent,
				SearchComponent,
				PlaceholderComponent,
				BookshelfComponent,
				GoogleSignUpButtonComponent,
				VolumeShowcaseComponent,
				VolumeComponent
			],
			providers: [
				{ provide: APP_BASE_HREF, useValue: '/' },
				{ provide: AuthService, useValue: AuthServiceStub },
				{ provide: TokenService, useValue: TokenServiceStub },
				{ provide: ObservableMedia, useValue: ObservableMediaStub },
				ApiService,
				BookshelvesService
			]
		}).compileComponents().then(() => {
			fixture = TestBed.createComponent(AppComponent);
			component = fixture.componentInstance;
		});
	}));

	let ObservableMediaStub = {
		asObservable() {
			return of({ mqAlias: 'md' });
		},
		isActive(val: String) {
			return true;
		}
	};

	let AuthServiceStub = {
		get authState(): Observable<any> {
			return of({});
		}
	};

	it('should create the app', fakeAsync(() => {
		expect(component).toBeTruthy();
	}));

	it('should render authenticated-only bookshelves', fakeAsync(() => {
		component.ngOnInit();
		tick();
		fixture.detectChanges();
		const list = fixture.debugElement.query(By.css('.user-items'));
		tick();
		fixture.detectChanges();
		expect(list).toBeTruthy();
	}));

	it('should toggle the sidebar', fakeAsync(() => {
		component.ngOnInit();
		tick();
		fixture.detectChanges();
		let initialSideNavStatus = component.sidenav.opened;
		component.sidenav.toggle();
		tick();
		fixture.detectChanges();
		expect(component.sidenav.opened).not.toEqual(initialSideNavStatus);
	}));

});
