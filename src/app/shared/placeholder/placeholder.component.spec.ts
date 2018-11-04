import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material';
import { PlaceholderComponent } from './placeholder.component';
import { By } from '@angular/platform-browser';

describe('PlaceholderComponent', () => {
	let component: PlaceholderComponent;
	let fixture: ComponentFixture<PlaceholderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MatIconModule],
			declarations: [PlaceholderComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlaceholderComponent);
		component = fixture.componentInstance;
		component.title = 'dummy-title';
		component.subtitle = 'dummy-subtitle';
		component.icon = 'dummy-icon';
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should render the input data on dom', () => {
		const titleElement: HTMLElement = fixture.debugElement.query(By.css('.title')).nativeElement;
		const subtitleElement: HTMLElement = fixture.debugElement.query(By.css('.subtitle')).nativeElement;
		const iconElement: HTMLElement = fixture.debugElement.query(By.css('.icon')).nativeElement;
		expect(titleElement.textContent).toMatch('dummy-title');
		expect(subtitleElement.textContent).toMatch('dummy-subtitle');
		expect(iconElement.textContent).toMatch('dummy-icon');
	});
});
