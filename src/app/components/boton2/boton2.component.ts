import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton2',
  imports: [CommonModule],
  templateUrl: './boton2.component.html',
  styleUrl: './boton2.component.scss'
})
export class Boton2Component {
  @Input() class = '';
  classBase = '';
}
