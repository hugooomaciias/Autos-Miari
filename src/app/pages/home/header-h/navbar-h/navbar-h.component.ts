import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar-h',
  imports: [CommonModule],
  templateUrl: './navbar-h.component.html',
  styleUrl: './navbar-h.component.scss'
})
export class NavbarHComponent {
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
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
