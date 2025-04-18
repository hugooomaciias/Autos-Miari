import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchIconComponent } from "../../../components/icons/search-icon/search-icon.component";

@Component({
  selector: 'app-hero-comprar',
  imports: [],
  templateUrl: './hero-comprar.component.html',
  styleUrl: './hero-comprar.component.scss'
})
export class HeroComprarComponent {
  @Input() filters: any = {};

  @Output() filtersChange = new EventEmitter<any>();

  onFilterChange(): void {
    this.filtersChange.emit(this.filters);
  }
}
