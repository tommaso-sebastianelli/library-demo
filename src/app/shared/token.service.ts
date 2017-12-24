import { Injectable } from '@angular/core';
import { AuthService } from "angular4-oauth-login/src";

@Injectable()
export class TokenService {

USER_ID: string;
  
constructor(private authService: AuthService) {
}

  save(user_id: string, token: string): void{
    this.USER_ID = user_id;
    localStorage.setItem(this.USER_ID, token);
  }

  get(): string{
    return localStorage.getItem(this.USER_ID)
  }

  delete(): void{
    localStorage.removeItem(this.USER_ID);
  }
}
