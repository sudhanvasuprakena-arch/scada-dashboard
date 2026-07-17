import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = this.authService.getUser();
    const expectedRole = route.data['role'];

    if (user && user.role === expectedRole) {
      return true;
    }

    this.router.navigate(['/customer-form']);
    return false;
  }
}
