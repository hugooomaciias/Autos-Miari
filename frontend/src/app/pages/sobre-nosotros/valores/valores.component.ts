import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LikeIconComponent } from '../../../components/icons/like-icon/like-icon.component';
import { IntegrityIconComponent } from '../../../components/icons/integrity-icon/integrity-icon.component';
import { LeapIconComponent } from '../../../components/icons/leap-icon/leap-icon.component';
import { Star2IconComponent } from '../../../components/icons/star2-icon/star2-icon.component';
import { Time2IconComponent } from '../../../components/icons/time2-icon/time2-icon.component';
import { Car3IconComponent } from '../../../components/icons/car3-icon/car3-icon.component';
import { TargetIconComponent } from '../../../components/icons/target-icon/target-icon.component';
import { EyeIconComponent } from '../../../components/icons/eye-icon/eye-icon.component';
import { LightBulbIconComponent } from '../../../components/icons/light-bulb-icon/light-bulb-icon.component';

@Component({
  selector: 'app-valores',
  imports: [CommonModule],
  templateUrl: './valores.component.html',
  styleUrl: './valores.component.scss'
})
export class ValoresComponent {
  items: any[] = [
    {
      icon: TargetIconComponent,
      title: 'Nuestra misión',
      description: 'Proporcionar a nuestros clientes una experiencia automovilística de primera a través de un servicio excepcional, vehículos de calidad y soluciones innovadoras que superen sus expectativas y construyan relaciones duraderas.'
    },
    {
      icon: EyeIconComponent,
      title: 'Nuestra visión',
      description: 'Ser el concesionario líder de automóviles de alta gama, reconocido por nuestro compromiso con la excelencia, la innovación y la satisfacción del cliente, marcando la pauta en el sector en los años venideros.'
    },
    {
      icon: LightBulbIconComponent,
      title: 'Nuestro enfoque',
      description: 'Creemos en un enfoque centrado en el cliente, en el que cada decisión se toma pensando en su satisfacción. Nuestras prácticas transparentes, nuestra atención al detalle y nuestro compromiso con la innovación impulsan todo lo que hacemos.'
    }
  ]

  values: any[] = [
    {
      icon: Star2IconComponent,
      title: "Excelencia",
      description: "Nos esforzamos por alcanzar la excelencia en todos los aspectos de nuestro negocio, desde los vehículos que seleccionamos hasta el servicio que prestamos."
    },
    {
      icon: LikeIconComponent,
      title: "Satisfacción del cliente",
      description: "Nuestros clientes son nuestra prioridad. Nos comprometemos a que cada interacción que realicemos con ellos supere sus expectativas."
    },
    {
      icon: IntegrityIconComponent,
      title: "Integridad",
      description: "La honradez y la transparencia son fundamentales en nuestra empresa. Creemos en el trato justo y en la creación de confianza."
    },
    {
      icon: Time2IconComponent,
      title: "Eficacia",
      description: "Valoramos tu tiempo y nos esforzamos para que cada proceso, desde la navegación hasta la compra, sea lo más ágil posible."
    },
    {
      icon: LeapIconComponent,
      title: "Sostenibilidad",
      description: "Estamos comprometidos con las prácticas responsables con el medio ambiente y ofrecemos opciones de vehículos ecológicos."
    },
    {
      icon: Car3IconComponent,
      title: "Pasión por los automóviles",
      description: "Nuestro amor por los automóviles nos impulsa a conservar la mejor selección y a mantenernos a la vanguardia de las tendencias automovilísticas."
    }
  ]
}
