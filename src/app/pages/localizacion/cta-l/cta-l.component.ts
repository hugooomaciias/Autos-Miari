import { Component } from '@angular/core';
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { Boton3Component } from "../../../components/boton3/boton3.component";
import { PhoneIconComponent } from "../../../components/icons/phone-icon/phone-icon.component";
import { VisitIconComponent } from "../../../components/icons/visit-icon/visit-icon.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [Boton2Component, Boton3Component, PhoneIconComponent, VisitIconComponent],
  templateUrl: './cta-l.component.html',
  styleUrl: './cta-l.component.scss'
})
export class CtaLComponent {
  constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
