import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonIconComponent } from '../../../components/icons/person-icon/person-icon.component';
import { MailIconComponent } from '../../../components/icons/mail-icon/mail-icon.component';
import { CommonModule } from '@angular/common';
import { PhoneIconComponent } from "../../../components/icons/phone-icon/phone-icon.component";
import { TimeIconComponent } from "../../../components/icons/time-icon/time-icon.component";
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { VisitIconComponent } from "../../../components/icons/visit-icon/visit-icon.component";
import { CommentIconComponent } from "../../../components/icons/comment-icon/comment-icon.component";


@Component({
  selector: 'app-formulario-v',
  imports: [CommonModule, ReactiveFormsModule, PersonIconComponent, MailIconComponent, PhoneIconComponent,
            TimeIconComponent, Boton2Component, VisitIconComponent, CommentIconComponent],
  templateUrl: './formulario-v.component.html',
  styleUrl: './formulario-v.component.scss'
})
export class FormularioVComponent {
  form: FormGroup;
  availableTimes: string[] = ['10:00', '11:00', '14:00', '16:30']
  availableServices: string[] = ['Probar un vehículo', 'Hacer una consulta sobre una venta', 'Servicio de vehículos', 'Otro']
  selectedDate: Date | null = null;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      service: ['', Validators.required],
      date: [null, Validators.required],
      time: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value);
    }
  }
}
