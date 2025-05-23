import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterControlsCComponent } from "./filter-controls-c/filter-controls-c.component";
import { FilterIconComponent } from "../../../components/icons/filter-icon/filter-icon.component";
import { ChevromDownIconComponent } from "../../../components/icons/chevrom-down-icon/chevrom-down-icon.component";
import { CommonModule } from '@angular/common';
import { Boton4Component } from "../../../components/boton4/boton4.component";

@Component({
  selector: 'app-filters-c',
  imports: [CommonModule, FilterIconComponent, ChevromDownIconComponent, Boton4Component, FilterControlsCComponent],
  templateUrl: './filters-c.component.html',
  styleUrl: './filters-c.component.scss'
})
export class FiltersCComponent {
  @Input() filters: any = {}
  @Input() currentPage: number = 1;
  
  @Output() filtersChange = new EventEmitter<any>();
  @Output() goToPage = new EventEmitter<number>();

  setFilters(updatedFilters: any): void {
    this.filtersChange.emit(updatedFilters);
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

  isMobileMenuOpen: boolean = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  irAPagina(currentPage: number) {
    this.goToPage.emit(currentPage);

    window.scrollTo({ top: 0 });
  }
}
