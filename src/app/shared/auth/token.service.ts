import { Injectable } from '@angular/core';
import { AuthService } from "../../../assets/libs/angularx-social-login-master";
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TokenService {

private USER_ID: string = null;
public _anyToken :BehaviorSubject<boolean>  = new BehaviorSubject(false);
  
  constructor(private authService: AuthService) {
    this.authService.authState.subscribe(user => {
      if(!isNullOrUndefined(user)){
        this.USER_ID = user.id;
        if(!isNullOrUndefined(user.authToken)){
          // store token in localStorage
          this.save(user.idToken);
        }
      }
      else{
        this.delete();
      }
    this.emit();
    });
  }

  get anyToken(): Observable<boolean>{
    return this._anyToken.asObservable();
  }

  save(token: string): void{
    localStorage.setItem(this.USER_ID, token);
    this.emit();
  }

  get(): string{
    return localStorage.getItem(this.USER_ID);
  }

  delete(): void{
    localStorage.removeItem(this.USER_ID);
    this.emit();
  }

  private emit():void{
    this._anyToken.next(!isNullOrUndefined(this.get()));
  }
}
