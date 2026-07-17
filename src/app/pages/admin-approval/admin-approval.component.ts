import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.component.html',
  styleUrls: ['./admin-approval.component.css']
})
export class AdminApprovalComponent implements OnInit {

  users: any[] = [];
  selectedUser: any = null;
  showRejectInput: boolean = false;
  rejectReason: string = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const user = this.authService.getUser();
    if (!user || user.role !== 'MASTER') {
      window.location.href = '/customer-portal/customer-form';
      return;
    }
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<any[]>('http://129.159.231.57/api/registration/all').subscribe(
      (data) => { this.users = data; },
      (err) => { console.error('Error loading registrations:', err); }
    );
  }

  viewDetails(user: any) {
    this.selectedUser = user;
    this.showRejectInput = false;
    this.rejectReason = '';
  }

  isExpired(user: any): boolean {
    // DISABLED: Super Master feature
    if (!user.creationDate) return false;
    const created = new Date(user.creationDate).getTime();
    const now = new Date().getTime();
    return (now - created) > 24 * 60 * 60 * 1000;
  }

  closeModal() {
    this.selectedUser = null;
    this.showRejectInput = false;
    this.rejectReason = '';
  }

  approve() {
    const currentUser = this.authService.getUser();
    const approvedBy = currentUser ? currentUser.username : 'ADMIN';
    this.http.post<any>('http://129.159.231.57/api/registration/approve/' + this.selectedUser.regId, { approvedBy: approvedBy }).subscribe(
      (res) => {
        if (res.status === 'SUCCESS') {
          alert('Registration approved for ' + this.selectedUser.fullName);
          this.closeModal();
          this.loadUsers();
        } else {
          alert('Error: ' + res.message);
        }
      },
      (err) => alert('Server error')
    );
  }

  showRejectBox() { this.showRejectInput = true; }
  cancelReject() { this.showRejectInput = false; this.rejectReason = ''; }

  confirmReject() {
    this.http.post<any>('http://129.159.231.57/api/registration/reject/' + this.selectedUser.regId, { reason: this.rejectReason, rejectedBy: 'ADMIN' }).subscribe(
      (res) => {
        alert('Registration rejected for ' + this.selectedUser.fullName);
        this.closeModal();
        this.loadUsers();
      },
      (err) => alert('Server error')
    );
  }
}
