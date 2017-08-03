// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Angular Router
import { RouterModule, Routes } from '@angular/router';
import {appRoutes} from './app.routes';

// Angular Material
import 'hammerjs'; // md-slide-toggle, md-slider, mdTooltip
import {MdToolbarModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// App Components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
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
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
