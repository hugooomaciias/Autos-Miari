import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
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
    {
      title: "Modificar stock",
      label: "modificar-stock",
      path: "modificar-stock",
    },
    {
      title: "Reservas",
      label: "reservas",
      path: "reservas",
    }
  ];

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
