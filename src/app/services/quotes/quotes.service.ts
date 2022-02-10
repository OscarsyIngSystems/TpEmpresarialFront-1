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

  getRelatedOpportunitiesDetail(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.url, { params: { opportunityId: id } });
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://my-json-server.typicode.com/emeery/mat-table-filter-button/sales'
    );
  }

  getQuotesReceived(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://my-json-server.typicode.com/emeery/mat-table-filter-button/quotes-received'
    );
  }
}
