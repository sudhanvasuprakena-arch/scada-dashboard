import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BAMUL Customer Master Portal';
  showNav: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects || event.url;
        this.showNav = !(url === '/login' || url === '/register' || url === '/reset-password');
      }
    });
  }

  get userRole(): string {
    const user = this.authService.getUser();
    return user ? user.role : '';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
