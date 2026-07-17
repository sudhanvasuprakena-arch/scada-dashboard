import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-submissions',
  templateUrl: './my-submissions.component.html',
  styleUrls: ['./my-submissions.component.css']
})
export class MySubmissionsComponent implements OnInit {
  submissions: any[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const username = user.username || '';
    this.http.get<any[]>('http://129.159.231.57/api/customer/my-submissions/' + username).subscribe(
      (data) => { this.submissions = data; this.loading = false; },
      () => { this.loading = false; }
    );
  }

  getStatusLabel(status: string): string {
    if (status === 'PA') return 'PENDING';
    if (status === 'S') return 'APPROVED';
    if (status === 'REJECTED') return 'REJECTED';
    if (status === 'E') return 'ERROR';
    return status || '-';
  }

  resubmit(cust: any) {
    this.http.get<any>('http://129.159.231.57/api/customer/detail/' + cust.customerId).subscribe(
      (fullCust) => {
        localStorage.setItem('editCustomer', JSON.stringify(fullCust));
        this.router.navigate(['/customer-form']);
      },
      () => { alert('Failed to load customer details'); }
    );
  }
}
