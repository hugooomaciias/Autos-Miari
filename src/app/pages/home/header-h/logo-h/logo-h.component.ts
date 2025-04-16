import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-h',
  imports: [],
  templateUrl: './logo-h.component.html',
  styleUrl: './logo-h.component.scss'
})
export class LogoHComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
