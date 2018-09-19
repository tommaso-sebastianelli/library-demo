import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPaginatorModule, MatCardModule, MatMenuModule, MatSidenavModule, MatDialogModule, MatPaginator } from '@angular/material';
import { VolumeComponent } from './volume.component';

describe('VolumeComponent', () => {
	let component: VolumeComponent;
	let fixture: ComponentFixture<VolumeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule(
			{
				imports: [
					MatCardModule,
					MatMenuModule
				],
				declarations: [VolumeComponent]
			}
		)
			.compileComponents().then(() => {
				fixture = TestBed.createComponent(VolumeComponent);
				component = fixture.componentInstance;
				component.data = {
					kind: "",
					etag: "",
					id: "",
					selfLink: "",
					volumeInfo: {
						authors: [],
						averageRating: 0,
						canonicalVolumeLink: "",
						categories: [],
						description: "",
						imageLinks: null,
						infoLink: "",
						language: "",
						maturityRating: "",
						pageCount: 0,
						previewLink: "",
						printType: "",
						publishedDate: "",
						publisher: "",
						ratingsCount: 0,
						title: ""

					}
				};
				fixture.detectChanges();
			});
	}));

	beforeEach(() => {
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
