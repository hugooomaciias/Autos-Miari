import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VehiclesAComponent } from './vehicles-a/vehicles-a.component';
import { DetallesAComponent } from './detalles-a/detalles-a.component';
import { HeroAlquilarComponent } from './hero-alquilar/hero-alquilar.component';
import { FiltersAComponent } from './filters-a/filters-a.component';
import { PaginationAComponent } from './pagination-a/pagination-a.component';
import { ResultHeaderAComponent } from './result-header-a/result-header-a.component';

@Component({
  selector: 'app-alquilar',
  imports: [CommonModule, HeaderComponent, VehiclesAComponent, DetallesAComponent, HeroAlquilarComponent, FiltersAComponent, ResultHeaderAComponent, PaginationAComponent],
  templateUrl: './alquilar.component.html',
  styleUrl: './alquilar.component.scss'
})
export class AlquilarComponent {
  viewType: 'grid' | 'list' = 'grid';
  favorites: string[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 21;
  totalPags: number = 0;
  
  // Todos los vehículos disponibles
  vehicles: {
    id: string;
    name: string;
    image: string;
    vehicleImages: string[];
    brand: string;
    model: string;
    type: string;
    transmission: string;
    fuel: string;
    color: string;
    year: string;
    price: number;
    diasDisponibles: { fechaIniDispo: string, fechaFinDispo: string }[];
    mileage: number;
    isNew: boolean;
  }[] = [
    { 
      id: '1',
      name: 'Fiat 500',
      image: '/imagenes/fiat-500.jpg',
      vehicleImages: [
        '/imagenes/fiat-500.jpg',
        '/imagenes/fiat-500.jpg',
        '/imagenes/fiat-500.jpg',
      ],
      brand: 'Fiat',
      model: '500',
      type: 'Sedan',
      transmission: 'Manual',
      fuel: 'Gasolina',
      year: '2023',
      color: 'Blanco',
      price: 250,
      diasDisponibles: [
        {
          fechaIniDispo: '2025-05-01',
          fechaFinDispo: '2025-05-25',
        }
      ],
      mileage: 90335,
      isNew: true
    },
    { id: '2',
      name: 'Renault Kangoo Combi',
      image: '/imagenes/renault-kangoo-combi.jpeg',
      vehicleImages: [
        '/imagenes/renault-kangoo-combi.jpeg',
        '/imagenes/renault-kangoo-combi.jpeg',
        '/imagenes/renault-kangoo-combi.jpeg',
      ],
      brand: 'Renault',
      model: 'Kangoo',
      type: 'Sedan',
      transmission: 'Manual',
      fuel: 'Diesel',
      year: '2022',
      color: 'Blanco',
      price: 300,
      diasDisponibles: [
        {
          fechaIniDispo: '2025-05-05',
          fechaFinDispo: '2025-06-15',
        }
      ],
      mileage: 158500,
      isNew: false
    },
    { 
      id: '3',
      name: 'Volkswagen Polo',
      image: '/imagenes/volkswagen-polo.jpg',
      vehicleImages: [
        '/imagenes/volkswagen-polo.jpg',
        '/imagenes/volkswagen-polo.jpg',
        '/imagenes/volkswagen-polo.jpg',
      ],
      brand: 'Volkswagen',
      model: 'Polo',
      type: 'Sports',
      transmission: 'Manual',
      fuel: 'Gasolina',
      year: '2018',
      color: 'Blanco',
      price: 200,
      diasDisponibles: [
        {
          fechaIniDispo: '2025-06-01',
          fechaFinDispo: '2025-06-30',
        }
      ],
      mileage: 12345,
      isNew: true
    }
  ];

  // Filtros activos
  filters: any = {
    brand: ['Todas las marcas'],
    model: ['Todos los modelos'],
    type: ['Todos los tipos'],
    transmission: ['Todas las transmisiones'],
    fuel: ['Todos los combustibles'],
    color: ['Todos los colores'],
    price: [0, 1000],
    fechaInicio: null,
    fechaFin: null
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const filtros = {...this.filters};

      if(params['fechaIni']) filtros.fechaInicio = new Date(params['fechaIni']);
      if(params['fechaFin']) filtros.fechaFin = new Date(params['fechaFin']);
      if(params['precioPorDia']) filtros.price[1] = parseInt(params['precioPorDia']);
      if(params['tipo']) filtros.type = [params['tipo']];

      this.updateFilters(filtros);
    });
  }

  // Cambiar la vista
  setViewType(type: 'grid' | 'list') {
    this.viewType = type;
  }

  // Actualizar filtros desde el componente hijo
  updateFilters(newFilters: any) {
    this.filters = newFilters;
  }

  resetFilters() {
    this.filters = {
      brand: ['Todas las marcas'],
      model: ['Todos los modelos'],
      type: ['Todos los tipos'],
      transmission: ['Todas las transmisiones'],
      fuel: ['Todos los combustibles'],
      color: ['Todos los colores'],
      price: [0, 1000],
      fechaInicio: null,
      fechaFin: null
    };
  }

  // Aplicar filtros a los vehículos
  get filteredVehicles() {
    return this.vehicles.filter(vehicle => {
      const isWithinFilters = (
        (this.filters.brand.includes('Todas las marcas') || this.filters.brand.includes(vehicle.brand)) &&
        (this.filters.model.includes('Todos los modelos') || this.filters.model.includes(vehicle.model)) &&
        (this.filters.type.includes('Todos los tipos') || this.filters.type.includes(vehicle.type)) &&
        (this.filters.transmission.includes('Todas las transmisiones') || this.filters.transmission.includes(vehicle.transmission)) &&
        (this.filters.fuel.includes('Todos los combustibles') || this.filters.fuel.includes(vehicle.fuel)) &&
        (this.filters.color.includes('Todos los colores') || this.filters.color.includes(vehicle.color)) &&
        vehicle.price >= this.filters.price[0] &&
        vehicle.price <= this.filters.price[1]
      );

      // Comprobar las fechas de disponibilidad
      const isAvailableInDateRange = vehicle.diasDisponibles.some(disponibilidad => {
        const fechaInicioDispo = new Date(disponibilidad.fechaIniDispo);
        const fechaFinDispo = new Date(disponibilidad.fechaFinDispo);

        // Si hay fechas en el filtro
        if (this.filters.fechaInicio && this.filters.fechaFin) {
          const filtroFechaInicio = new Date(this.filters.fechaInicio);
          const filtroFechaFin = new Date(this.filters.fechaFin);

          // Comprobar si las fechas se solapan
          return (
            (fechaInicioDispo <= filtroFechaFin && fechaFinDispo >= filtroFechaInicio)
          );
        }
      
        // Si no hay fechas en el filtro, devolver true
        return true;
      });

      return isWithinFilters && isAvailableInDateRange;
    });
  }

  onToggleFavorite(vehicleId: string) {
    if (this.favorites.includes(vehicleId)) {
      this.favorites = this.favorites.filter(id => id !== vehicleId);
    } else {
      this.favorites = [...this.favorites, vehicleId];
    }
  }

  get pagedVehicles() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredVehicles.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.vehicles.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  selectedVehicle: any = null;
  showModal: boolean = false;
  
  openModal(vehicle: any) {
    this.showModal = true;
    this.selectedVehicle = vehicle;
  }

  closeModal() {
    this.showModal = false;
  }
}