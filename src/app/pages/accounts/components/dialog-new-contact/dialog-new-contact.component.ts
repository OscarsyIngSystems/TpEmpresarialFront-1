import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-new-contact',
  templateUrl: './dialog-new-contact.component.html',
  styleUrls: ['./dialog-new-contact.component.scss'],
})
export class DialogNewContactComponent implements OnInit {
  formNewContact: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formNewContact = this.fb.group({
      name: ['Joaquín', Validators.required],
      paternal: ['', Validators.required],
      mother: ['', Validators.required],
      phone: ['5526743870', Validators.required],
      extension: [''],
      mobile: ['', Validators.required],
      mail: ['jlopez.facturación@audi.com.mx', Validators.required],
      typeContact: ['0', Validators.required],
    });
  }

  ngOnInit(): void {}
}
