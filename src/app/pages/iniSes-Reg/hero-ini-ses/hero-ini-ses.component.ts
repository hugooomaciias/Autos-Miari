import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-ini-ses',
  imports: [CommonModule],
  templateUrl: './hero-ini-ses.component.html',
  styleUrl: './hero-ini-ses.component.scss'
})
export class HeroIniSesComponent {
  @Input() activeTab: 'iniciar-sesion' | 'registro' | 'olvidarPassword' = 'iniciar-sesion';
}
