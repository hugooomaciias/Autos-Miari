import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  imports: [CommonModule],
  templateUrl: './star-icon.component.html',
  styleUrl: './star-icon.component.scss'
})
export class StarIconComponent {
  @Input() currentClass = '';
  classBase = 'flex items-center text-current';
}
