import { Routes } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {LoansComponent} from './loans/loans.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'loans', component: LoansComponent }
    //   ,{ path: '**', component: PageNotFoundComponent }
];
