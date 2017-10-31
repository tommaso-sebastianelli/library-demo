// divides all loans in time chunks, grouped by their loan date. Dividers date limits are defined here.

import * as moment from 'moment';

export const LoanTimelineChunks = [
    // older than 6 months
    moment().subtract(3, 'months').startOf('day'),
    // older than 1 month
    moment().subtract(1, 'month').startOf('weeks')
];
