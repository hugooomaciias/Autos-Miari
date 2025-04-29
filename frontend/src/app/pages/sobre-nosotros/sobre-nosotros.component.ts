import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroSComponent } from "./hero-s/hero-s.component";
import { DescriptionComponent } from "./description/description.component";
import { ValoresComponent } from "./valores/valores.component";
import { TeamComponent } from "./team/team.component";
import { CtaSComponent } from "./cta-s/cta-s.component";

@Component({
  selector: 'app-sobre-nosotros',
  imports: [HeaderComponent, HeroSComponent, DescriptionComponent, ValoresComponent, TeamComponent, CtaSComponent],
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.scss'
})
export class SobreNosotrosComponent {

}
