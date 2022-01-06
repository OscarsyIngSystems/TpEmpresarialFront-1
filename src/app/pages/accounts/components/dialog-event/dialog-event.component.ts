import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-event',
  templateUrl: './dialog-event.component.html',
  styleUrls: ['./dialog-event.component.scss'],
})
export class DialogEventComponent implements OnInit {
  form: FormGroup;
  team: Array<any> = [];
  searchData = new FormControl('', Validators.required);
  selectedOption = '';
  filteredOptions: Observable<any[]> | undefined;
  options = [
    { id: 1, name: 'Jose Juan', lastName: 'Robles' },
    { id: 2, name: 'Oscar', lastName: 'Serrano' },
    { id: 3, name: 'Leonardo', lastName: 'Maximo' },
    { id: 4, name: 'Miguel', lastName: 'Valente' },
    { id: 5, name: 'Eduardo', lastName: 'Osorio' },
  ];

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public title: string
  ) {
    this.form = this.fb.group({
      subject: ['0', Validators.required],
      allDayEvent: [true],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      startTime: [''],
      endTime: [''],
      reminder: ['0'],
      invite: [''],
    });
    this.loadOptions();
  }

  ngOnInit(): void {}

  addTeam(): void {
    this.team.push(this.form.value);
    console.log(this.team);
  }
  private loadOptions(): void {
    this.filteredOptions = this.searchData.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }
  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      (option: any) =>
        option.name.toLowerCase().includes(filterValue) ||
        option.lastName.toLocaleLowerCase().includes(filterValue)
    );
  }
  public search(): void {
    alert('Buscando... ' + this.searchData.value);
  }
  clearSearch(): void {
    this.selectedOption = '';
    this.searchData.setValue('');
  }
  public setSelectedOption(value: any): void {
    this.selectedOption = value;
  }
}
