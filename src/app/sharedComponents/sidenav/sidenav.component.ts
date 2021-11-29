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
  // perro: boolean = false;
  @ViewChild('drawer') drawer?: MatDrawer;

  @Input()
  // get toggle() {
  //   return this.perro;
  // }
  set toggle(toggle: boolean) {
    // this.perro = toggle;
    this.drawer?.toggle();
    console.log(toggle, this.drawer);
  }
  constructor() {}

  ngOnInit(): void {}
}
