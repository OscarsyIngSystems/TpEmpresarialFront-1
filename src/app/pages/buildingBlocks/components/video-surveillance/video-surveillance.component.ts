import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-video-surveillance',
  templateUrl: './video-surveillance.component.html',
  styleUrls: ['./video-surveillance.component.scss']
})
export class VideoSurveillanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
