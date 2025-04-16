import { Component } from '@angular/core';
import { HeroTComponent } from "./hero-t/hero-t.component";
import { FormularioPasoAPasoComponent } from "./formulario-paso-apaso/formulario-paso-apaso.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-tasa-tu-coche',
  imports: [HeroTComponent, FormularioPasoAPasoComponent, HeaderComponent],
  templateUrl: './tasa-tu-coche.component.html',
  styleUrl: './tasa-tu-coche.component.scss'
})
export class TasaTuCocheComponent {

}
