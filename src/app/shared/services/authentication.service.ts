import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
    localStorage.setItem('token', environment.api_key);
  }

  public getToken(): any {
    return localStorage.getItem('token');
  }
}
