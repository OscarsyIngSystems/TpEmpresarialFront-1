import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogQuotesComponent } from '../../dialog-quotes/dialog-quotes.component';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
  name = '“COT7808232”';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogQuotesComponent, {
      width: '393px',
      height: '291px',
      data: { name: this.name },
    });
  }
}
