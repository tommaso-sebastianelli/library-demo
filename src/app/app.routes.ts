import { Routes } from '@angular/router';
import {SearchComponent} from './search/search.component'

export const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'search', component: SearchComponent },
    //   ,{ path: '**', component: PageNotFoundComponent }
];
