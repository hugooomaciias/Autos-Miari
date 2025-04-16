import { Component } from '@angular/core';
import { HeroLComponent } from "../localizacion/hero-l/hero-l.component";
import { HeaderComponent } from "../../components/header/header.component";
import { MapLComponent } from './map-l/map-l.component';
import { CardsLComponent } from "./cards-l/cards-l.component";
import { CtaLComponent } from "./cta-l/cta-l.component";

@Component({
  selector: 'app-localizacion',
  imports: [HeroLComponent, HeaderComponent, MapLComponent, CardsLComponent, CtaLComponent],
  templateUrl: './localizacion.component.html',
  styleUrl: './localizacion.component.scss'
})
export class LocalizacionComponent {

}
