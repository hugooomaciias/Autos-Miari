import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { BrandIconComponent } from "../../../components/icons/brand-icon/brand-icon.component";
import { TagIconComponent } from "../../../components/icons/tag-icon/tag-icon.component";
import { EngineIconComponent } from "../../../components/icons/engine-icon/engine-icon.component";
import { FuelIconComponent } from "../../../components/icons/fuel-icon/fuel-icon.component";
import { CarIconComponent } from "../../../components/icons/car-icon/car-icon.component";
import { ColorIconComponent } from "../../../components/icons/color-icon/color-icon.component";
import { CalendarIconComponent } from "../../../components/icons/calendar-icon/calendar-icon.component";
import { KmIconComponent } from "../../../components/icons/km-icon/km-icon.component";
import { EuroBagIconComponent } from "../../../components/icons/euro-bag-icon/euro-bag-icon.component";
import { FinalidadIconComponent } from "../../../components/icons/finalidad-icon/finalidad-icon.component";
import { TrashIconComponent } from "../../../components/icons/trash-icon/trash-icon.component";

@Component({
  selector: 'app-eliminar',
  imports: [CommonModule, ReactiveFormsModule, Boton2Component, BrandIconComponent, TagIconComponent, EngineIconComponent, FuelIconComponent, CarIconComponent, ColorIconComponent, CalendarIconComponent, KmIconComponent, EuroBagIconComponent, FinalidadIconComponent, TrashIconComponent],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.scss'
})
export class EliminarComponent {
  formEli: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.formEli = this.fb.group({
      marca: ['', [Validators.required]],
      modelo: ['', Validators.required],
      transmision: ['', Validators.required],
      combustible: ['', Validators.required],
      tipo: ['', Validators.required],
      color: ['', Validators.required],
      fecha: ['', Validators.required],
      kilometraje: ['', Validators.required],
      precio: ['', Validators.required],
      finalidad: ['', Validators.required],
    });
  }
  
  onSubmitEli() {
    if(this.formEli.valid) {
      console.log(this.formEli.value);
    }
  }
}
