import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs-related',
  templateUrl: './tabs-related.component.html',
  styleUrls: ['./tabs-related.component.scss'],
})
export class TabsRelatedComponent {
  @Input() cardNames!: Array<string>;
  @Output() currentTabEmmiter: EventEmitter<number> =
    new EventEmitter<number>();

  currentTab: number = 0;
  constructor() {}

  changeTab(index: number): void {
    this.currentTab = index;
    this.currentTabEmmiter.emit(this.currentTab);
  }
}
