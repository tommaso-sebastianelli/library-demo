import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http'
import { MatDialogModule, MatCardModule, MatMenuModule, MatSidenavModule, MatPaginator } from '@angular/material';
import { VolumeComponent } from './volume.component';
import { VolumeStub } from './volume.stub';
import { By } from '@angular/platform-browser';
import { TokenService } from '../auth/token.service';
import { TokenServiceStub } from '../auth/token.stub';
import { ApiService } from '../api/api.service'

describe('VolumeComponent', () => {
	let component: VolumeComponent;
	let fixture: ComponentFixture<VolumeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule(
			{
				imports: [
					HttpModule,
					MatCardModule,
					MatMenuModule,
					MatDialogModule
				],
				declarations: [VolumeComponent],
				providers: [
					{ provide: TokenService, useValue: TokenServiceStub },
					ApiService,

				]
			}
		)
			.compileComponents().then(() => {
				fixture = TestBed.createComponent(VolumeComponent);
				component = fixture.componentInstance;
				component.data = VolumeStub;
				fixture.detectChanges();
			});
	}));

	beforeEach(() => {
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should render DOM data', () => {
		const title = fixture.debugElement.query(By.css('mat-card-title'));
		const authors = fixture.debugElement.queryAll(By.css('.author span'));
		const editor = fixture.debugElement.query(By.css('.editor span'));
		expect(title.nativeElement.textContent).toMatch('test');
		expect(authors.length).toEqual(2);
		expect(authors[0].nativeElement.textContent).toMatch('dummy-author-1');
		expect(editor.nativeElement.textContent).toMatch('dummy-publisher');
	});

	it('should open detail modal', () => {
		// TODO
	});
});
