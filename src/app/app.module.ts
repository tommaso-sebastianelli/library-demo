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
import { MdToolbarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSnackBarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

// Services
import { BookService } from './book.service';
import { LoansComponent } from './loans/loans.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoansComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    MdCardModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
