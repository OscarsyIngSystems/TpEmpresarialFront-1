import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-oportunity-form',
  templateUrl: './oportunity-form.component.html',
  styleUrls: ['./oportunity-form.component.scss'],
})
export class OportunityFormComponent implements OnInit {
  public oportunityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.oportunityForm = this.fb.group({
      accountName: [''],
      closeDate: ['', Validators.required],
      postSaleFlow: [''],
      description: [''],
      oportunityName: ['', Validators.required],
      probability: [''],
      badge: ['', Validators.required],
      oportunityOrigin: ['', Validators.required],
      tryby: [false],
      executive: [''],
    });
  }

  ngOnInit(): void {}
}
