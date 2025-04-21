import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroRComponent } from "./hero-r/hero-r.component";

@Component({
  selector: 'app-reservas',
  imports: [CommonModule, HeaderComponent, HeroRComponent],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss'
})
export class ReservasComponent {
  reservas: any[] = [
    {
      id: 1,
      nombre: "Tesla Model S",
      fechaInicio: "2025-05-01",
      fechaFin: "2025-05-05",
    },
    {
      id: 3,
      nombre: "BMW i8",
      fechaInicio: "2025-05-10",
      fechaFin: "2025-05-12",
    },
  ];
}
