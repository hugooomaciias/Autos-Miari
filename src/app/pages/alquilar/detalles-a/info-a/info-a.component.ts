import { Component, Input } from '@angular/core';
import { CarIconComponent } from "../../../../components/icons/car-icon/car-icon.component";
import { CalendarIconComponent } from "../../../../components/icons/calendar-icon/calendar-icon.component";
import { EuroBagIconComponent } from "../../../../components/icons/euro-bag-icon/euro-bag-icon.component";
import { ColorIconComponent } from "../../../../components/icons/color-icon/color-icon.component";
import { KmIconComponent } from "../../../../components/icons/km-icon/km-icon.component";
import { EngineIconComponent } from "../../../../components/icons/engine-icon/engine-icon.component";
import { FuelIconComponent } from "../../../../components/icons/fuel-icon/fuel-icon.component";

@Component({
  selector: 'app-info-a',
  imports: [CarIconComponent, CalendarIconComponent, EuroBagIconComponent, ColorIconComponent, KmIconComponent, EngineIconComponent, FuelIconComponent],
  templateUrl: './info-a.component.html',
  styleUrl: './info-a.component.scss'
})
export class InfoAComponent {
  @Input() vehicle: any;
}
