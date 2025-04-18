import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { CartIconComponent } from "../../../components/icons/cart-icon/cart-icon.component";
import { HeaderCComponent } from "./header-c/header-c.component";
import { CommonModule } from '@angular/common';
import { CarruselCComponent } from "./carrusel-c/carrusel-c.component";
import { InfoCComponent } from "./info-c/info-c.component";
import { DescripcionCComponent } from "./descripcion-c/descripcion-c.component";

@Component({
  selector: 'app-detalles-c',
  imports: [CommonModule, Boton2Component, CartIconComponent, HeaderCComponent, CarruselCComponent, InfoCComponent, DescripcionCComponent],
  templateUrl: './detalles-c.component.html',
  styleUrl: './detalles-c.component.scss'
})
export class DetallesComponent {
  @Input() vehicles: any;
  @Input() vehicle: any;

  @Output() close = new EventEmitter();

  closeModal() {
    this.close.emit();
  }
}
