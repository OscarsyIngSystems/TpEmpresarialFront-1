import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private dataName!: BehaviorSubject<string | null>;
  private objetSelected!: BehaviorSubject<Object | null>;
  constructor() {
    this.dataName = new BehaviorSubject<string | null>(null);
    this.objetSelected = new BehaviorSubject<Object | null>(null);
  }

  public get dataNameValue(): string | null {
    return this.dataName.value;
  }

  public setDataName(name: string | null): void {
    this.dataName.next(name);
  }

  public setObjetSelected(object: Object | null): void {
    this.objetSelected.next(object);
  }

  public get getObjetSelected(): Object | null {
    return this.objetSelected.value;
  }
}
