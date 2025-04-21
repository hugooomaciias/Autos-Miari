import { Component, EventEmitter, Output } from '@angular/core';
import { BotonComponent } from '../../boton/boton.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones-registro',
  imports: [BotonComponent],
  templateUrl: './botones-registro.component.html',
  styleUrl: './botones-registro.component.scss'
})
export class BotonesRegistroComponent {
  @Output() cambiarIniciarSesion = new EventEmitter<void>();
  @Output() cambiarRegistro = new EventEmitter<void>();
  
  constructor(private router: Router) {}

  irAIniciarSesion() {
    this.router.navigate(['/iniSes-Reg'], { queryParams: { tab: 'iniciar-sesion' } });
  }
  
  irARegistro() {
    this.router.navigate(['/iniSes-Reg'], { queryParams: { tab: 'registro' } });
  }

  cambiarIni() {
    this.cambiarIniciarSesion.emit();
  }

  cambiarReg() {
    this.cambiarRegistro.emit();
  }
}
