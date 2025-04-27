import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroPComponent } from "./hero-p/hero-p.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy',
  imports: [RouterModule, HeaderComponent, HeroPComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
