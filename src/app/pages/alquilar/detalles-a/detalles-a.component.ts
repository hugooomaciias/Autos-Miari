import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { CommonModule } from '@angular/common';
import { HeaderAComponent } from './header-a/header-a.component';
import { CarruselAComponent } from './carrusel-a/carrusel-a.component';
import { InfoAComponent } from './info-a/info-a.component';
import { DescripcionAComponent } from './descripcion-a/descripcion-a.component';
import { CalendarCheckIconComponent } from "../../../components/icons/calendar-check-icon/calendar-check-icon.component";
import { Reserva, ReservasService } from '../../../services/reservas/reservas.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { CalendarStartComponent } from "../../../components/icons/calendar-start/calendar-start.component";
import { CalendarEndComponent } from "../../../components/icons/calendar-end/calendar-end.component";

@Component({
  selector: 'app-detalles-a',
  imports: [CommonModule, Boton2Component, HeaderAComponent, InfoAComponent, DescripcionAComponent, CalendarCheckIconComponent, CarruselAComponent, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, CalendarStartComponent, CalendarEndComponent],
  templateUrl: './detalles-a.component.html',
  styleUrl: './detalles-a.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DetallesAComponent {
  @Input() vehicles: any;
  @Input() vehicle: any;
  @Input() filters: any = {}
  @Input() mostrarCalendarios: boolean = false;

  @Output() close = new EventEmitter();

  constructor(private reservasService: ReservasService) {}

  closeModal() {
    this.close.emit();
  }

  currentIndex = 0;
  fechaIni: Date | null = null;
  fechaFin: Date | null = null;

  next() {
    console.log(this.currentIndex)
    if (this.currentIndex < this.vehicles[2].vehicleImages.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.vehicles[2].vehicleImages.length - 1;
    }
  }

  reservarVehiculo() {
    if(! this.mostrarCalendarios) {
      this.mostrarCalendarios = true;
    } else if((this.fechaIni != null) && ( this.fechaFin != null)) {

      const fechaIniFormateada = this.fechaIni.toLocaleString('es-ES', { dateStyle: 'long'});
      const fechaFinFormateada = this.fechaFin.toLocaleString('es-ES', { dateStyle: 'long'});

      const nuevaReserva: Reserva = {
        id: this.vehicle.id,
        nombre: this.vehicle.name,
        fechaInicio: fechaIniFormateada,
        fechaFin: fechaFinFormateada
      }

      this.reservasService.agregarReserva(nuevaReserva);
      this.closeModal();
    } else {
      alert("Debes marcar la fecha de inicio de alquiler y la de fin");
    }
  }
}
