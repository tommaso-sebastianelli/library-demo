import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoResultDialogComponent } from './no-result-dialog.component';

describe('NoResultDialogComponent', () => {
	let component: NoResultDialogComponent;
	let fixture: ComponentFixture<NoResultDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MatDialogModule
			],
			declarations: [
				NoResultDialogComponent
			],
			providers: [
				{ provide: MatDialogRef, useValue: {} },
				{ provide: MAT_DIALOG_DATA, useValue: [] },
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NoResultDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
