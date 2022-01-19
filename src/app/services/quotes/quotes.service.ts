import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  url = environment.urlBackend + 'quotes';

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getQuoteDetail(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/' + id);
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://my-json-server.typicode.com/emeery/mat-table-filter-button/sales'
    );
  }
}
