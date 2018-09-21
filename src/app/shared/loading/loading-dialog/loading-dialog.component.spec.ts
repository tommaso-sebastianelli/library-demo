import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDialogComponent } from './loading-dialog.component';
import { MatSpinner } from '@angular/material';
import { Platform } from '@angular/cdk/platform';

describe('LoadingDialogComponent', () => {
	let component: LoadingDialogComponent;
	let fixture: ComponentFixture<LoadingDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				LoadingDialogComponent,
				MatSpinner
			],
			providers: [
				Platform
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoadingDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
