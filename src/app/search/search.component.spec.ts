import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { MatInput, MatIcon, MatSpinner, MatCard } from '@angular/material';

import { SearchService } from '../search/search.service';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInput, 
        MatIcon, 
        MatSpinner, 
        MatCard, 
        HttpModule, 
        NoopAnimationsModule
      ],
      declarations: [ SearchComponent ],
      providers:[SearchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
