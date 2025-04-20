import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boton2Component } from "../../components/boton2/boton2.component";
import { HeaderComponent } from "../../components/header/header.component";
import { HeroIniSesComponent } from "./hero-ini-ses/hero-ini-ses.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonIconComponent } from "../../components/icons/person-icon/person-icon.component";
import { MailIconComponent } from "../../components/icons/mail-icon/mail-icon.component";
import { UserIconComponent } from "../../components/icons/user-icon/user-icon.component";
import { UserPlusIconComponent } from "../../components/icons/user-plus-icon/user-plus-icon.component";
import { EyeOpenIconComponent } from "../../components/icons/eye-open-icon/eye-open-icon.component";
import { EyeCloseIconComponent } from "../../components/icons/eye-close-icon/eye-close-icon.component";
import { KeyIconComponent } from "../../components/icons/key-icon/key-icon.component";

@Component({
  selector: 'app-iniciar-sesion',
  imports: [CommonModule, ReactiveFormsModule, Boton2Component, HeaderComponent, HeroIniSesComponent, PersonIconComponent, MailIconComponent, UserIconComponent, UserPlusIconComponent, EyeOpenIconComponent, EyeCloseIconComponent, KeyIconComponent],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.scss'
})
export class IniciarSesionComponent {
  activeTab: 'iniciar-sesion' | 'registro' = 'iniciar-sesion';
  mostrarPassword = false;
  olvidarPassword = false;
  formPass: FormGroup;
  formIni: FormGroup;
  formReg: FormGroup;
  
  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.formPass = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.formIni = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
    });

    this.formReg = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'];

      if (tab === 'registro' ) {
        this.activeTab = 'registro';
      } else {
        this.activeTab = 'iniciar-sesion';
      }
    })
  }
  
  irAIniciarSesion() {
    this.router.navigate(['/iniciar-sesion'], { queryParams: { tab: 'iniciar-sesion' } });
  }
  
  irARegistro() {
    this.router.navigate(['/iniciar-sesion'], { queryParams: { tab: 'registro' } });
  }

  navigateTo(path: string) {
    this.router.navigate([path]).then(() => {
      window.scrollTo(0, 0);
    });
  }

  onSubmitIni() {
    if(this.formIni.valid) {
      console.log(this.formIni.value);
    }
  }

  onSubmitReg() {
    if(this.formReg.valid) {
      console.log(this.formReg.value);
    }
  }

  onSubmitPass() {
    if(this.formPass.valid) {
      console.log(this.formPass.value);
    }
  }
}
