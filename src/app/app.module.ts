import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';//md-slide-toggle, md-slider, mdTooltip
import { NgModule } from '@angular/core';


import {MdTabsModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import { AppComponent } from './app.component';

//routing section
import {RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
  { path: 'crisis-center', component: null, redirectTo: '/' }
  // { path: 'hero/:id', component: null, redirectTo: '/'},
  // { path: 'heroes', component: null, redirectTo: '/' },
  // { path: '',  redirectTo: '/heroes', pathMatch: 'full'},
  // { path: '**', component: null, redirectTo: '/' }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
