import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BotonSliderComponent } from "../../../../components/boton-slider/boton-slider.component";
import { LeftArrowIconComponent } from "../../../../components/icons/left-arrow-icon/left-arrow-icon.component";
import { RigthArrowIconComponent } from "../../../../components/icons/right-arrow-icon/rigth-arrow-icon.component";

@Component({
  selector: 'app-carrusel-c',
  imports: [CommonModule, BotonSliderComponent, LeftArrowIconComponent, RigthArrowIconComponent],
  templateUrl: './carrusel-c.component.html',
  styleUrl: './carrusel-c.component.scss'
})
export class CarruselCComponent {
  @Input() vehicle: any;
  @Input() vehicles: any;

  currentIndex = 0;

  next() {
    if (this.currentIndex < this.vehicles[2].vehicleImages.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Vuelve al principio
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.vehicles[2].vehicleImages.length - 1; // Ir al final
    }
  }
}
