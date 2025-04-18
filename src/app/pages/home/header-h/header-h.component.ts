import { Component, HostListener } from '@angular/core';
import { BotonesRegistroHComponent } from './botones-registro-h/botones-registro-h.component';
import { LogoHComponent } from './logo-h/logo-h.component';
import { NavbarHComponent } from './navbar-h/navbar-h.component';
import { BotonMobileComponent } from "../../../components/boton-mobile/boton-mobile.component";
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-h',
  imports: [CommonModule, LogoHComponent, NavbarHComponent, BotonesRegistroHComponent, BotonMobileComponent, MobileMenuComponent],
  templateUrl: './header-h.component.html',
  styleUrl: './header-h.component.scss'
})
export class HeaderHComponent {
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