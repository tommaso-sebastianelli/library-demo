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

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LoansComponent } from './loans/loans.component';
import { LoanDialogComponent } from './search/loan-dialog/loan-dialog.component';

// Services
import { SearchService } from './search/search.service';
import { LoansService } from './loans/loans.service';
import { HttpMockService } from './shared/http-mock/http-mock.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoansComponent,
    LoanDialogComponent,
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
    HttpModule
  ],
  providers: [
    SearchService,
    LoansService,
    HttpMockService
  ],
  entryComponents: [LoanDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
