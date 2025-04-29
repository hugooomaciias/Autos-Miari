import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-off-icon',
  imports: [CommonModule],
  templateUrl: './time-off-icon.component.html',
  styleUrl: './time-off-icon.component.scss'
})
export class TimeOffIconComponent {
  @Input() currentClass = '';
  classBase = 'flex items-center text-current';
}
