import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-button-file',
  templateUrl: './upload-button-file.component.html',
  styleUrls: ['./upload-button-file.component.scss'],
})
export class UploadButtonFileComponent implements OnInit {
  @Input() public text: string = 'Cargar';
  @Input() public disabled: boolean = false;
  @Output() private handdleFile: EventEmitter<File> = new EventEmitter<File>();
  constructor() {}

  ngOnInit(): void {}

  changeFile(event: any) {
    this.handdleFile.emit(event.target.files[0]);
  }
}
