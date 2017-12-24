import { Injectable } from '@angular/core';
import { AuthService } from "angular4-oauth-login/src";
import { Observable } from 'rxjs';

@Injectable()
export class TokenService {

private USER_ID: string;
public tokenObservable: Observable<string>;
  
constructor(private authService: AuthService) {
}

  save(user_id: string, token: string): void{
    this.USER_ID = user_id;
    localStorage.setItem(this.USER_ID, token);
    this.tokenObservable = Observable.of(localStorage.getItem(this.USER_ID));
  }

  get(): string{
    return localStorage.getItem(this.USER_ID);
  }

  delete(): void{
    localStorage.removeItem(this.USER_ID);
  }
}
