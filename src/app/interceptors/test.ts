import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    httpRequest = httpRequest.clone({
      setHeaders: {
        client_id:
          '3MVG9eQyYZ1h89Hetz38l0dzDD32F1AcXpvWWkiOzUq0p3hiwlpFhYaaUkOEsYDCLcZRJsUUzCKkZ1.13.v1g',
        client_secret:
          '9F8AF7C2FF70FEDAEB781C7464495537E1D79F25284DB89BD80FB756C0D53821',
        grant_type: 'password',
      },
    });

    return next.handle(httpRequest);
  }
}
