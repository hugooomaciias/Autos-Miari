import { Component, HostListener } from '@angular/core';
import { BotonesRegistroHComponent } from './botones-registro-h/botones-registro-h.component';
import { LogoHComponent } from './logo-h/logo-h.component';
import { NavbarHComponent } from './navbar-h/navbar-h.component';
import { CommonModule } from '@angular/common';
import { MobileMenuHComponent } from "./mobile-menu-h/mobile-menu-h.component";
import { Router } from '@angular/router';
import { XIconComponent } from "../../../components/mobileIcons/x-icon/x-icon.component";
import { MenuIconComponent } from "../../../components/mobileIcons/menu-icon/menu-icon.component";

@Component({
  selector: 'app-header-h',
  imports: [CommonModule, LogoHComponent, NavbarHComponent, BotonesRegistroHComponent, MobileMenuHComponent, XIconComponent, MenuIconComponent],
  templateUrl: './header-h.component.html',
  styleUrl: './header-h.component.scss'
})
export class HeaderHComponent {
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
}