import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandIconComponent } from '../../../components/icons/brand-icon/brand-icon.component';
import { TagIconComponent } from '../../../components/icons/tag-icon/tag-icon.component';
import { CalendarIconComponent } from '../../../components/icons/calendar-icon/calendar-icon.component';
import { KmIconComponent } from '../../../components/icons/km-icon/km-icon.component';
import { FuelIconComponent } from '../../../components/icons/fuel-icon/fuel-icon.component';
import { EngineIconComponent } from '../../../components/icons/engine-icon/engine-icon.component';
import { CommonModule } from '@angular/common';
import { StarIconComponent } from '../../../components/icons/support-icon/star-icon/star-icon.component';
import { Boton2Component } from "../../../components/boton2/boton2.component";
import { CheckIconComponent } from "../../../components/icons/check-icon/check-icon.component";
import { DoorIconComponent } from '../../../components/icons/door-icon/door-icon.component';
import { ChevromDownIconComponent } from "../../../components/icons/chevrom-down-icon/chevrom-down-icon.component";

// Define fuera de la clase
type StepKey = 'brand' | 'model' | 'fuel' | 'power' | 'doors' | 'mileage' | 'date' | 'condition';

@Component({
  selector: 'app-formulario-paso-apaso',
  imports: [CommonModule, ReactiveFormsModule, Boton2Component, CheckIconComponent, ChevromDownIconComponent],
  templateUrl: './formulario-paso-apaso.component.html',
  styleUrl: './formulario-paso-apaso.component.scss'
})
export class FormularioPasoAPasoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      fuel: ['', Validators.required],
      power: ['', Validators.required],
      doors: ['', Validators.required],
      mileage: ['', Validators.required],
      date: [null, Validators.required],
      condition: ['', Validators.required]
    });
  }
  
  steps: Record<StepKey, boolean> = {
    brand: true,
    model: false,
    fuel: false,
    power: false,
    doors: false,
    mileage: false,
    date: false,
    condition: false
  };

  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value);
    }
  }

  stepsData: {
    key: StepKey;
    label: string;
    icon: any;
    placeholder?: string;
    type?: string;
    condition?: (val: string) => boolean;
    isSelect: boolean;
    options?: string[];
    min?: number;
    max?: number;
    step?: number;
    next?: StepKey | null;
  }[] = [
    {
      key: 'brand',
      label: 'Marca',
      icon: BrandIconComponent,
      placeholder: 'Introduce la marca del vehículo (e.g., Toyota)',
      isSelect: false,
      condition: (val: string) => val.length >= 2,
      next: 'model'
    },
    {
      key: 'model',
      label: 'Modelo',
      icon: TagIconComponent,
      placeholder: 'Introduce el modelo del vehículo (e.g., Camry)',
      type: 'text',
      condition: (val: string) => val.length >= 2,
      isSelect: false,
      next: 'fuel'
    },
    {
      key: 'fuel',
      label: 'Tipo de combustible',
      icon: FuelIconComponent,
      isSelect: true,
      options: ['Gasolina', 'Diesel'],
      next: 'power'
    },
    {
      key: 'power',
      label: 'Potencia',
      icon: EngineIconComponent,
      placeholder: 'Introduce la potencia del vehículo (e.g., 160 CV)',
      type: 'text',
      condition: (val: string) => val.length >= 2,
      isSelect: false,
      next: 'doors'
    },
    {
      key: 'doors',
      label: 'Número de puertas',
      icon: DoorIconComponent,
      placeholder: 'Introduce el número de puertas del vehículo (e.g., 5)',
      type: 'text',
      condition: (val: string) => val.length >= 2,
      isSelect: false,
      next: 'mileage'
    },
    {
      key: 'mileage',
      label: 'Kilometraje',
      icon: KmIconComponent,
      placeholder: 'Introduce el kilometraje del vehículo (e.g., 45.000 kmx)',
      condition: (val: string) => val.length >= 2,
      type: 'text',
      isSelect: false,
      next: 'date'
    },
    {
      key: 'date',
      label: 'Fecha de matriculación',
      icon: CalendarIconComponent,
      placeholder: 'Introduce la fecha de matriculación del vehículo (e.g., 02/05/2010)',
      type: 'date',
      isSelect: false,
      condition: (val: string) => val.length === 4,
      max: new Date().getFullYear(),
      next: 'condition'
    },
    {
      key: 'condition',
      label: 'Estado del vehículo',
      icon: StarIconComponent,
      options: ['Excelente', 'Buena', 'Regular', 'Mala', 'Deficiente'],
      isSelect: true,
    }
  ];

  openNextStep(key: StepKey) {
    if (key in this.steps) {
      this.steps[key] = true;
    }
  }
}
