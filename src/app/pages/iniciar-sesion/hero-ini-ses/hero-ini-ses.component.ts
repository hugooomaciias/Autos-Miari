import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-ini-ses',
  imports: [CommonModule],
  templateUrl: './hero-ini-ses.component.html',
  styleUrl: './hero-ini-ses.component.scss'
})
export class HeroIniSesComponent {
  activeTab: 'iniciar-sesion' | 'registro' = 'iniciar-sesion';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'];

      if (tab === 'registro' ) {
        this.activeTab = 'registro';
      } else {
        this.activeTab = 'iniciar-sesion';
      }
    })
  }
}
