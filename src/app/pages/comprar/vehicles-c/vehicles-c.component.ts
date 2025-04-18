import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VehicleCardCComponent } from "./vehicle-card-c/vehicle-card-c.component";
import { CommonModule } from '@angular/common';
import { VehicleListCComponent } from "./vehicle-list-c/vehicle-list-c.component";
import { TrashIconComponent } from "../../../components/icons/trash-icon/trash-icon.component";
import { Boton4Component } from "../../../components/boton4/boton4.component";
import { AlertIconComponent } from "../../../components/icons/alert-icon/alert-icon.component";

@Component({
  selector: 'app-vehicles-c',
  imports: [CommonModule, TrashIconComponent, Boton4Component, AlertIconComponent, VehicleCardCComponent, VehicleListCComponent],
  templateUrl: './vehicles-c.component.html',
  styleUrl: './vehicles-c.component.scss'
})
export class VehiclesCComponent {
  @Input() vehicles: any[] = [];
  @Input() viewType: 'grid' | 'list' = 'grid';
  @Input() favorites: string[] = [];
  @Input() filters: any = {};
  @Input() currentPage: number = 1;
  @Input() visible: boolean = false;
  @Input() vehicle: any;
  
  @Output() toggleFavorite = new EventEmitter<string>();
  @Output() filtersChange = new EventEmitter<any>();
  @Output() goToPage = new EventEmitter<number>();
  @Output() open = new EventEmitter<any>();

  onToggleFavorite(vehicleId: string) {
    this.toggleFavorite.emit(vehicleId);
  }

  // Resetear los filtros
  resetFilters(): void {
    this.filters = {
      brand: ['Todas las marcas'],
      model: ['Todos los modelos'],
      type: ['Todos los tipos'],
      transmission: ['Todas las transmisiones'],
      fuel: ['Todos los combustibles'],
      year: ['Todos los años'],
      color: ['Todos los colores'],
      price: [0, 100000],
      mileage: [0, 400000]
    };

    this.filtersChange.emit(this.filters);
  }

  irAPagina(currentPage: number) {
    this.goToPage.emit(currentPage);

    window.scrollTo({ top: 0 });
  }

  openModal(vehicle: any) {
    this.open.emit(vehicle);
  }
}
