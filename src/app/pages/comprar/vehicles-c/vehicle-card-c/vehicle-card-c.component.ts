import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoriteIconComponent } from "../../../../components/icons/favorite-icon/favorite-icon.component";

@Component({
  selector: 'app-vehicle-card-c',
  imports: [CommonModule, FavoriteIconComponent],
  templateUrl: './vehicle-card-c.component.html',
  styleUrl: './vehicle-card-c.component.scss'
})
export class VehicleCardCComponent {
  @Input() vehicle: any;
  @Input() favorite: boolean = false;
  @Input() visible: boolean = false;

  @Output() toggleFavorite = new EventEmitter<string>();
  @Output() open = new EventEmitter<any>();

  onToggleFavorite(vehicleId: string) {
    this.toggleFavorite.emit(vehicleId);
  }

  openModal() {
    this.open.emit(this.vehicle);
  }
}
