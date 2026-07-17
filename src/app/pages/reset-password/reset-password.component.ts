import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  // Step 1: Validate
  username: string = '';
  emailId: string = '';
  validated: boolean = false;

  // Step 2: Change password
  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  message: string = '';
  messageType: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  validateUser() {
    if (!this.username || !this.emailId) {
      this.message = 'Username and Email are required';
      this.messageType = 'danger';
      return;
    }
    this.loading = true;
    this.message = '';

    this.http.post<any>('http://129.159.231.57/api/auth/validate-user', {
      username: this.username,
      emailId: this.emailId
    }).subscribe(
      (res) => {
        this.loading = false;
        if (res.status === 'SUCCESS') {
          this.validated = true;
          this.message = '';
        } else {
          this.message = res.message;
          this.messageType = 'danger';
        }
      },
      (err) => {
        this.loading = false;
        this.message = 'Server error. Please try again.';
        this.messageType = 'danger';
      }
    );
  }

  changePassword() {
    if (!this.oldPassword || !this.newPassword || !this.confirmNewPassword) {
      this.message = 'All fields are required';
      this.messageType = 'danger';
      return;
    }
    if (this.newPassword.length < 6) {
      this.message = 'New password must be at least 6 characters';
      this.messageType = 'danger';
      return;
    }
    if (this.newPassword !== this.confirmNewPassword) {
      this.message = 'New passwords do not match';
      this.messageType = 'danger';
      return;
    }
    if (this.oldPassword === this.newPassword) {
      this.message = 'New password must be different from old password';
      this.messageType = 'danger';
      return;
    }

    this.loading = true;
    this.message = '';

    this.http.post<any>('http://129.159.231.57/api/auth/reset-password', {
      username: this.username,
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    }).subscribe(
      (res) => {
        this.loading = false;
        if (res.status === 'SUCCESS') {
          this.message = 'Password changed successfully! Please login with new password.';
          this.messageType = 'success';
          setTimeout(() => this.router.navigate(['/login']), 2000);
        } else {
          this.message = res.message;
          this.messageType = 'danger';
        }
      },
      (err) => {
        this.loading = false;
        this.message = 'Server error. Please try again.';
        this.messageType = 'danger';
      }
    );
  }
}
