import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LogoutDialogComponent } from './logout-dialog.component';
import { TokenService } from '../auth/token.service';
import { TokenServiceStub } from '../auth/token.stub';
import { AuthService, AuthServiceConfig, SocialUser } from '../../../assets/libs/angularx-social-login-master';
import { RouterTestingModule } from '@angular/router/testing'
import { By } from '@angular/platform-browser';

describe('LogoutDialogComponent', () => {
	let component: LogoutDialogComponent;
	let fixture: ComponentFixture<LogoutDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule(
			{
				imports: [
					MatDialogModule,
					RouterTestingModule
				],
				declarations: [LogoutDialogComponent],
				providers: [
					{
						provide: TokenService,
						useValue: TokenServiceStub
					},
					{
						provide: AuthService,
						useValue: AuthServiceConfig
					},
					{ provide: MatDialogRef, useValue: {} },
					{
						provide: MAT_DIALOG_DATA, useValue: <SocialUser>{
							email: 'dummy'
						}
					},

				]
			}
		)
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LogoutDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should render a dummy email', () => {
		fixture.detectChanges();
		let emailBox: HTMLElement = fixture.debugElement.query(By.css('.email')).nativeElement;
		expect(emailBox.textContent).toMatch('dummy');
	});
});
