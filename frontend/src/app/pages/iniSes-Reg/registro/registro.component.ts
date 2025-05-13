import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonIconComponent } from "../../../components/icons/person-icon/person-icon.component";
import { MailIconComponent } from "../../../components/icons/mail-icon/mail-icon.component";
import { EyeOpenIconComponent } from "../../../components/icons/eye-open-icon/eye-open-icon.component";
import { EyeCloseIconComponent } from "../../../components/icons/eye-close-icon/eye-close-icon.component";
import { UserPlusIconComponent } from "../../../components/icons/user-plus-icon/user-plus-icon.component";
import { GoogleIconComponent } from "../../../components/icons/google-icon/google-icon.component";
import { AppleIconComponent } from "../../../components/icons/apple-icon/apple-icon.component";
import { FacebookAuthIconComponent } from "../../../components/icons/facebook-auth-icon/facebook-auth-icon.component";

@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule, PersonIconComponent, MailIconComponent, EyeOpenIconComponent, EyeCloseIconComponent, UserPlusIconComponent, GoogleIconComponent, AppleIconComponent, FacebookAuthIconComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  mostrarPassword = false;

  formReg: FormGroup;

  constructor( private fb: FormBuilder) {
    this.formReg = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required],
    });
  }

  onSubmitReg() {
    if(this.formReg.valid) {
      console.log(this.formReg.value);
    }
  }
}
