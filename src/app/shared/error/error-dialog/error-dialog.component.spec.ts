import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog.component';
import { By } from '@angular/platform-browser';

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
				{ provide: MAT_DIALOG_DATA, useValue: 'dummy error string' },
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

	it('should render a error message', () => {
		fixture.detectChanges();
		const detailBox: HTMLElement = fixture.debugElement.query(By.css('.details')).nativeElement;
		expect(detailBox.textContent).toMatch('dummy error string');
	});
});
