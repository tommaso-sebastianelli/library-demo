import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { AuthenticatedGuard } from './authenticated.guard';
import { ROUTER_HOMEPAGE } from './app.config';

export const appRoutes: Routes = [
	{ path: '', redirectTo: ROUTER_HOMEPAGE, pathMatch: 'full' },
	{ path: 'search', component: SearchComponent },
	{ path: 'bookshelf/:id', component: BookshelfComponent, canActivate: [AuthenticatedGuard] },
	{ path: '**', redirectTo: ROUTER_HOMEPAGE, pathMatch: 'full' }
];
