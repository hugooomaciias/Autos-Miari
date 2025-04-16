import { Component } from '@angular/core';
import { HeroHComponent } from './hero-h/hero-h.component';
import { SearchComponent } from './search/search.component';
import { DestacadosComponent } from "./destacados/destacados.component";
import { ServiciosComponent } from "./servicios/servicios.component";
import { HeaderHComponent } from './header-h/header-h.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeroHComponent, SearchComponent, DestacadosComponent, ServiciosComponent, HeaderHComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  favorites: string[] = [];

  currentSlide: number = 0;
  totalSlides: number = 2;

  onToggleFavorite(vehicleId: string) {
    if (this.favorites.includes(vehicleId)) {
      this.favorites = this.favorites.filter(id => id !== vehicleId);
    } else {
      this.favorites = [...this.favorites, vehicleId];
    }
  }

  onSlideChange(index: number) {
    this.currentSlide = index;
  }

  constructor(private router: Router) {}
  navigateTo(path: string) {
    alert('Se clicka bien')

    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  alertar(msg: string) {
    alert(msg);
  }
}
