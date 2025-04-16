import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonIconComponent } from "../../../components/icons/person-icon/person-icon.component";
import { MailIconComponent } from "../../../components/icons/mail-icon/mail-icon.component";
import { CommentIconComponent } from "../../../components/icons/comment-icon/comment-icon.component";
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { InfoIconComponent } from "../../../components/icons/info-icon/info-icon.component";
import { StarIconComponent } from "../../../components/icons/support-icon/star-icon/star-icon.component";
import { FlagIconComponent } from "../../../components/icons/flag-icon/flag-icon.component";
import { SendIconComponent } from "../../../components/icons/send-icon/send-icon.component";

@Component({
  selector: 'app-formulario-c',
  imports: [CommonModule, ReactiveFormsModule, PersonIconComponent, MailIconComponent, CommentIconComponent, Boton2Component, InfoIconComponent, StarIconComponent, FlagIconComponent, SendIconComponent],
  templateUrl: './formulario-c.component.html',
  styleUrl: './formulario-c.component.scss'
})
export class FormularioCComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      type: ['', Validators.required],
      priority: ['media', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value);
    }
  }
}
