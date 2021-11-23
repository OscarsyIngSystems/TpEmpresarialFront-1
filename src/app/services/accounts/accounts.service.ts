import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private urlTestChart: string = '../../assets/dummy/chartsData.json';

  constructor(private _http: HttpClient) {}

  public getPosts(): Observable<any> {
    return this._http.get(this.urlTestChart);
  }
}
