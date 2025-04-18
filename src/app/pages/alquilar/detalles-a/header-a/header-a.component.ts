import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XIconComponent } from "../../../../components/mobileIcons/x-icon/x-icon.component";

@Component({
  selector: 'app-header-a',
  imports: [XIconComponent],
  templateUrl: './header-a.component.html',
  styleUrl: './header-a.component.scss'
})
export class HeaderAComponent {
  @Input() vehicle: any;

  @Output() close = new EventEmitter();

  closeModal(){
    this.close.emit();
  }
}
