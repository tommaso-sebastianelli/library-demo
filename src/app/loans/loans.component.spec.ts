import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansComponent } from './loans.component';

import { MatCardModule, MatIconModule } from '@angular/material';

import { LoansService } from './loans.service';
import { HttpThrottlerService } from '../shared/http-throttler/http-throttler.service';

describe('LoansComponent', () => {
  let component: LoansComponent;
  let fixture: ComponentFixture<LoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
         MatCardModule,
         MatIconModule
      ],
      declarations: [ LoansComponent ],
      providers: [
        LoansService,
        HttpThrottlerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
