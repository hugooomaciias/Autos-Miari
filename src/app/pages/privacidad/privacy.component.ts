import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroPComponent } from "./hero-p/hero-p.component";
import { BotonComponent } from "../../components/boton/boton.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  imports: [HeaderComponent, HeroPComponent, BotonComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
