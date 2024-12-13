import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-list',
  template: `
    <h2>Job Openings</h2>
    <ul>
      <li *ngFor="let job of jobs">
        <h3>{{ job.title }}</h3>
        <p>Company: {{ job.company }}</p>
        <p>Location: {{ job.location }}</p>
        <p>Salary: {{ job.salary }}</p>
        <p>Description: {{ job.description }}</p>
        <p>Posted on: {{ job.postedDate }}</p>
      </li>
    </ul>
  `,
})
export class JobListComponent implements OnInit {
  jobs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://api.example.com/jobs').subscribe(
      (data) => {
        this.jobs = data;
      },
      (error) => {
        alert('Please configure a proper jobs data source');
      }
    );
  }
}

// File: app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
