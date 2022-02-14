import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-map',
  templateUrl: './custom-map.component.html',
  styleUrls: ['./custom-map.component.scss'],
})
export class CustomMapComponent implements OnInit {
  lat = 19.3344076;
  lng = -99.19845343;
  zoom = 17;
  constructor() {}

  ngOnInit(): void {}
}
