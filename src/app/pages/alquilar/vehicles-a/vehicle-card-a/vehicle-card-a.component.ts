import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Boton2Component } from "../../../../components/boton2/boton2.component";
import { FavoriteIconComponent } from "../../../../components/icons/favorite-icon/favorite-icon.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-card-a',
  imports: [CommonModule, FavoriteIconComponent, Boton2Component],
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
