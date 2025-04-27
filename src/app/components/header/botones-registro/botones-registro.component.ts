import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-botones-registro',
  imports: [RouterModule],
  templateUrl: './botones-registro.component.html',
  styleUrl: './botones-registro.component.scss'
})
export class BotonesRegistroComponent {
  @Output() cambiarIniciarSesion = new EventEmitter<void>();
  @Output() cambiarRegistro = new EventEmitter<void>();

  cambiarIni() {
    this.cambiarIniciarSesion.emit();
  }

  cambiarReg() {
    this.cambiarRegistro.emit();
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
