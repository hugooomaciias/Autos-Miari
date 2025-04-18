import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselAComponent } from './carrusel-a.component';

describe('CarruselAComponent', () => {
  let component: CarruselAComponent;
  let fixture: ComponentFixture<CarruselAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
