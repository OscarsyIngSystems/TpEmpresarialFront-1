import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  public isNullOrUndefined(object: any): boolean {
    return object === (null || undefined);
  }
  public isNullOrUndefinedString(object: any): boolean {
    return object === (null || undefined || '');
  }
}
