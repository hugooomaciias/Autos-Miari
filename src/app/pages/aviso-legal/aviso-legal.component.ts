import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroAComponent } from "./hero-a/hero-a.component";
import { BotonComponent } from "../../components/boton/boton.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-aviso-legal',
  imports: [HeaderComponent, HeroAComponent, BotonComponent],
  templateUrl: './aviso-legal.component.html',
  styleUrl: './aviso-legal.component.scss'
})
export class AvisoLegalComponent {
  constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
