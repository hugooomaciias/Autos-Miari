import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { CartIconComponent } from "../../../components/icons/cart-icon/cart-icon.component";
import { CommonModule } from '@angular/common';
import { HeaderAComponent } from './header-a/header-a.component';
import { CarruselAComponent } from './carrusel-a/carrusel-a.component';
import { InfoAComponent } from './info-a/info-a.component';
import { DescripcionAComponent } from './descripcion-a/descripcion-a.component';

@Component({
  selector: 'app-detalles-a',
  imports: [CommonModule, Boton2Component, CartIconComponent, HeaderAComponent, CarruselAComponent, InfoAComponent, DescripcionAComponent],
  templateUrl: './detalles-a.component.html',
  styleUrl: './detalles-a.component.scss'
})
export class DetallesAComponent {
  @Input() vehicles: any;
  @Input() vehicle: any;

  @Output() close = new EventEmitter();

  closeModal() {
    this.close.emit();
  }
}
