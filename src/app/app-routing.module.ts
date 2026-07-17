import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';
import { CustomerUpdateComponent } from './pages/customer-update/customer-update.component';
import { AdminApprovalComponent } from './pages/admin-approval/admin-approval.component';
import { FinanceApprovalComponent } from './pages/finance-approval/finance-approval.component';
import { MySubmissionsComponent } from './pages/my-submissions/my-submissions.component';
import { AuthGuard } from './services/auth.guard';
import { RoleGuard } from './services/role.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'customer-form', component: CustomerFormComponent, canActivate: [AuthGuard] },
  { path: 'customer-update', component: CustomerUpdateComponent, canActivate: [AuthGuard] },
  { path: 'admin-approval', component: AdminApprovalComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'MASTER' } },
  { path: 'finance-approval', component: FinanceApprovalComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'MASTER' } },
  { path: 'my-submissions', component: MySubmissionsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
