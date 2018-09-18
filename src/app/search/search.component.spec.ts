import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { PlaceholderComponent } from '../shared/placeholder/placeholder.component';
import { VolumeShowcaseComponent } from '../shared/volume-showcase/volume-showcase.component';
import { VolumeComponent } from '../shared/volume/volume.component';
import { MatDialogModule, MatInputModule, MatIconModule, MatPaginatorModule, MatMenuModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { ApiService } from '../shared/api/api.service';
import { TokenService } from '../shared/auth/token.service';
import { AuthService, AuthServiceConfig } from '../../assets/libs/angularx-social-login-master';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TokenServiceStub } from '../shared/auth/token.stub';
import { LoadingService } from '../shared/loading/loading.service';
import { ErrorService } from '../shared/error/error.service';
import { RouterTestingModule } from '@angular/router/testing'

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
				ErrorService
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchComponent);
		component = fixture.componentInstance;
		component.result = null;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
