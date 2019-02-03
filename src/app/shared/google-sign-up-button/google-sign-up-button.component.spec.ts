import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSignUpButtonComponent } from './google-sign-up-button.component';
import { AuthService, AuthServiceConfig } from '../../../assets/libs/angularx-social-login-master';
import { TokenService } from '../auth/token.service';
import { TokenServiceStub } from '../auth/token.stub';
import { MatSnackBarModule } from '@angular/material';

describe('GoogleSignUpButtonComponent', () => {
	let component: GoogleSignUpButtonComponent;
	let fixture: ComponentFixture<GoogleSignUpButtonComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MatSnackBarModule
			],
			declarations: [GoogleSignUpButtonComponent],
			providers: [
				{
					provide: TokenService,
					useValue: TokenServiceStub
				},
				{
					provide: AuthService,
					useValue: AuthServiceConfig
				}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GoogleSignUpButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
