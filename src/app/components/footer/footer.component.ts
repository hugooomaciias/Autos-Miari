import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InstagramIconComponent } from '../../components/icons/instagram-icon/instagram-icon.component';
import { FacebookIconComponent } from '../../components/icons/facebook-icon/facebook-icon.component';
import { Router } from '@angular/router';
import { LocationIconComponent } from "../../components/icons/location-icon/location-icon.component";
import { PhoneIconComponent } from "../../components/icons/phone-icon/phone-icon.component";
import { MailIconComponent } from "../../components/icons/mail-icon/mail-icon.component";

@Component({
  selector: 'app-footer',
  imports: [CommonModule, LocationIconComponent, PhoneIconComponent, MailIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private router: Router) {}
  
  socialNetworks: any = [
    {
      link: 'https://www.instagram.com/autosmiari?igsh=eXBvMDkyN2RzYmFt',
      icon: InstagramIconComponent
    },
    {
      link: '',
      icon: FacebookIconComponent
    }
  ];
  
  quickLinks = [
    {
      title: "Comprar",
      label: "comprar",
      path: "comprar",
    },
    {
      title: "Alquilar",
      label: "alquilar",
      path: "alquilar",
    },
    {
      title: "Tasa tu vehículo",
      label: "tasa-tu-coche",
      path: "tasa-tu-coche",
    },
    {
      title: "Localización",
      label: "localizacion",
      path: "localizacion",
    },
    {
      title: "Contacto",
      label: "contacto",
      path: "contacto",
    },
  ];

  aboutUs = [
    {
      title: "Localización",
      label: "localizacion",
      path: "localizacion",
    },
    {
      title: "Sobre nosotros",
      label: "sobre-nosotros",
      path: "sobre-nosotros",
    }
  ];

  policyLinks = [
    {
      title: "Política de privacidad",
      label: "privacidad",
      path: "privacidad",
    },
    {
      title: "Aviso legal",
      label: "aviso-legal",
      path: "aviso-legal",
    },
    {
      title: "Política de cookies",
      label: "cookies",
      path: "cookies",
    }
  ];


  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}

