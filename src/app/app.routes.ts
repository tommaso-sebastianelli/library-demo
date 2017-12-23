import { Routes } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {LibraryComponent} from './library/library.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'library', component: LibraryComponent },
    // { path: '**', component: PageNotFoundComponent }
];
