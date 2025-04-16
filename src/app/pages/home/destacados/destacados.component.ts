import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BotonComponent } from "../../../components/boton/boton.component";
import { CarIconComponent } from "../../../components/icons/car-icon/car-icon.component";
import { BotonSliderComponent } from "../../../components/boton-slider/boton-slider.component";
import { LeftArrowIconComponent } from "../../../components/icons/left-arrow-icon/left-arrow-icon.component";
import { RigthArrowIconComponent } from '../../../components/icons/right-arrow-icon/rigth-arrow-icon.component';
import { FavoriteIconComponent } from "../../../components/icons/favorite-icon/favorite-icon.component";
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { Boton3Component } from '../../../components/boton3/boton3.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destacados',
  imports: [CommonModule, BotonComponent, Boton2Component, Boton3Component, BotonSliderComponent, CarIconComponent, LeftArrowIconComponent, RigthArrowIconComponent, FavoriteIconComponent],
  templateUrl: './destacados.component.html',
  styleUrl: './destacados.component.scss'
})
export class DestacadosComponent {
  constructor(private router: Router) {}

  @Input() visibleVehicles: any[] = [
    {
      id: '1',
      name: 'Fiat 500',
      price: '9.499 €',
      year: '2022',
      type: 'Hibrido',
      mileage: '90.335 km ',
      transmission: 'Manual',
      image: '/imagenes/fiat-500.jpg',
      isNew: true
    },
    {
      id: '2',
      name: 'Renault Kangoo Combi',
      price: '12.490 €',
      year: '2022',
      type: 'Diesel',
      mileage: '158.500 km',
      transmission: 'Manual',
      image: '/imagenes/renault-kangoo-combi.jpeg'
    },
    {
      id: '3',
      name: 'Volkswagen Polo',
      price: '9.900 €',
      year: '2018',
      type: 'Gasolina',
      mileage: '12,345 mi',
      transmission: 'Manual',
      image: '/imagenes/volkswagen-polo.jpg',
      isNew: true
    },
    {
      id: '4',
      name: 'Volkswagen Polo',
      price: '9.900 €',
      year: '2018',
      type: 'Gasolina',
      mileage: '12,345 mi',
      transmission: 'Manual',
      image: '/imagenes/volkswagen-polo.jpg',
      isNew: true
    },
    {
      id: '5',
      name: 'Volkswagen Polo',
      price: '9.900 €',
      year: '2018',
      type: 'Gasolina',
      mileage: '12,345 mi',
      transmission: 'Manual',
      image: '/imagenes/volkswagen-polo.jpg',
      isNew: true
    },
    {
      id: '6',
      name: 'Volkswagen Polo',
      price: '9.900 €',
      year: '2018',
      type: 'Gasolina',
      mileage: '12,345 mi',
      transmission: 'Manual',
      image: '/imagenes/volkswagen-polo.jpg',
      isNew: true
    }
  ];

  currentPage: number = 0;

  @Input() favorites: string[] = [];

  @Input() totalSlides: number = 0;
  @Input() currentSlide: number = 0;

  @Output() slideChange = new EventEmitter<number>();
  @Output() toggleFavorite = new EventEmitter<string>();

  onToggleFavorite(vehicleId: string) {
    this.toggleFavorite.emit(vehicleId);
  }

  goToPage(page: number) {
    if (page >= 0 && page * 3 < this.visibleVehicles.length) {
      this.currentPage = page;
    }
    this.slideChange.emit(this.currentPage);
  }

  getIndicatorsArray(): number[] {
    return Array(this.totalSlides).fill(0).map((_, i) => i);
  }
  
  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
