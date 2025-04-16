import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchIconComponent } from "../../../components/icons/search-icon/search-icon.component";

@Component({
  selector: 'app-hero-cat',
  imports: [],
  templateUrl: './hero-cat.component.html',
  styleUrl: './hero-cat.component.scss'
})
export class HeroCatComponent {
  @Input() filters: any = {};

  @Output() filtersChange = new EventEmitter<any>();

  onFilterChange(): void {
    this.filtersChange.emit(this.filters);
  }
}
