import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-finalidad-icon',
  imports: [CommonModule],
  templateUrl: './finalidad-icon.component.html',
  styleUrl: './finalidad-icon.component.scss'
})
export class FinalidadIconComponent {
  @Input() currentClass = '';
  classBase = 'flex items-center text-current';
}
