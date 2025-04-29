import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LocationIconComponent } from '../../../components/icons/location-icon/location-icon.component';
import { PhoneIconComponent } from '../../../components/icons/phone-icon/phone-icon.component';
import { MailIconComponent } from "../../../components/icons/mail-icon/mail-icon.component";
import { TimeIconComponent } from "../../../components/icons/time-icon/time-icon.component";

@Component({
  selector: 'app-cards',
  imports: [CommonModule, LocationIconComponent, PhoneIconComponent, MailIconComponent, TimeIconComponent],
  templateUrl: './cards-l.component.html',
  styleUrl: './cards-l.component.scss'
})
export class CardsLComponent {
}
