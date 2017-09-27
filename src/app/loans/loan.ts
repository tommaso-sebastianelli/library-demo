import { Book } from '../shared/book/book';
import { LoanStatus } from './loan-status.enum';

import * as moment from 'moment';

export class Loan {
    id: number;
    book: Book;
    from: string;
    to: string;
    status: LoanStatus;

    constructor(book: Book, days: number, start?: any) {
        this.id = 0;
        this.from = (start) ? moment(start).startOf('d').toISOString() : moment().startOf('d').toISOString();
        this.book = book;
        this.to = moment(this.from).add(days, 'd').startOf('d').toISOString();
        this.status = LoanStatus.Opened;
    }
}
