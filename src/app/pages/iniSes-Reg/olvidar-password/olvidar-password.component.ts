import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailIconComponent } from "../../../components/icons/mail-icon/mail-icon.component";
import { KeyIconComponent } from "../../../components/icons/key-icon/key-icon.component";

@Component({
  selector: 'app-olvidar-password',
  imports: [CommonModule, ReactiveFormsModule, MailIconComponent, KeyIconComponent],
  templateUrl: './olvidar-password.component.html',
  styleUrl: './olvidar-password.component.scss'
})
export class OlvidarPasswordComponent {
  formPass: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formPass = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmitPass() {
    if(this.formPass.valid) {
      console.log(this.formPass.value);
    }
  }
}
