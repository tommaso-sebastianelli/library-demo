import { TestBed, async } from '@angular/core/testing';
import { async as _async } from "rxjs/scheduler/async";
import { of } from 'rxjs/observable/of';

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

import { AuthService, AuthServiceConfig } from '../assets/libs/angularx-social-login-master';
import { ApiService } from './shared/api/api.service';
import { TokenService } from './shared/auth/token.service';
import { BookshelvesService } from './shared/bookshelves/bookshelves.service';

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
				{ provide: AuthService, useValue: AuthServiceConfig },
				{ provide: TokenService, useValue: TokenServiceStub },
				BookshelvesService,
				ApiService,
				ObservableMedia
			]
		}).compileComponents();
	}));

	const TokenServiceStub = {
		get authClaim() {
			const isAuthenticated: boolean = false;
			return of(isAuthenticated, _async);
		}
	};

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));


});
