import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartIconComponent } from "../../../components/icons/cart-icon/cart-icon.component";
import { HeaderCComponent } from "./header-c/header-c.component";
import { CommonModule } from '@angular/common';
import { CarruselCComponent } from "./carrusel-c/carrusel-c.component";
import { InfoCComponent } from "./info-c/info-c.component";
import { DescripcionCComponent } from "./descripcion-c/descripcion-c.component";

@Component({
  selector: 'app-detalles-c',
  imports: [CommonModule, CartIconComponent, HeaderCComponent, CarruselCComponent, InfoCComponent, DescripcionCComponent],
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
