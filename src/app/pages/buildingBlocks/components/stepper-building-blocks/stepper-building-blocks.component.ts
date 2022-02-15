import { StepperSelectionEvent } from '@angular/cdk/stepper';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-building-blocks',
  templateUrl: './stepper-building-blocks.component.html',
  styleUrls: ['./stepper-building-blocks.component.scss'],
})
export class StepperBuildingBlocksComponent implements OnInit {
  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('stepper') step: any;
  stepSelected = 0;
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  invalid: any;
  isEditable = true;
  buttonTextFamilies = 'Configura el equipamiento';
  buttonTextEquipment = 'Configura los adicionales';
  buttonTextAdditional = 'Guardar adicionales';

  constructor(private _formBuilder: FormBuilder) {}

  columnsShow = [
    {
      key: 'servicesPrice',
      columnName: 'Servicios / Precio',
    },
    {
      key: 'megas',
      columnName: 'Megas',
    },
    {
      key: 'amount',
      columnName: 'Cantidad',
    },
  ];

  dataSource = [
    {
      pack: {
        service: 'Simétrico',
        price: '$1,400.00',
      },
    },
    {
      pack: {
        service: 'Asimétrico',
        price: '$1,400.00',
      },
    },
    {
      pack: {
        service: 'Dedicado',
        price: '$1,400.00',
      },
    },
  ];
  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  changeStepper(event: StepperSelectionEvent) {
    this.step._elementRef.nativeElement.className =
      'mat-stepper-horizontal mt-2 viewStepper ng-tns-c294-7 mat-stepper-label-position-end ng-star-inserted border-red';
    this.stepSelected = event.selectedIndex;

    this.isValid.emit(event.previouslySelectedStep.stepControl.valid);
  }
}
