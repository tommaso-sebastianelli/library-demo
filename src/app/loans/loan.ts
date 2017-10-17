import { Book } from '../shared/book/book';
import { LoanStatus } from './loan-status.enum';

export class Loan {
    id: string;
    book: Book;
    from: string;
    to: string;
    status: LoanStatus;

    constructor(id: string, from: string, to: string, book: Book, status?: LoanStatus ) {
        this.id = id;
        this.from = from;
        this.book = book;
        this.to = to;
        this.status = LoanStatus.Opened;
    }
}
