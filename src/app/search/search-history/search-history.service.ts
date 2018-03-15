import { Injectable } from '@angular/core';

interface SearchModel {
  title: string;
  author: string;
  publisher: string;
}

@Injectable()
export class SearchHistoryService {
  public history: Array<SearchModel>;
  constructor() { }
  public add(search: SearchModel): void {
    let index = this.exists(search);
    if (index < 0) {
      this.history.push(search);
    } else {
      this.moveTop(index);
    }
  }

  private moveTop(index: number): void {
    this.history.push(this.history.splice(index, 1)[0]);
  }

  private exists(search: SearchModel): number {
    return this.history.findIndex((s) => {
      return s.title == search.title
        && s.author == search.author
        && s.publisher == search.publisher
    });
  }
}
