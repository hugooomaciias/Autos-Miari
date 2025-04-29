import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MailIconComponent } from '../../../components/icons/mail-icon/mail-icon.component';
import { BriefCaseIconComponent } from '../../../components/icons/brief-case-icon/brief-case-icon.component'; 
import { BookIconComponent } from '../../../components/icons/book-icon/book-icon.component';

@Component({
  selector: 'app-team',
  imports: [CommonModule, MailIconComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  logros: any[] = [
    {
      icon: BriefCaseIconComponent,
      title: 'Experiencia previa',
      description: 'Cualquier experiencia previa que hayas tenido en el sector'
    },
    {
      icon: BookIconComponent,
      title: 'Educación',
      description: 'Cualquier formación que hayas realizado en el sector de los automóviles'
    }
  ]
}
