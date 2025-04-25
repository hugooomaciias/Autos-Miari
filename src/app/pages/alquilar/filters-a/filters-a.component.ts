import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterIconComponent } from "../../../components/icons/filter-icon/filter-icon.component";
import { ChevromDownIconComponent } from "../../../components/icons/chevrom-down-icon/chevrom-down-icon.component";
import { CommonModule } from '@angular/common';
import { Boton4Component } from "../../../components/boton4/boton4.component";
import { FilterControlAComponent } from './filter-control-a/filter-control-a.component';

@Component({
  selector: 'app-filters-a',
  imports: [CommonModule, FilterIconComponent, ChevromDownIconComponent, Boton4Component, FilterControlAComponent],
  templateUrl: './filters-a.component.html',
  styleUrl: './filters-a.component.scss'
})
export class FiltersAComponent {
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
      color: ['Todos los colores'],
      pricePerDay: [0, 1000],
      fechaInicio: null,
      fechaFin: null
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
