import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { CommonModule } from '@angular/common';
import { HeaderAComponent } from './header-a/header-a.component';
import { CarruselAComponent } from './carrusel-a/carrusel-a.component';
import { InfoAComponent } from './info-a/info-a.component';
import { DescripcionAComponent } from './descripcion-a/descripcion-a.component';
import { CalendarCheckIconComponent } from "../../../components/icons/calendar-check-icon/calendar-check-icon.component";
import { BotonSliderComponent } from "../../../components/boton-slider/boton-slider.component";
import { LeftArrowIconComponent } from "../../../components/icons/left-arrow-icon/left-arrow-icon.component";
import { RigthArrowIconComponent } from "../../../components/icons/right-arrow-icon/rigth-arrow-icon.component";
import { Reserva, ReservasService } from '../../../services/reservas/reservas.service';

@Component({
  selector: 'app-detalles-a',
  imports: [CommonModule, Boton2Component, HeaderAComponent, InfoAComponent, DescripcionAComponent, CalendarCheckIconComponent, BotonSliderComponent, LeftArrowIconComponent, RigthArrowIconComponent],
  templateUrl: './detalles-a.component.html',
  styleUrl: './detalles-a.component.scss'
})
export class DetallesAComponent {
  @Input() vehicles: any;
  @Input() vehicle: any;

  @Output() close = new EventEmitter();

  constructor(private reservasService: ReservasService) {}

  closeModal() {
    this.close.emit();
  }

  currentIndex = 0;

  next() {
    console.log(this.currentIndex)
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

  reservarVehiculo() {
    const nuevaReserva: Reserva = {
      id: this.vehicle.id,
      nombre: this.vehicle.name,
      fechaInicio: '',
      fechaFin: '',
    }
    this.reservasService.agregarReserva(nuevaReserva);
  }
}
