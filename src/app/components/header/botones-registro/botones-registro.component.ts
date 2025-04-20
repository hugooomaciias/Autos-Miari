import { Component } from '@angular/core';
import { BotonComponent } from '../../boton/boton.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones-registro',
  imports: [BotonComponent],
  templateUrl: './botones-registro.component.html',
  styleUrl: './botones-registro.component.scss'
})
export class BotonesRegistroComponent {
  constructor(private router: Router) {}

  irAIniciarSesion() {
    this.router.navigate(['/iniciar-sesion'], { queryParams: { tab: 'iniciar-sesion' } });
  }
  
  irARegistro() {
    this.router.navigate(['/iniciar-sesion'], { queryParams: { tab: 'registro' } });
  }
}
