import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VisitIconComponent } from "../../../components/icons/visit-icon/visit-icon.component";
import { CarIconComponent } from "../../../components/icons/car-icon/car-icon.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-s',
  imports: [RouterModule, CommonModule, VisitIconComponent, CarIconComponent],
  templateUrl: './cta-s.component.html',
  styleUrl: './cta-s.component.scss'
})
export class CtaSComponent {

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
