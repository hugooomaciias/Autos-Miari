import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarIcon2Component } from './car-icon2.component';

describe('CarIcon2Component', () => {
  let component: CarIcon2Component;
  let fixture: ComponentFixture<CarIcon2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarIcon2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarIcon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
