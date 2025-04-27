import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton3',
  imports: [CommonModule],
  templateUrl: './boton3.component.html',
  styleUrl: './boton3.component.scss'
})
export class Boton3Component {
  @Input() class = '';
  classBase = '';
}
