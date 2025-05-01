import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  constructor(private router: Router) {}

  navItems = [
    {
      title: "Comprar",
      label: "comprar",
      path: "/comprar",
    },
    {
      title: "Alquilar",
      label: "alquilar",
      path: "/alquilar",
    },
    {
      title: "Tasa tu vehículo",
      label: "tasa-tu-coche",
      path: "/tasa-tu-coche",
    },
    {
      title: "Localización",
      label: "localizacion",
      path: "/localizacion",
    },
    {
      title: "Contacto",
      label: "contacto",
      path: "/contacto",
    },
    {
      title: "Modificar stock",
      label: "modificar-stock",
      path: "/modificar-stock",
    },
    {
      title: "Reservas",
      label: "reservas",
      path: "/reservas",
    }
  ];

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
