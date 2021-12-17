import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private dataName!: BehaviorSubject<string | null>;
  constructor() {
    this.dataName = new BehaviorSubject<string | null>(null);
  }

  public get dataNameValue(): string | null {
    return this.dataName.value;
  }

  public setDataName(name: string) {
    this.dataName.next(name);
  }
}
