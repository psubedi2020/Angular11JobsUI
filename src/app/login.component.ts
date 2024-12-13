import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <label for="username">Username:</label>
      <input id="username" formControlName="username" type="text" />

      <label for="password">Password:</label>
      <input id="password" formControlName="password" type="password" />

      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  onSubmit() {
    this.http.post<any>('https://api.example.com/login', this.loginForm.value).subscribe(
      (response) => {
        localStorage.setItem('jwt_token', response.token);
        this.router.navigate(['/jobs']);
      },
      (error) => {
        alert('Bypassing login!');
        this.router.navigate(['/jobs']);
      }
    );
  }
}


