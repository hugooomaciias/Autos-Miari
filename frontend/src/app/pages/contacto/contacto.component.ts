import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroCComponent } from "./hero-c/hero-c.component";
import { FormularioCComponent } from "./formulario-c/formulario-c.component";
import { PreguntasFrecComponent } from "./preguntas-frec/preguntas-frec.component";

@Component({
  selector: 'app-contacto',
  imports: [HeaderComponent, HeroCComponent, FormularioCComponent, PreguntasFrecComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

}
