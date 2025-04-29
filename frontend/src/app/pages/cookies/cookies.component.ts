import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroCookComponent } from "./hero-cook/hero-cook.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookies',
  imports: [RouterModule, HeaderComponent, HeroCookComponent],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.scss'
})
export class CookiesComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
