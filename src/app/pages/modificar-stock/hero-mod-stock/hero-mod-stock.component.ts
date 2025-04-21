import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-mod-stock',
  imports: [CommonModule],
  templateUrl: './hero-mod-stock.component.html',
  styleUrl: './hero-mod-stock.component.scss'
})
export class HeroModStockComponent {
  @Input() activeTab: 'insertar' | 'eliminar' = 'insertar';
}
