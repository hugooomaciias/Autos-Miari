import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { SearchIconComponent } from "../../../components/icons/search-icon/search-icon.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule, Boton2Component, SearchIconComponent],
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
