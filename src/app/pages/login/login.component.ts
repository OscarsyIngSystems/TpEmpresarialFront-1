import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertsService } from 'src/app/services/shared/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public contentLabels = 'login.';
  public loginForm: FormGroup;
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private alertService: AlertsService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    /** spinner starts on init */
  }

  login(): void {
    this.spinner.show();
    if (
      this.loginForm.value.username === 'totalplay' &&
      this.loginForm.value.password === '12345'
    ) {
      setTimeout(() => {
        this.router.navigate(['/accounts/dashboard']);
        this.spinner.hide();
      }, 2000);
    } else {
      setTimeout(() => {
        this.spinner.hide();
        this.alertService.errorAlert(
          'Usuario y/o contraseña incorrectos',
          'Aceptar'
        );
      }, 2000);
    }
  }
}
