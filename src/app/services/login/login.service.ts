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
      .set(
        'client_id',
        '3MVG9eQyYZ1h89Hetz38l0dzDD32F1AcXpvWWkiOzUq0p3hiwlpFhYaaUkOEsYDCLcZRJsUUzCKkZ1.13.v1g'
      )
      .set(
        'client_secret',
        '9F8AF7C2FF70FEDAEB781C7464495537E1D79F25284DB89BD80FB756C0D53821'
      )
      .set('grant_type', 'password');

    return this._http.post(this.loginUrl, body.toString());
  }
}
