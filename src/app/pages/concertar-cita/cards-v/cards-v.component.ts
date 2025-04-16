import { Component } from '@angular/core';
import { LocationIconComponent } from "../../../components/icons/location-icon/location-icon.component";
import { PhoneIconComponent } from "../../../components/icons/phone-icon/phone-icon.component";
import { MailIconComponent } from "../../../components/icons/mail-icon/mail-icon.component";
import { TimeIconComponent } from "../../../components/icons/time-icon/time-icon.component";
import { CheckIconComponent } from "../../../components/icons/check-icon/check-icon.component";
import { TimeOffIconComponent } from "../../../components/icons/time-off-icon/time-off-icon.component";
import { HandIconComponent } from "../../../components/icons/hand-icon/hand-icon.component";
import { StarIconComponent } from "../../../components/icons/support-icon/star-icon/star-icon.component";
import { Boton2Component } from "../../../components/boton2/boton2.component";

@Component({
  selector: 'app-cards-v',
  imports: [CheckIconComponent, TimeOffIconComponent, HandIconComponent, StarIconComponent, Boton2Component],
  templateUrl: './cards-v.component.html',
  styleUrl: './cards-v.component.scss'
})
export class CardsVComponent {

}
