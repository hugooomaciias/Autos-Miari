import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XIconComponent } from "../mobileIcons/x-icon/x-icon.component";
import { MenuIconComponent } from "../mobileIcons/menu-icon/menu-icon.component";

@Component({
  selector: 'app-boton-mobile',
  imports: [CommonModule, XIconComponent, MenuIconComponent],
  templateUrl: './boton-mobile.component.html',
  styleUrl: './boton-mobile.component.scss'
})
export class BotonMobileComponent {
  @Input() mobileMenuOpen: boolean = false;
  @Output() toggleMobileMenu = new EventEmitter();

  desplegarMenu(): void {
    this.toggleMobileMenu.emit();
  }
}
