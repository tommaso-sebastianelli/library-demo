import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatChipsModule, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material';

import { VolumeDetailComponent } from './volume-detail.component';
import { VolumeStub } from '../volume/volume.stub';

describe('VolumeDetailComponent', () => {
  let component: VolumeDetailComponent;
  let fixture: ComponentFixture<VolumeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatChipsModule,
        MatDialogModule
      ],
      declarations: [VolumeDetailComponent],
      providers: [
        //{ provide: MatDialogRef, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: VolumeStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
