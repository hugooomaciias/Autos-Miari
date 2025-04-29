import { Component } from '@angular/core';
import { PhoneIconComponent } from "../../../components/icons/phone-icon/phone-icon.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-h',
  imports: [RouterModule, PhoneIconComponent],
  templateUrl: './hero-h.component.html',
  styleUrl: './hero-h.component.scss'
})
export class HeroHComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}