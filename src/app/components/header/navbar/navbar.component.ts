import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) {}
  
  navItems = [
    {
      title: "Comprar",
      label: "comprar",
      path: "comprar",
    },
    {
      title: "Alquilar",
      label: "alquilar",
      path: "alquilar",
    },
    {
      title: "Tasa tu vehículo",
      label: "tasa-tu-coche",
      path: "tasa-tu-coche",
    },
    {
      title: "Localización",
      label: "localizacion",
      path: "localizacion",
    },
    {
      title: "Contacto",
      label: "contacto",
      path: "contacto",
    },
  ];

  navigateTo(path: string) {
    this.router.navigate([path])
  }
}
