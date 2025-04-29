import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroAComponent } from "./hero-a/hero-a.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aviso-legal',
  imports: [RouterModule, HeaderComponent, HeroAComponent],
  templateUrl: './aviso-legal.component.html',
  styleUrl: './aviso-legal.component.scss'
})
export class AvisoLegalComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
