import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginUrl = environment.urlBackend + 'oauth/token';
  constructor(private _http: HttpClient) {}

  public postLogin(username: string, password: string) {
    return this._http.post(this.loginUrl, {
      params: {
        username: username,
        password: password,
      },
    });
  }
}
