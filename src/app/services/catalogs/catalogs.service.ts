import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalog, SimpleCatalog } from 'src/app/models/Catalogs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogsService {
  private url = environment.urlBackend + 'catalogs/';
  constructor(private _http: HttpClient) {}

  public getCatalogOpportunityOrigin(): Observable<SimpleCatalog[]> {
    return this._http.get<SimpleCatalog[]>(this.url + 'opportunityOrigin');
  }
  public getCatalogoOportunityIntegrator(): Observable<Catalog[]> {
    return this._http.get<Catalog[]>(this.url + 'opportunityIntegrator');
  }
  public getCatalogQuoteEps(): Observable<Catalog[]> {
    return this._http.get<Catalog[]>(this.url + 'quoteEps');
  }
}
