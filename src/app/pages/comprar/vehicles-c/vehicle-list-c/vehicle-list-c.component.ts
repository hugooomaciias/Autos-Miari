import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoriteIconComponent } from "../../../../components/icons/favorite-icon/favorite-icon.component";

@Component({
  selector: 'app-vehicle-list-c',
  imports: [CommonModule, FavoriteIconComponent],
  templateUrl: './vehicle-list-c.component.html',
  styleUrl: './vehicle-list-c.component.scss'
})
export class VehicleListCComponent {
  @Input() vehicle: any;
  @Input() favorite: boolean = false;
  @Input() visible: boolean = false;

  @Output() toggleFavorite = new EventEmitter<string>();
  @Output() open = new EventEmitter();
  @Output() close = new EventEmitter();

  onToggleFavorite(vehicleId: string) {
    this.toggleFavorite.emit(vehicleId);
  }

  openModal() {
    this.open.emit(this.vehicle);
  }

  closeModal() {
    this.close.emit();
  }
}
