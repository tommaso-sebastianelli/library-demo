import { Component, OnInit } from '@angular/core';

import { AuthService } from "angular4-oauth-login/src";
import { FacebookLoginProvider, GoogleLoginProvider, SocialUser } from "angular4-oauth-login/src";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
 
  constructor(private authService: AuthService) { }
 
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
