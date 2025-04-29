import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarIconComponent } from '../../../../components/icons/car-icon/car-icon.component';
import { BrandIconComponent } from '../../../../components/icons/brand-icon/brand-icon.component';
import { TagIconComponent } from '../../../../components/icons/tag-icon/tag-icon.component';
import { EngineIconComponent } from '../../../../components/icons/engine-icon/engine-icon.component';
import { FuelIconComponent } from '../../../../components/icons/fuel-icon/fuel-icon.component';
import { CalendarIconComponent } from '../../../../components/icons/calendar-icon/calendar-icon.component';
import { ColorIconComponent } from '../../../../components/icons/color-icon/color-icon.component';
import { EuroBagIconComponent } from "../../../../components/icons/euro-bag-icon/euro-bag-icon.component";
import { ChevromDownIconComponent } from "../../../../components/icons/chevrom-down-icon/chevrom-down-icon.component";
import { ChevromRightIconComponent } from "../../../../components/icons/chevrom-right-icon/chevrom-right-icon.component";
import { KmIconComponent } from "../../../../components/icons/km-icon/km-icon.component";

@Component({
  selector: 'app-filter-controls-c',
  imports: [CommonModule, FormsModule, EuroBagIconComponent, ChevromDownIconComponent, ChevromRightIconComponent, KmIconComponent],
  templateUrl: './filter-controls-c.component.html',
  styleUrl: './filter-controls-c.component.scss'
})
export class FilterControlsCComponent {
  @Input() filters: any = {};
  @Input() currentPage: number = 1;

  @Output() filtersChange = new EventEmitter<any>();
  @Output() goToPage = new EventEmitter<number>();

  expanded: Record<string, boolean> = {};

  filterGroups = [
    {
      key: 'brand',
      label: 'Marca',
      icon: BrandIconComponent,
      options: ['Todas las marcas', 'Fiat', 'Renault', 'Volkswagen']
    },
    {
      key: 'model',
      label: 'Modelo',
      icon: TagIconComponent,
      options: ['Todos los modelos']
    },
    {
      key: 'type',
      label: 'Tipo de vehículo',
      icon: CarIconComponent,
      options: ['Todos los tipos', 'Sedan', 'SUV', 'Deportivo', 'Lujo']
    },
    {
      key: 'transmission',
      label: 'Transmisión',
      icon: EngineIconComponent,
      options: ['Todas las transmisiones', 'Automático', 'Manual']
    },
    {
      key: 'fuel',
      label: 'Tipo de combustible',
      icon: FuelIconComponent,
      options: ['Todos los combustibles', 'Gasolina', 'Diesel', 'Eléctrico', 'Híbrido']
    },
    {
      key: 'year',
      label: 'Año',
      icon: CalendarIconComponent,
      options: ['Todos los años', '2023', '2022', '2021', '2020', '2019', 'Más Antiguo']
    },
    {
      key: 'color',
      label: 'Color',
      icon: ColorIconComponent,
      options: ['Todos los colores', 'Negro', 'Blanco', 'Plateado', 'Gris', 'Rojo', 'Azul', 'Verde']
    }
  ]

  toggle(key: string): void {
    this.expanded[key] = !this.expanded[key];
  }

  // Emitir cambios en los filtros
  onFilterChange(): void {
    this.filtersChange.emit(this.filters);
  }

  onCheckboxChange(key: string, option: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const currentValues = this.filters[key] || [];

    if (input.checked) {
      this.filters[key] = [...currentValues, option];
    } else {
      this.filters[key] = currentValues.filter((val: string) => val !== option);
    }

    this.filtersChange.emit(this.filters);
  }

  irAPagina(currentPage: number) {
    this.goToPage.emit(currentPage);

    window.scrollTo({ top: 0 });
  }
}
