import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { AuthenticatedGuard } from './authenticated.guard';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'bookshelf/:id', component: BookshelfComponent, canActivate: [AuthenticatedGuard] }
    // { path: '**', component: PageNotFoundComponent }
];
