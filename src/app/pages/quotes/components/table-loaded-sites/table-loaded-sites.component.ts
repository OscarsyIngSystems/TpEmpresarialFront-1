import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-loaded-sites',
  templateUrl: './table-loaded-sites.component.html',
  styleUrls: ['./table-loaded-sites.component.scss']
})
export class TableLoadedSitesComponent implements OnInit {
  @Input() dataSource: any[] = []
  @Input() columns: any[] = []
  @Output() message = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    // console.log(this.dataSource)
    // console.log(this.messageToEmit)
    console.log(this.message)
  }

  highlight(element: Element) {
    console.log(element)
  }

}
