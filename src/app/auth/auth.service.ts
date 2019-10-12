import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly ID_TOKEN_KEY = 'idToken';

  private _idToken: string;

  redirectUrl: string;

  get idToken() {
    if (!this._idToken) {
      this._idToken = localStorage.getItem(this.ID_TOKEN_KEY);
    }
    return this._idToken;
  }
  set idToken(value) {
    localStorage.setItem(this.ID_TOKEN_KEY, value);
    this._idToken = value;
  }

  constructor(private http: HttpClient) {}

  /**
   * Verify if user is authenticated
   */
  isLoggedIn(): boolean {
    return true; // TODO: Add authentication check
    // return this.idToken ? true : false;
  }

  /**
   * Verify user rights
   */
  isAuthorized() {
    return true; // TODO: Add authorization check
  }
}
