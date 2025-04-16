import { Component, HostListener } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BotonesRegistroComponent } from './botones-registro/botones-registro.component';
import { CommonModule } from '@angular/common';
import { BotonComponent } from "../boton/boton.component";
import { Router } from '@angular/router';
import { XIconComponent } from "../mobileIcons/x-icon/x-icon.component";
import { MenuIconComponent } from "../mobileIcons/menu-icon/menu-icon.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, BotonComponent, XIconComponent, MenuIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }

  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


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
