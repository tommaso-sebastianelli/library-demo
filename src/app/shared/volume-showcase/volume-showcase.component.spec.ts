import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeShowcaseComponent } from './volume-showcase.component';

describe('BookshelfComponent', () => {
  let component: VolumeShowcaseComponent;
  let fixture: ComponentFixture<VolumeShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeShowcaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
