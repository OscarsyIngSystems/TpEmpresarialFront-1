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
    if (
      httpRequest.url !=
      'https://dev.totalplay.amarello.cloud/v1/tpe/oauth/token'
    ) {
      const tkn = JSON.parse(JSON.stringify(localStorage.getItem('tsoptok')));
      httpRequest = httpRequest.clone({
        setHeaders: {
          'Content-type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${tkn}`,
        },
      });
    } else {
      httpRequest = httpRequest.clone({
        setHeaders: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      });
    }
    return next.handle(httpRequest);
  }
}
