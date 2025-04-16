import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-icon',
  imports: [CommonModule],
  templateUrl: './time-icon.component.html',
  styleUrl: './time-icon.component.scss'
})
export class TimeIconComponent {
  @Input() currentClass = '';
  classBase = 'flex items-center text-current';
}
