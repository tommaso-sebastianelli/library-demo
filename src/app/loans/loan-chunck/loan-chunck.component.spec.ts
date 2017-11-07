import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanChunckComponent } from './loan-chunck.component';

describe('LoanChunckComponent', () => {
  let component: LoanChunckComponent;
  let fixture: ComponentFixture<LoanChunckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanChunckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanChunckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
