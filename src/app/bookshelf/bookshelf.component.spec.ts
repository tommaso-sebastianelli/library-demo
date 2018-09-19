import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookshelfComponent } from './bookshelf.component';
import { VolumeShowcaseComponent } from '../shared/volume-showcase/volume-showcase.component';
import { BookshelvesService } from '../shared/bookshelves/bookshelves.service';
import { BookshelvesServiceStub } from '../shared/bookshelves/bookshelves.stub';
import { PlaceholderComponent } from '../shared/placeholder/placeholder.component';
import { MatPaginatorModule, MatCardModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { VolumeComponent } from '../shared/volume/volume.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../shared/api/api.service';
import { ApiServiceStub } from '../shared/api/api.stub';
import { LoadingService } from '../shared/loading/loading.service';
import { ErrorService } from '../shared/error/error.service';
import { TokenService } from '../shared/auth/token.service';
import { TokenServiceStub } from '../shared/auth/token.stub';
import { VolumeListStub } from '../shared/volume-showcase/volume-list.stub';
import { AppComponent } from '../app.component';
import { ObservableMedia } from '@angular/flex-layout';
import { ObservableMediaStub } from '../app.observableMedia.stub';
import { AuthService, AuthServiceConfig } from '../../assets/libs/angularx-social-login-master';
import { ChangeDetectorRef } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BookshelfComponent', () => {
	let component: BookshelfComponent;
	let fixture: ComponentFixture<BookshelfComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MatPaginatorModule,
				MatCardModule,
				MatMenuModule,
				MatDialogModule,
				RouterTestingModule,
				NoopAnimationsModule
			],
			declarations: [
				BookshelfComponent,
				VolumeShowcaseComponent,
				VolumeComponent,
				PlaceholderComponent
			],
			providers: [
				{
					provide: BookshelvesService,
					useValue: BookshelvesServiceStub
				},
				{
					provide: ApiService,
					useValue: ApiServiceStub
				},
				LoadingService,
				ErrorService,
				{
					provide: TokenService,
					useValue: TokenServiceStub
				},
				AppComponent,
				{
					provide: ObservableMedia,
					useValue: ObservableMediaStub
				},
				{
					provide: TokenService,
					useValue: TokenServiceStub
				},
				{
					provide: AuthService,
					useValue: AuthServiceConfig
				},
				ChangeDetectorRef
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BookshelfComponent);
		component = fixture.componentInstance;
		component.result = VolumeListStub;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should render volume-showcase component', () => {
		let volumeShowcaseComponent = fixture.debugElement.query(By.css('app-volume-showcase'));
		expect(volumeShowcaseComponent).toBeTruthy();
	});

	it('should render placeholder component', () => {
		component.result = { kind: "test", totalItems: 0, items: [] };
		fixture.detectChanges();
		let placeholderComponent = fixture.debugElement.query(By.css('app-placeholder'));
		expect(placeholderComponent).toBeTruthy();
	});
});
