import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-building-blocks',
  templateUrl: './stepper-building-blocks.component.html',
  styleUrls: ['./stepper-building-blocks.component.scss'],
})
export class StepperBuildingBlocksComponent implements OnInit {
  @Output() isValid: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  ngOnInit(): void {
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
    console.log(event);
    this.isValid.emit(event.previouslySelectedStep.stepControl.valid);
  }
}
