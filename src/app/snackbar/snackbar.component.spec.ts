import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarComponent } from './snackbar.component';
import { InjectionToken } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MAT_DIALOG_DATA } from '@angular/material';

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;

  const MOCK_DATA = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarComponent],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: MOCK_DATA }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
