import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDialogComponent } from './search-dialog.component';
import { MatFormFieldModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';


describe('SearchDialogComponent', () => {
	let component: SearchDialogComponent;
	let fixture: ComponentFixture<SearchDialogComponent>;
	let titleInput: HTMLInputElement;
	let authorInput: HTMLInputElement;
	let publisherInput: HTMLInputElement;
	let searchButton: HTMLButtonElement

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
			.compileComponents().then(() => {
				fixture = TestBed.createComponent(SearchDialogComponent);
				component = fixture.componentInstance;
				titleInput = fixture.debugElement.query(By.css('[name="title"]')).nativeElement;
				authorInput = fixture.debugElement.query(By.css('[name="author"]')).nativeElement;
				publisherInput = fixture.debugElement.query(By.css('[name="publisher"]')).nativeElement;
				searchButton = fixture.debugElement.query(By.css('.search-button')).nativeElement;
				fixture.detectChanges();
			});
	}));

	beforeEach(() => {
		fixture.autoDetectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should have disabled search button', () => {
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			expect(searchButton.disabled).toBe(true);
		});

	});

	it('should have enabled search button', () => {
		titleInput.value = "aaa";
		titleInput.dispatchEvent(new Event('input'));
		authorInput.value = "aaa";
		authorInput.dispatchEvent(new Event('input'));
		publisherInput.value = "aaa";
		publisherInput.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			expect(searchButton.disabled).toBe(false);
		});
	});
});
