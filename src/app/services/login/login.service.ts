import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginUrl = environment.urlBackend + 'oauth/token';
  constructor(private _http: HttpClient) {}

  public postLogin(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('client_id', environment.clientId)
      .set('client_secret', environment.clientSecret)
      .set('grant_type', environment.grantType);

    return this._http.post(this.loginUrl, body.toString());
  }
  getRole() {
    return Number(localStorage.getItem('role'));
  }
}
