import { Book } from '../shared/book/book';
import { LoanStatus } from './loan-status.enum';

export class Loan {
    book: Book;
    from: string;
    to: string;
    status: LoanStatus;

    constructor(book: Book, days: number) {
        this.from = undefined;
        this.book = book;
        this.to = undefined;
        this.status = LoanStatus.Opened;
    }
}
