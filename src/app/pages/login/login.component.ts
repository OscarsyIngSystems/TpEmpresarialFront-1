import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

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
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login(): void {
    if(this.loginForm.value.username === 'totalplay' &&  this.loginForm.value.password === '12345') {
      this.router.navigate(['/accounts/dashboard']);
    }else{
      alert('Usuario y password invalidos')
    }

  }
}
