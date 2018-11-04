import { ComponentFixture, TestBed, fakeAsync, async } from '@angular/core/testing';

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
import { VolumeListStub } from './volume-list.stub';
import { By } from '@angular/platform-browser';

describe('VolumeShowcaseComponent', () => {
	let component: VolumeShowcaseComponent;
	let fixture: ComponentFixture<VolumeShowcaseComponent>;

	beforeEach(async(() => {
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
				component.data = VolumeListStub;
				fixture.detectChanges();
			});
	}));

	beforeEach(fakeAsync(() => {
		fixture.detectChanges();
	}));

	it('should be created', () => {
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should not render any volume', () => {
		component.data = {
			totalItems: 0,
			items: [],
			kind: 'test'
		};
		fixture.detectChanges();
		let volumes = fixture.debugElement.queryAll(By.css('app-volume'));
		expect(volumes.length).toEqual(0);
	});

	it('should render a volume', () => {
		fixture.detectChanges();
		let volumes = fixture.debugElement.queryAll(By.css('app-volume'));
		expect(volumes.length).toEqual(1);
	});

	it('should not render the paginator', () => {
		component.pageSize = component.data.totalItems;
		fixture.detectChanges();
		let paginator = fixture.debugElement.query(By.css('mat-paginator'));
		expect(paginator).toBeFalsy();
	});

	it('should render the paginator', () => {
		component.pageSize = component.data.totalItems - 1;
		fixture.detectChanges();
		let paginator = fixture.debugElement.query(By.css('mat-paginator'));
		expect(paginator).toBeTruthy();
	});
});
