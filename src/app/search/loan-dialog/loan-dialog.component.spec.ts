import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDialogComponent } from './loan-dialog.component';

import { MaterialModule } from '@angular/material';

describe('LoanDialogComponent', () => {
  let component: LoanDialogComponent;
  let fixture: ComponentFixture<LoanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MaterialModule
      ],
      declarations: [ LoanDialogComponent ],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
