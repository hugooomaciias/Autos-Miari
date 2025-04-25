import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
