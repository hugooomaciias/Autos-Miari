import { Component } from '@angular/core';
import { BotonComponent } from "../../../components/boton/boton.component";
import { PhoneIconComponent } from "../../../components/icons/phone-icon/phone-icon.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-h',
  imports: [BotonComponent, PhoneIconComponent],
  templateUrl: './hero-h.component.html',
  styleUrl: './hero-h.component.scss'
})
export class HeroHComponent {
  constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}