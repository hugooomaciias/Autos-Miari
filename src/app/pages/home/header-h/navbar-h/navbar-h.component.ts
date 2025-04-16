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
      title: "Catálogo",
      label: "catalogo",
      path: "catalogo",
    },
    {
      title: "Tasa tu coche",
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
