import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { async as _async } from "rxjs/scheduler/async";

import { MatPaginatorModule, MatCardModule, MatMenuModule, MatSidenavModule, MatDialogModule, MatPaginator } from '@angular/material';
import { VolumeShowcaseComponent } from './volume-showcase.component';
import { VolumeComponent } from '../volume/volume.component';
import { AppComponent } from '../../app.component';
import { GoogleSignUpButtonComponent } from '../google-sign-up-button/google-sign-up-button.component';
import { RouterTestingModule } from '@angular/router/testing'
import { ObservableMedia } from '@angular/flex-layout';
import { ObservableMediaStub } from '../../app.observableMedia.stub';
import { TokenService } from '../auth/token.service';
import { TokenServiceStub } from '../auth/token.stub';
import { AuthService, AuthServiceConfig } from '../../../assets/libs/angularx-social-login-master';
import { ApiService } from '../api/api.service';
import { ApiServiceStub } from '../api/api.stub';
import { BookshelvesService } from '../bookshelves/bookshelves.service';
import { BookshelvesServiceStub } from '../bookshelves/bookshelves.stub';
import { ChangeDetectorRef } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('VolumeShowcaseComponent', () => {
	let component: VolumeShowcaseComponent;
	let fixture: ComponentFixture<VolumeShowcaseComponent>;

	beforeEach(fakeAsync(() => {
		TestBed.configureTestingModule(
			{
				imports: [
					MatPaginatorModule,
					MatCardModule,
					MatMenuModule,
					MatSidenavModule,
					RouterTestingModule,
					MatDialogModule,
					NoopAnimationsModule
				],
				declarations: [
					VolumeShowcaseComponent,
					VolumeComponent,
					AppComponent,
					GoogleSignUpButtonComponent
				],
				providers: [
					AppComponent,
					{ provide: ObservableMedia, useValue: ObservableMediaStub },
					{
						provide: TokenService,
						useValue: TokenServiceStub
					},
					{
						provide: AuthService,
						useValue: AuthServiceConfig
					},
					{
						provide: ApiService,
						useValue: ApiServiceStub
					},
					{
						provide: BookshelvesService,
						useValue: BookshelvesServiceStub
					},
					ChangeDetectorRef
				]
			}
		)
			.compileComponents().then(() => {
				fixture = TestBed.createComponent(VolumeShowcaseComponent);
				component = fixture.componentInstance;
				component.data = {
					totalItems: 1,
					items: [
						{
							kind: "",
							etag: "",
							id: "",
							selfLink: "",
							volumeInfo: {
								authors: [],
								averageRating: 0,
								canonicalVolumeLink: "",
								categories: [],
								description: "",
								imageLinks: null,
								infoLink: "",
								language: "",
								maturityRating: "",
								pageCount: 0,
								previewLink: "",
								printType: "",
								publishedDate: "",
								publisher: "",
								ratingsCount: 0,
								title: ""
							}
						}
					],
					kind: "test"
				};
				fixture.detectChanges();
			});
	}));

	beforeEach(fakeAsync(() => {
		// fixture = TestBed.createComponent(VolumeShowcaseComponent);
		// component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should be created', () => {
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});
});
