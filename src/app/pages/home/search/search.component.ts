import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { SearchIconComponent } from "../../../components/icons/search-icon/search-icon.component";
import { Router } from '@angular/router';
import { BrandIconComponent } from "../../../components/icons/brand-icon/brand-icon.component";
import { TagIconComponent } from "../../../components/icons/tag-icon/tag-icon.component";
import { EuroBagIconComponent } from "../../../components/icons/euro-bag-icon/euro-bag-icon.component";

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, Boton2Component, SearchIconComponent, BrandIconComponent, TagIconComponent, EuroBagIconComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  activeTab: 'comprar' | 'alquilar' = 'comprar';

  fechaInicio: string = '';
  fechaFin: string = '';

  constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
