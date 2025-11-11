import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  currentUrl: string = '';

  constructor(public router: Router) {
    this.currentUrl = this.router.url;
    console.log('Navbar initialized, current URL:', this.currentUrl);
  }

  ngOnInit() {
    // Subscribe to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects || event.url;
        console.log('Route changed to:', this.currentUrl, 'Show back button:', this.showBackButton());
      });
  }

  showBackButton(): boolean {
    const shouldShow = this.currentUrl !== '/' && this.currentUrl !== '' && this.currentUrl !== '/home';
    console.log('showBackButton called - Current URL:', this.currentUrl, 'Result:', shouldShow);
    return shouldShow;
  }

  goBack(): void {
    console.log('Back button clicked! Going back to home');
    this.router.navigate(['/']);
  }
}
