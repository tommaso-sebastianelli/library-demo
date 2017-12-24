import { Component, OnInit } from '@angular/core';

import { AuthService } from "angular4-oauth-login/src";
import { TokenService } from '../token.service';

import { /*FacebookLoginProvider,*/ GoogleLoginProvider, SocialUser } from "angular4-oauth-login/src";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
 
  constructor(private authService: AuthService, private tokenService: TokenService) { }
 
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if(this.user && this.user.authToken){
        this.tokenService.save(this.user.id, this.user.authToken.id_token);
      }
      // console.log(this.user);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }
}
