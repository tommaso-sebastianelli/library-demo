import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSignUpButtonComponent } from './google-sign-up-button.component';

describe('GoogleSignUpButtonComponent', () => {
	let component: GoogleSignUpButtonComponent;
	let fixture: ComponentFixture<GoogleSignUpButtonComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GoogleSignUpButtonComponent]
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
