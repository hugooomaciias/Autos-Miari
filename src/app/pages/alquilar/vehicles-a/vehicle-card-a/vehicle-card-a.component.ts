import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FavoriteIconComponent } from "../../../../components/icons/favorite-icon/favorite-icon.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-card-a',
  imports: [CommonModule, FavoriteIconComponent],
  templateUrl: './vehicle-card-a.component.html',
  styleUrl: './vehicle-card-a.component.scss'
})
export class VehicleCardAComponent {
  @Input() vehicle: any;
  @Input() favorite: boolean = false;
  @Input() visible: boolean = false;

  @Output() toggleFavorite = new EventEmitter<string>();
  @Output() open = new EventEmitter<any>();

  onToggleFavorite(vehicleId: string) {
    this.toggleFavorite.emit(vehicleId);
  }

  constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  openModal() {
    this.open.emit(this.vehicle);
  }
}
