import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailIconComponent } from "../../../components/icons/mail-icon/mail-icon.component";
import { EyeOpenIconComponent } from "../../../components/icons/eye-open-icon/eye-open-icon.component";
import { EyeCloseIconComponent } from "../../../components/icons/eye-close-icon/eye-close-icon.component";
import { UserIconComponent } from "../../../components/icons/user-icon/user-icon.component";
import { GoogleIconComponent } from "../../../components/icons/google-icon/google-icon.component";
import { AppleIconComponent } from "../../../components/icons/apple-icon/apple-icon.component";
import { FacebookAuthIconComponent } from "../../../components/icons/facebook-auth-icon/facebook-auth-icon.component";

@Component({
  selector: 'app-iniciar-sesion',
  imports: [CommonModule, ReactiveFormsModule, MailIconComponent, EyeOpenIconComponent, EyeCloseIconComponent, UserIconComponent, GoogleIconComponent, AppleIconComponent, FacebookAuthIconComponent],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.scss'
})
export class IniciarSesionComponent {
  @Output() irAolvidarPass = new EventEmitter();
  @Output() toggleTab = new EventEmitter();
  
  mostrarPassword = false;
  
  formIni: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.formIni = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
    });
  }
  
  onSubmitIni() {
    if(this.formIni.valid) {
      console.log(this.formIni.value);
    }
  }
  
  olvidarPass() {
    this.irAolvidarPass.emit();
  }

  cambiarTab(tab: string){
    this.toggleTab.emit(tab);
  }
}
