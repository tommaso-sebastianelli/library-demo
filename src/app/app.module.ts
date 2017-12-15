// Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

// Angular Router
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';

// Angular Material
import 'hammerjs'; // md-slide-toggle, md-slider, mdTooltip
import { MatToolbarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { BookshelfComponent } from './shared/bookshelf/bookshelf.component';
import { PlaceholderComponent } from './shared/placeholder/placeholder.component';
import { BookComponent } from './shared/bookshelf/book/book.component';

// Services
import { SearchService } from './search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookshelfComponent,
    PlaceholderComponent,
    BookComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSliderModule,
    MatChipsModule,
    HttpModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  providers: [
    SearchService
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
