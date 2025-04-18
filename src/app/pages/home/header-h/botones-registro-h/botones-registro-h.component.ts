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

  navigateTo(path: string) {
    this.router.navigate([path])
  }
}
