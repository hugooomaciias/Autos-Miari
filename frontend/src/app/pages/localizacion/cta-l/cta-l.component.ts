import { Component } from '@angular/core';
import { PhoneIconComponent } from "../../../components/icons/phone-icon/phone-icon.component";
import { VisitIconComponent } from "../../../components/icons/visit-icon/visit-icon.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [RouterModule, PhoneIconComponent, VisitIconComponent],
  templateUrl: './cta-l.component.html',
  styleUrl: './cta-l.component.scss'
})
export class CtaLComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
