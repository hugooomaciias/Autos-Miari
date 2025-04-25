import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { SearchIconComponent } from "../../../components/icons/search-icon/search-icon.component";
import { Router } from '@angular/router';
import { BrandIconComponent } from "../../../components/icons/brand-icon/brand-icon.component";
import { TagIconComponent } from "../../../components/icons/tag-icon/tag-icon.component";
import { EuroBagIconComponent } from "../../../components/icons/euro-bag-icon/euro-bag-icon.component";
import { CalendarIconComponent } from "../../../components/icons/calendar-icon/calendar-icon.component";
import { CarIconComponent } from "../../../components/icons/car-icon/car-icon.component";

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, Boton2Component, SearchIconComponent, BrandIconComponent, TagIconComponent, EuroBagIconComponent, CalendarIconComponent, CarIconComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
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

  constructor(private router: Router) {}
  
  buscarComprar() {
    const filtrosC = {
      marca: this.marcaSeleccionada,
      modelo: this.modeloSeleccionado,
      precio: this.precioIndicado,
      ano: this.anoSeleccionado
    };

    this.router.navigate(['comprar'], { queryParams: filtrosC });
  }

  buscarAlquilar() {
    const filtrosA = {
      fechaIni: this.fechaIniIndicada,
      fechaFin: this.fechaFinIndicada,
      tipo: this.tipoSeleccionado,
      precioPorDia: this.precioPorDiaIndicado
    };

    this.router.navigate(['alquilar'], { queryParams: filtrosA });
  }
}
