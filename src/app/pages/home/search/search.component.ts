import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchIconComponent } from "../../../components/icons/search-icon/search-icon.component";
import { Router, RouterModule } from '@angular/router';
import { BrandIconComponent } from "../../../components/icons/brand-icon/brand-icon.component";
import { TagIconComponent } from "../../../components/icons/tag-icon/tag-icon.component";
import { EuroBagIconComponent } from "../../../components/icons/euro-bag-icon/euro-bag-icon.component";
import { CalendarIconComponent } from "../../../components/icons/calendar-icon/calendar-icon.component";
import { CarIconComponent } from "../../../components/icons/car-icon/car-icon.component";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  imports: [RouterModule, CommonModule, FormsModule, SearchIconComponent, BrandIconComponent, TagIconComponent, EuroBagIconComponent, CalendarIconComponent, CarIconComponent, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent {
  activeTab: 'comprar' | 'alquilar' = 'comprar';

  // Comprar
  marcaSeleccionada: string = '';
  modeloSeleccionado: string = '';
  precioIndicado: number = 100000;
  anoSeleccionado: string = '';

  // Alquilar
  fechaIniIndicada: string = '';
  fechaFinIndicada: string = '';
  tipoSeleccionado: string = '';
  precioPorDiaIndicado: number = 1000;

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
