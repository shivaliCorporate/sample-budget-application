import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public getToken(): any {
    return localStorage.getItem('token');
  }

  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();
  //   // return a boolean indicating whether or not the token is expired
  //   if (token) return true; else return false;
  // }
}
