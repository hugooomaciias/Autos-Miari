import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flag-icon',
  imports: [CommonModule],
  templateUrl: './flag-icon.component.html',
  styleUrl: './flag-icon.component.scss'
})
export class FlagIconComponent {
  @Input() currentClass = '';
  classBase = 'flex items-center text-current';
}
