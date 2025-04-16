import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonMobileComponent } from './boton-mobile.component';

describe('BotonMobileComponent', () => {
  let component: BotonMobileComponent;
  let fixture: ComponentFixture<BotonMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
