import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule, MatSnackBarModule } from '@angular/material';
import { LoginComponent } from './login.component';
import { GoogleSignUpButtonComponent } from '../google-sign-up-button/google-sign-up-button.component';
import { TokenService } from '../auth/token.service';
import { TokenServiceStub } from '../auth/token.stub';
import { AuthService, AuthServiceConfig } from '../../../assets/libs/angularx-social-login-master';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule(
			{
				imports: [
					MatCardModule,
					MatSnackBarModule
				],
				declarations: [
					LoginComponent,
					GoogleSignUpButtonComponent
				],
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
			}
		)
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
