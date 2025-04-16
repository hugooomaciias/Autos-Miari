import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mail-icon',
  imports: [CommonModule],
  templateUrl: './mail-icon.component.html',
  styleUrl: './mail-icon.component.scss'
})
export class MailIconComponent {
  @Input() currentClass = '';
  classBase = 'flex items-center text-current';
}
