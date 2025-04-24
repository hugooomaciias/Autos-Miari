import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroRComponent } from "./hero-r/hero-r.component";
import { Reserva, ReservasService } from '../../services/reservas/reservas.service';
import { AlertIconComponent } from "../../components/icons/alert-icon/alert-icon.component";

@Component({
  selector: 'app-reservas',
  imports: [CommonModule, HeaderComponent, HeroRComponent, AlertIconComponent],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss'
})
export class ReservasComponent {
  reservas: Reserva[] = [];

  constructor(private reservasService: ReservasService) {}

  ngOnInit(): void {
    this.reservasService.reservas$.subscribe(reservas => {
      console.log('Reservas recibidas:', reservas);
      this.reservas = reservas;
    })
  }
}
