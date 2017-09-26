import { Book } from '../shared/book/book';
import { LoanStatus } from './loan-status.enum';

export class Loan {
    book: Book;
    from?: string;
    days: number;
    status: LoanStatus;

    constructor(book: Book, days: number) {
        this.book = book;
        this.days = days;
        this.status = LoanStatus.Pending;
    }
}
