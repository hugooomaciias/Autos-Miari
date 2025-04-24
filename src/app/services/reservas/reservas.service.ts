import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Reserva {
  id: number;
  nombre: string;
  fechaInicio: string;
  fechaFin: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private reservasSubject = new BehaviorSubject<Reserva[]>([]);
  reservas$ = this.reservasSubject.asObservable();

  private reservas: Reserva[] = [];

  agregarReserva(reserva: Reserva) {
    this.reservas.push(reserva);
    this.reservasSubject.next([...this.reservas])
  }

  obtenerReservas(): Reserva[] {
    return [...this.reservas];
  }
}