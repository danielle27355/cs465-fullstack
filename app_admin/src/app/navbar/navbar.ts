import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(
    private authenticationService: Authentication,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public onLogout(): void {
    // 1. Remove token from storage
    this.authenticationService.logout();

    // 2. Force change detection so navbar UI updates instantly
    this.cd.detectChanges();

    // 3. Navigate back or refresh view
    if (this.router.url === '/' || this.router.url === '/trips') {
      // Reload current route so components (Add Trip / Edit Trip) update immediately
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
