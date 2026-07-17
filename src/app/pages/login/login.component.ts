import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.errorMessage = '';
    this.loading = true;

    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe(
      (res: any) => {
        this.loading = false;
        if (res.status === 'SUCCESS') {
          this.authService.setUser(res);
          if (res.role === 'MASTER') {
            this.router.navigate(['/admin-approval']);
          } else {
            this.router.navigate(['/customer-form']);
          }
        } else {
          this.errorMessage = res.message;
        }
      },
      (err) => {
        this.loading = false;
        this.errorMessage = 'Server not reachable. Please try again.';
      }
    );
  }
}
