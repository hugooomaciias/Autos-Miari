import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-menu-h',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-menu-h.component.html',
  styleUrl: './mobile-menu-h.component.scss'
})
export class MobileMenuHComponent {
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
