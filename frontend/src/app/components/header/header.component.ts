import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BotonesRegistroComponent } from './botones-registro/botones-registro.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BotonMobileComponent } from "../boton-mobile/boton-mobile.component";
import { MobileMenuComponent } from "../../pages/home/header-h/mobile-menu/mobile-menu.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, LogoComponent, NavbarComponent, BotonesRegistroComponent, BotonMobileComponent, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() cambiarIniciarSesion = new EventEmitter<void>();
  @Output() cambiarRegistro = new EventEmitter<void>();
  
  scrolled = false;
  
  constructor(private router: Router) {}
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }

  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  cambiarIni() {
    this.cambiarIniciarSesion.emit();
  }

  cambiarReg() {
    this.cambiarRegistro.emit();
  }
}
