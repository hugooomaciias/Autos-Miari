import { Component } from '@angular/core';
import { BotonComponent } from '../../../../components/boton/boton.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones-registro-h',
  imports: [BotonComponent],
  templateUrl: './botones-registro-h.component.html',
  styleUrl: './botones-registro-h.component.scss'
})
export class BotonesRegistroHComponent {
  constructor(private router: Router) {}

  irAIniciarSesion() {
    this.router.navigate(['/iniciar-sesion'], { queryParams: { tab: 'iniciar-sesion' } });
  }
  
  irARegistro() {
    this.router.navigate(['/iniciar-sesion'], { queryParams: { tab: 'registro' } });
  }
}
