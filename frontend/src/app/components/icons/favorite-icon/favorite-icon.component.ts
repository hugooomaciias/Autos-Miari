import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-icon',
  imports: [CommonModule],
  templateUrl: './favorite-icon.component.html',
  styleUrl: './favorite-icon.component.scss'
})
export class FavoriteIconComponent {
  @Input() active = false;
}
