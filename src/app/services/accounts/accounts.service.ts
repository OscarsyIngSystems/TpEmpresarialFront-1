import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../../models/account';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private urlTestChart: string = '../../assets/dummy/chartsData.json';
  private url: string = `${environment.urlBackend}accounts`;

  constructor(private _http: HttpClient) {}

  public getPosts(): Observable<any> {
    return this._http.get(this.urlTestChart);
  }

  getAccounts(): Observable<Account[]> {
    return this._http.get<Account[]>(this.url);
  }
}
