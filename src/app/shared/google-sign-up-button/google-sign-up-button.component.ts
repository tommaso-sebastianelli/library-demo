import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../assets/libs/angularx-social-login-master';
import { GoogleLoginProvider, SocialUser } from '../../../assets/libs/angularx-social-login-master';
import { TokenService } from '../auth/token.service';

@Component({
  selector: 'app-google-sign-up-button',
  templateUrl: './google-sign-up-button.component.html',
  styleUrls: ['./google-sign-up-button.component.scss']
})

export class GoogleSignUpButtonComponent implements OnInit {

  constructor(private authService: AuthService, private tokenService: TokenService) { }

  ngOnInit() {
  }

  signInWithGoogle(): void {
    try {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        () => {
          // nothing to do here
        },
        err => {
          this.tokenService.delete();
        })
    }
    catch (e) {
      this.tokenService.delete();
    }
  }

}
