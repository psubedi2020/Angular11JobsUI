// Angular 11 App: Displaying Job Openings with JWT Authentication

// File: app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JobListComponent } from './job-list/job-list.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [AppComponent, LoginComponent, JobListComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

