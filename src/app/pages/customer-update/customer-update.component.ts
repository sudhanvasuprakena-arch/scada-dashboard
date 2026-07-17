import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  searchQuery: string = '';
  searchResults: any[] = [];
  selectedCustomer: any = null;
  editing: boolean = false;
  message: string = '';
  messageType: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  search() {
    if (!this.searchQuery || this.searchQuery.length < 2) {
      alert('Enter at least 2 characters to search');
      return;
    }
    this.http.get<any[]>('http://129.159.231.57/api/customer/search-for-update?q=' + this.searchQuery).subscribe(
      (data) => {
        this.searchResults = data;
        if (data.length === 0) {
          this.message = 'No customers found';
          this.messageType = 'warning';
        } else {
          this.message = '';
        }
      },
      (err) => { alert('Search failed'); }
    );
  }

  selectCustomer(cust: any) {
    if (cust.source === 'LEGACY') {
      this.http.get<any>('http://129.159.231.57/api/customer/legacy-detail/' + cust.customerId).subscribe(
        (detail) => {
          localStorage.setItem('editCustomer', JSON.stringify(detail));
          this.router.navigate(['/customer-form']);
        },
        (err) => {
          localStorage.setItem('editCustomer', JSON.stringify(cust));
          this.router.navigate(['/customer-form']);
        }
      );
    } else {
      this.http.get<any>('http://129.159.231.57/api/customer/detail/' + cust.customerId).subscribe(
        (detail) => {
          localStorage.setItem('editCustomer', JSON.stringify(detail));
          this.router.navigate(['/customer-form']);
        },
        (err) => {
          localStorage.setItem('editCustomer', JSON.stringify(cust));
          this.router.navigate(['/customer-form']);
        }
      );
    }
  }

  submitUpdate() {
    if (!confirm('Are you sure you want to submit this update for approval?')) return;
    this.http.post<any>('http://129.159.231.57/api/customer/update-request', this.selectedCustomer).subscribe(
      (res) => {
        if (res.status === 'SUCCESS') {
          alert('Update request submitted for approval!');
          this.editing = false;
          this.selectedCustomer = null;
          this.searchQuery = '';
        } else {
          alert('Error: ' + res.message);
        }
      },
      (err) => { alert('Server error'); }
    );
  }

  cancel() {
    this.editing = false;
    this.selectedCustomer = null;
  }
}
