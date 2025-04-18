import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Boton2Component } from "../../components/boton2/boton2.component";
import { HeaderComponent } from "../../components/header/header.component";
import { HeroIniSesComponent } from "./hero-ini-ses/hero-ini-ses.component";

@Component({
  selector: 'app-iniciar-sesion',
  imports: [CommonModule, Boton2Component, HeaderComponent, HeroIniSesComponent],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.scss'
})
export class IniciarSesionComponent {
  activeTab: 'iniciar-sesion' | 'registro' = 'iniciar-sesion';

  constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
