import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroVComponent } from "./hero-v/hero-v.component";
import { FormularioVComponent } from "./formulario-v/formulario-v.component";
import { CardsVComponent } from "./cards-v/cards-v.component";
import { CtaVComponent } from "./cta-v/cta-v.component";

@Component({
  selector: 'app-concertar-cita',
  imports: [HeaderComponent, HeroVComponent, FormularioVComponent, CardsVComponent, CtaVComponent],
  templateUrl: './concertar-cita.component.html',
  styleUrl: './concertar-cita.component.scss'
})
export class ConcertarCitaComponent {
  
}
