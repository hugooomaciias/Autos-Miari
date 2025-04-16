import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { Boton3Component } from "../../../components/boton3/boton3.component";
import { VisitIconComponent } from "../../../components/icons/visit-icon/visit-icon.component";
import { CarIconComponent } from "../../../components/icons/car-icon/car-icon.component";

@Component({
  selector: 'app-cta-s',
  imports: [CommonModule, Boton2Component, Boton3Component, VisitIconComponent, CarIconComponent],
  templateUrl: './cta-s.component.html',
  styleUrl: './cta-s.component.scss'
})
export class CtaSComponent {
  constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
