import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { PlaceholderComponent } from '../shared/placeholder/placeholder.component';
import { VolumeShowcaseComponent } from '../shared/volume-showcase/volume-showcase.component';
import { VolumeComponent } from '../shared/volume/volume.component';
import { MatDialogModule, MatInputModule, MatIconModule, MatPaginatorModule, MatMenuModule, PageEvent } from '@angular/material';
import { HttpModule } from '@angular/http';
import { ApiService } from '../shared/api/api.service';
import { TokenService } from '../shared/auth/token.service';
import { AuthService, AuthServiceConfig } from '../../assets/libs/angularx-social-login-master';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TokenServiceStub } from '../shared/auth/token.stub';
import { LoadingService } from '../shared/loading/loading.service';
import { ErrorService } from '../shared/error/error.service';
import { RouterTestingModule } from '@angular/router/testing'
import { By } from '@angular/platform-browser';
import { VolumeListStub } from '../shared/volume-showcase/volume-list.stub';
import { AppComponent } from '../app.component';
import { ObservableMedia } from '@angular/flex-layout';
import { ObservableMediaStub } from '../app.observableMedia.stub';
import { BookshelvesService } from '../shared/bookshelves/bookshelves.service';
import { BookshelvesServiceStub } from '../shared/bookshelves/bookshelves.stub';
import { ChangeDetectorRef } from '@angular/core';

describe('SearchComponent', () => {
	let component: SearchComponent;
	let fixture: ComponentFixture<SearchComponent>;
	//   let searchInput: DebugElement;
	//   let resultView: DebugElement;
	//   let searchView: DebugElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MatDialogModule,
				MatInputModule,
				MatIconModule,
				HttpModule,
				MatPaginatorModule,
				NoopAnimationsModule,
				MatMenuModule,
				RouterTestingModule
			],
			declarations: [
				SearchComponent,
				PlaceholderComponent,
				VolumeShowcaseComponent,
				VolumeComponent
			],
			providers: [
				ApiService,
				TokenService,
				{
					provide: AuthService,
					useValue: AuthServiceConfig
				},
				{
					provide: TokenService,
					useValue: TokenServiceStub
				},
				LoadingService,
				ErrorService,
				AppComponent,
				{
					provide: ObservableMedia,
					useValue: ObservableMediaStub
				},
				{
					provide: BookshelvesService,
					useValue: BookshelvesServiceStub
				},
				ChangeDetectorRef
			],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should render volume-showcase component', () => {
		component.result = VolumeListStub;
		fixture.detectChanges();
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
