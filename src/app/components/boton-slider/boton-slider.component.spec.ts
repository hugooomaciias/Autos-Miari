import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSliderComponent } from './boton-slider.component';

describe('BotonSliderComponent', () => {
  let component: BotonSliderComponent;
  let fixture: ComponentFixture<BotonSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
