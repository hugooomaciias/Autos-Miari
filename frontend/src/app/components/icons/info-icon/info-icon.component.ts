import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-icon',
  imports: [CommonModule],
  templateUrl: './info-icon.component.html',
  styleUrl: './info-icon.component.scss'
})
export class InfoIconComponent {
  @Input() currentClass = '';
  classBase = 'flex items-center text-current';
}
