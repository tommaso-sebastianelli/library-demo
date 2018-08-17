import { Component, OnInit, Input, Output, EventEmitter, Inject, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Animations } from '../../app.animations';
import { DEFAULT_QUERY_LIMIT } from '../../app.config';
import { AppComponent } from '../../app.component';
import { IVolume } from '../api/ivolume';
import { IVolumeList } from '../api/ivolume-list';


@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss'],
  animations: Animations
})
export class BookshelfComponent implements OnInit {
  length: number;
  pageSize: number;
  pageSizeOptions: number[];
  @Input() data: IVolumeList;
  scrolling: boolean;

  constructor(@Inject(AppComponent) private appComponent: AppComponent, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.length = this.data.totalItems;
    this.pageSize = DEFAULT_QUERY_LIMIT;
    this.pageSizeOptions = [5, 10, 25];
  }

  ngAfterContentInit() {
    //scrolling navcontent subscription
    this.appComponent.eventsSubject.filter((e: Event) => {
      return e.type == 'scroll';
    }).subscribe((e: Event) => {
      const el = new ElementRef(e.target);
      if (el.nativeElement.scrollTop > 0) {
        this.scrolling = true;
      } else {
        this.scrolling = false;
      }
    });
  }


  @Output()
  onPagerChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  // MdPaginator Output
  pageEvent(e: PageEvent) {
    //emit the event upwards to bookshelf parent
    this.onPagerChange.emit(e);
  }
}
