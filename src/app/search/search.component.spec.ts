import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { SearchComponent } from './search.component';
import { MatDialogModule, MatInputModule, MatIconModule, MatCardModule } from '@angular/material';

import { SearchService } from '../search/search.service';

import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Book } from '../shared/bookshelf/book/book';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchInput: DebugElement;
  let resultView: DebugElement;
  let searchView: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatInputModule,
        MatIconModule,
        HttpModule,
        NoopAnimationsModule
      ],
      declarations: [SearchComponent],
      providers: [
        SearchService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    component.activeView = 0;
    fixture.detectChanges();
    searchInput = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger search on input enter', () => {
    expect(searchInput).toBeTruthy();
    searchInput.nativeElement.value = 'test';
    searchInput.triggerEventHandler('keydown', null);
    fixture.detectChanges();
    expect(component.loading).toBeTruthy;
  });

  it('should switch to result view', () => {
    component.switchResults();
    fixture.detectChanges();
    resultView = fixture.debugElement.query(By.css('.results'));
    searchView = fixture.debugElement.query(By.css('.placeholder'));
    expect(searchView).toBeFalsy();
    expect(resultView).toBeTruthy();
  });

  it('should switch to search view', () => {
    component.switchSearch();
    fixture.detectChanges();
    resultView = fixture.debugElement.query(By.css('.results'));
    searchView = fixture.debugElement.query(By.css('.placeholder'));
    expect(resultView).toBeFalsy();
    expect(searchView).toBeTruthy();
  });
});
