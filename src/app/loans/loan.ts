import { Book } from '../book';
import { LoanStatus } from './loan-status.enum';

export class Loan {
    book: Book;
    from: string;
    to: string;
    status: LoanStatus;
}
