import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://129.159.231.57/api/customer';

  constructor(private http: HttpClient) {}

  submitCustomer(customerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit`, customerData);
  }

  resubmitCustomer(customerId: number, customerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/resubmit/${customerId}`, customerData);
  }

  getPendingCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pending`);
  }

  getAllCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  approveCustomer(customerId: number, approvedBy: string): Observable<any> {
    const headers = new HttpHeaders({ 'X-User': approvedBy });
    return this.http.post(`${this.baseUrl}/approve/${customerId}`, { approvedBy }, { headers });
  }

  rejectCustomer(customerId: number, reason: string, approvedBy: string): Observable<any> {
    const headers = new HttpHeaders({ 'X-User': approvedBy });
    return this.http.post(`${this.baseUrl}/reject/${customerId}`, { reason, approvedBy }, { headers });
  }
}
