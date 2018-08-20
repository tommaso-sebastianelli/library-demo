import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultDialogComponent } from './no-result-dialog.component';

describe('NoResultDialogComponent', () => {
	let component: NoResultDialogComponent;
	let fixture: ComponentFixture<NoResultDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NoResultDialogComponent]
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
