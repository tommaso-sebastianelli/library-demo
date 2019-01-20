import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatChipsModule } from '@angular/material';

import { VolumeDetailComponent } from './volume-detail.component';

describe('VolumeDetailComponent', () => {
  let component: VolumeDetailComponent;
  let fixture: ComponentFixture<VolumeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatChipsModule
      ],
      declarations: [VolumeDetailComponent]
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
