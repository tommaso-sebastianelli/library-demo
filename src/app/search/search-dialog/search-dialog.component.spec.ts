import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDialogComponent } from './search-dialog.component';
import { MatFormFieldModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('SearchDialogComponent', () => {
	let component: SearchDialogComponent;
	let fixture: ComponentFixture<SearchDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				MatFormFieldModule,
				MatDialogModule,
				MatInputModule,
				NoopAnimationsModule
			],
			declarations: [
				SearchDialogComponent
			],
			providers: [
				{ provide: MatDialogRef, useValue: {} },
				{ provide: MAT_DIALOG_DATA, useValue: [] },
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
