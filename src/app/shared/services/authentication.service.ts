import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public getToken(): any {
    return localStorage.getItem('token');
  }
}
