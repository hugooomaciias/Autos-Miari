import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroIniSesComponent } from "./hero-ini-ses/hero-ini-ses.component";
import { ReactiveFormsModule } from '@angular/forms';
import { OlvidarPasswordComponent } from "./olvidar-password/olvidar-password.component";
import { IniciarSesionComponent } from "./iniciar-sesion/iniciar-sesion.component";
import { RegistroComponent } from "./registro/registro.component";

@Component({
  selector: 'app-iniSes-Reg',
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent, HeroIniSesComponent, OlvidarPasswordComponent, IniciarSesionComponent, RegistroComponent],
  templateUrl: './iniSes-Reg.component.html',
  styleUrl: './iniSes-Reg.component.scss'
})
export class iniSesRegComponent {
  activeTab: 'iniciar-sesion' | 'registro' | 'olvidarPassword' = 'iniciar-sesion';
  olvidarPassword = true;
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'];

      if (tab === 'registro') {
        this.activeTab = 'registro';
        this.olvidarPassword = false;
      } else if(tab === 'iniciar-sesion') {
        this.activeTab = 'iniciar-sesion';
        this.olvidarPassword = false;
      } else {
        this.activeTab = 'olvidarPassword'
        this.olvidarPassword = true;
      }
    })
  }
  
  irAIniciarSesion() {
    this.router.navigate(['/iniSes-Reg'], { queryParams: { tab: 'iniciar-sesion' } });
  }
  
  irARegistro() {
    this.router.navigate(['/iniSes-Reg'], { queryParams: { tab: 'registro' } });
  }

  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  olvidarPass() {
    this.olvidarPassword = true;
  }

  noOlvidarPass() {
    console.log(this.activeTab);
    this.olvidarPassword = false;
  }

  cambiarTab(tab: string){
    if (tab === 'registro') {
      this.activeTab = 'registro';
    } else if(tab === 'iniciar-sesion') {
      this.activeTab = 'iniciar-sesion';
    } else {
      this.activeTab = 'olvidarPassword'
    }
  }

  cambiarPestana(tab: 'iniciar-sesion' | 'registro') {
    this.activeTab = tab;
    this.olvidarPassword = false;
  }
}
