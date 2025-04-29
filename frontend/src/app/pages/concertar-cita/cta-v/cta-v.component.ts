import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-v',
  imports: [CommonModule],
  templateUrl: './cta-v.component.html',
  styleUrl: './cta-v.component.scss'
})
export class CtaVComponent {
  steps: any[] = [
    {
      id: '1',
      title: 'Planificar',
      description: 'Rellena el formulario de cita con la fecha y hora a la que prefiera asistir a nuestro concesionario. Elije el servicio que le interesa.'
    },
    {
      id: '2',
      title: 'Confirmar',
      description: 'Recibe un correo electrónico de confirmación con los detalles de su cita. Puede modificar su cita si es necesario.'
    },
    {
      id: '3',
      title: 'Visitar',
      description: 'Llegue a nuestro concesionario a la hora acordada. Nuestro equipo estará listo para ayudarle con sus necesidades.'
    }
  ]
}
