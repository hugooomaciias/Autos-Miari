import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselVehicleCardComponent } from './carrusel-vehicle-card.component';

describe('CarruselVehicleCardComponent', () => {
  let component: CarruselVehicleCardComponent;
  let fixture: ComponentFixture<CarruselVehicleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselVehicleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselVehicleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
