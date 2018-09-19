import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog.component';

describe('ErrorDialogComponent', () => {
	let component: ErrorDialogComponent;
	let fixture: ComponentFixture<ErrorDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MatDialogModule
			],
			declarations: [ErrorDialogComponent],
			providers: [
				{ provide: MatDialogRef, useValue: {} },
				{ provide: MAT_DIALOG_DATA, useValue: [] },
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ErrorDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
