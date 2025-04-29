import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-icon',
  imports: [CommonModule],
  templateUrl: './phone-icon.component.html',
  styleUrl: './phone-icon.component.scss'
})
export class PhoneIconComponent {
  @Input() currentClass = '';
  classBase = 'flex items-center text-current';
}
