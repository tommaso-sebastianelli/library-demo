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
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Services
import { TokenService } from './shared/auth/token.service';
import { ApiService } from './shared/api/api.service';
import { LoadingService } from './shared/loading/loading.service';
import { ErrorService } from './shared/error/error.service';

//auth
import { SocialLoginModule, AuthServiceConfig } from '../assets/libs/angularx-social-login-master';
import { GoogleLoginProvider/*, FacebookLoginProvider*/ } from '../assets/libs/angularx-social-login-master';
import { LoginOpt } from '../assets/libs/angularx-social-login-master/src/auth.service';

// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchDialogComponent } from './search/search-dialog/search-dialog.component';
import { BookshelfComponent } from './shared/bookshelf/bookshelf.component';
import { PlaceholderComponent } from './shared/placeholder/placeholder.component';
import { BookComponent } from './shared/bookshelf/book/book.component';
import { LoginComponent } from './shared/login/login.component';
import { LibraryComponent } from './library/library.component';
import { GoogleSignUpButtonComponent } from './shared/google-sign-up-button/google-sign-up-button.component';
import { LoadingDialogComponent } from './shared/loading/loading-dialog/loading-dialog.component';
import { LogoutDialogComponent } from './shared/logout-dialog/logout-dialog.component';
import { ErrorDialogComponent } from './shared/error/error-dialog/error-dialog.component';
import { FavouriteComponent } from './favourite/favourite.component';


const googleLoginOptions: LoginOpt = {
  scope: 'https://www.googleapis.com/auth/books'
};

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('274325245304-gagtjb0isocg10bchtnh1qek3et0133f.apps.googleusercontent.com', googleLoginOptions)
  },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider("Facebook-App-Id")
  // }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookshelfComponent,
    PlaceholderComponent,
    BookComponent,
    SearchDialogComponent,
    LoginComponent,
    LibraryComponent,
    GoogleSignUpButtonComponent,
    LoadingDialogComponent,
    LogoutDialogComponent,
    ErrorDialogComponent,
    FavouriteComponent,
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
    MatMenuModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  },
    TokenService,
    ApiService,
    LoadingService,
    ErrorService
  ],
  entryComponents: [
    SearchDialogComponent,
    LoadingDialogComponent,
    LogoutDialogComponent,
    ErrorDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
