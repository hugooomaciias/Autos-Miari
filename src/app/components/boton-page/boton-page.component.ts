import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-page',
  imports: [CommonModule],
  templateUrl: './boton-page.component.html',
  styleUrl: './boton-page.component.scss'
})
export class BotonPageComponent {
  @Input() active: boolean = true;
}
