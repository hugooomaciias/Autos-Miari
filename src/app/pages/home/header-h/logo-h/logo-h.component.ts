import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-logo-h',
  imports: [RouterModule],
  templateUrl: './logo-h.component.html',
  styleUrl: './logo-h.component.scss'
})
export class LogoHComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
