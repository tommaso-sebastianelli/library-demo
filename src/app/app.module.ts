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
import { MdProgressSpinnerModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdSliderModule } from '@angular/material';
import {MdChipsModule} from '@angular/material';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoansComponent } from './loans/loans.component';
import { LoanDialogComponent } from './search/loan-dialog/loan-dialog.component';

// Services
import { BookService } from './book.service';
import { LoansService } from './loans/loans.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoansComponent,
    LoanDialogComponent
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
    MdProgressSpinnerModule,
    MdDialogModule,
    MdSliderModule,
    MdChipsModule,
    HttpModule
  ],
  providers: [
    BookService,
    LoansService
  ],
  entryComponents: [LoanDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
