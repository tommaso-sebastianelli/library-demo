import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login-master";
import { GoogleLoginProvider, SocialUser } from "angularx-social-login-master";

@Component({
  selector: 'app-google-sign-up-button',
  templateUrl: './google-sign-up-button.component.html',
  styleUrls: ['./google-sign-up-button.component.scss']
})

export class GoogleSignUpButtonComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
