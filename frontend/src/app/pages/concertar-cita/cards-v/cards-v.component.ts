import { Component } from '@angular/core';
import { CheckIconComponent } from "../../../components/icons/check-icon/check-icon.component";
import { TimeOffIconComponent } from "../../../components/icons/time-off-icon/time-off-icon.component";
import { HandIconComponent } from "../../../components/icons/hand-icon/hand-icon.component";
import { StarIconComponent } from "../../../components/icons/support-icon/star-icon/star-icon.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cards-v',
  imports: [RouterModule, CheckIconComponent, TimeOffIconComponent, HandIconComponent, StarIconComponent],
  templateUrl: './cards-v.component.html',
  styleUrl: './cards-v.component.scss'
})
export class CardsVComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
