import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LogoutDialogComponent } from './logout-dialog.component';
import { TokenService } from '../auth/token.service';
import { TokenServiceStub } from '../auth/token.stub';
import { AuthService, AuthServiceConfig } from '../../../assets/libs/angularx-social-login-master';
import { RouterTestingModule } from '@angular/router/testing'

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
					{ provide: MAT_DIALOG_DATA, useValue: [] },

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
});
