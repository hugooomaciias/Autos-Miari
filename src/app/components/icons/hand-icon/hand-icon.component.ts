import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hand-icon',
  imports: [CommonModule],
  templateUrl: './hand-icon.component.html',
  styleUrl: './hand-icon.component.scss'
})
export class HandIconComponent {
  @Input() currentClass = '';
  classBase = 'flex items-center text-current';
}
