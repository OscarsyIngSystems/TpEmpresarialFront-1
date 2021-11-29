import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer') drawer?: MatDrawer;

  @Input() set toggle(toggle: boolean) {
    // this.drawer?.toggle();
    console.log(toggle, this.drawer);
  }
  constructor() {}

  ngOnInit(): void {}
}
