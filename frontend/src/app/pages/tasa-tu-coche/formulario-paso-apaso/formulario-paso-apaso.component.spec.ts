import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPasoAPasoComponent } from './formulario-paso-apaso.component';

describe('FormularioPasoAPasoComponent', () => {
  let component: FormularioPasoAPasoComponent;
  let fixture: ComponentFixture<FormularioPasoAPasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPasoAPasoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPasoAPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
