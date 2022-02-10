import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpportunitiesService {
  url = environment.urlBackend + 'opportunities';

  constructor(private http: HttpClient) {}

  getOpportunities(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  getRelatedAccountsDetail(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.url, { params: { accountId: id } });
  }
}
