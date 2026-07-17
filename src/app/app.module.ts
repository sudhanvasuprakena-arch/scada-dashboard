import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';
import { CustomerUpdateComponent } from './pages/customer-update/customer-update.component';
import { AdminApprovalComponent } from './pages/admin-approval/admin-approval.component';
import { FinanceApprovalComponent } from './pages/finance-approval/finance-approval.component';
import { MySubmissionsComponent } from './pages/my-submissions/my-submissions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegistrationComponent,
    CustomerFormComponent,
    CustomerUpdateComponent,
    AdminApprovalComponent,
    FinanceApprovalComponent,
    MySubmissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
