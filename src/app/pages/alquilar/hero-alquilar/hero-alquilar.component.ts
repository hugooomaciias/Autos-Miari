import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-alquilar',
  imports: [],
  templateUrl: './hero-alquilar.component.html',
  styleUrl: './hero-alquilar.component.scss'
})
export class HeroAlquilarComponent {
  @Input() filters: any = {};

  @Output() filtersChange = new EventEmitter<any>();

  onFilterChange(): void {
    this.filtersChange.emit(this.filters);
  }
}
