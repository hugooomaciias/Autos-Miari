import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BotonComponent } from "../../components/boton/boton.component";
import { HeaderComponent } from "../../components/header/header.component";
import { HeroCookComponent } from "./hero-cook/hero-cook.component";

@Component({
  selector: 'app-cookies',
  imports: [BotonComponent, HeaderComponent, HeroCookComponent],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss'
})
export class CookiesComponent {
  constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
