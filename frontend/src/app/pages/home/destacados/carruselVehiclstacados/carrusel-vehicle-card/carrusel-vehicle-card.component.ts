import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoriteIconComponent } from '../../../../../components/icons/favorite-icon/favorite-icon.component';

@Component({
  selector: 'app-carrusel-vehicle-card',
  imports: [CommonModule, FavoriteIconComponent],
  templateUrl: './carrusel-vehicle-card.component.html',
  styleUrl: './carrusel-vehicle-card.component.scss'
})
export class CarruselVehicleCardComponent {
  @Input() vehicle: any;
  @Input() favorites: string[] = [];

  @Output() toggleFavorite = new EventEmitter<string>();
  @Output() top = new EventEmitter();

  onToggleFavorite(vehicleId: string) {
    this.toggleFavorite.emit(vehicleId);
  }

  scrollTop() {
    this.top.emit();
  }
}
