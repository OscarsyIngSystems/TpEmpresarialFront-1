import { Injectable } from '@angular/core';

import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Sale } from 'src/app/models/sale';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Sale[]> {
    return this.http.get<Sale[]>('https://my-json-server.typicode.com/emeery/mat-table-filter-button/sales')
  }

}
