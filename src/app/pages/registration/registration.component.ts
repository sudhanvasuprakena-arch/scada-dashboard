import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  message: string = '';
  messageType: string = '';
  loading: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      employeeNumber: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: [''],
      department: ['', Validators.required],
      supervisorName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.coop$')]],
      confirmEmail: ['', [Validators.required]]
    });
  }

  onRegister() {
    Object.keys(this.registrationForm.controls).forEach(key => {
      const val = this.registrationForm.get(key).value;
      if (typeof val === 'string') this.registrationForm.get(key).setValue(val.trim());
    });
    if (this.registrationForm.invalid) return;
    if (this.registrationForm.get('emailAddress').value !== this.registrationForm.get('confirmEmail').value) return;

    const form = this.registrationForm.value;
    this.loading = true;
    this.message = '';

    const payload = {
      employeeNumber: form.employeeNumber,
      firstName: form.firstName,
      lastName: form.lastName,
      fullName: form.firstName + ' ' + form.lastName,
      department: form.department,
      supervisorName: form.supervisorName,
      emailAddress: form.emailAddress,
      mobileNumber: '0000000000',
      address: 'NA',
      username: form.employeeNumber,
      password: 'welcome1'
    };

    this.http.post<any>('http://129.159.231.57/api/registration/register', payload).subscribe(
      (res) => {
        this.loading = false;
        if (res.status === 'SUCCESS') {
          this.message = res.message;
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
