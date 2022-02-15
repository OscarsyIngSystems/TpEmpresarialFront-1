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
      username: [
        'leonardo.maximo@totalplay.com.mx',
        // 'dual.q.ez@gmail.com',
        [Validators.required, Validators.email],
      ],
      password: [
        '2401_PenitentTangent',
        // 'totalplay1705',
        [Validators.required, Validators.minLength(4)],
      ],
    });
  }

  ngOnInit(): void {
    /** spinner starts on init */
  }

  login(): void {
    this.spinner.show();
    if (this.loginForm.valid) {
      this.loginService
        .postLogin(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(
          (response) => {
            localStorage.setItem('tsoptok', response.accessToken);
            localStorage.setItem('user', response.user.name);
            localStorage.setItem('role', response.user.roleId);

            this.spinner.hide();
            this.router.navigate(['/dashboard']);
          },
          (error) => {
            console.error(error);
            this.spinner.hide();
            this.alertService.errorAlert(
              'Ocurrio un problema, intentelo más tarde',
              'Aceptar'
            );
          }
        );
    }
  }
}
