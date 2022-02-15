import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Site } from 'src/app/models/Site';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  url = environment.urlBackend + 'sites';

  constructor(private http: HttpClient) {}

  getRelatedQuotesDetail(id: string): Observable<Site[]> {
    return this.http.get<Site[]>(this.url, { params: { quoteId: id } });
  }
}
