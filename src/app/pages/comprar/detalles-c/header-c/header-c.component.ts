import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XIconComponent } from "../../../../components/mobileIcons/x-icon/x-icon.component";

@Component({
  selector: 'app-header-c',
  imports: [XIconComponent],
  templateUrl: './header-c.component.html',
  styleUrl: './header-c.component.scss'
})
export class HeaderCComponent {
  @Input() vehicle: any;

  @Output() close = new EventEmitter();

  closeModal(){
    this.close.emit();
  }
}
