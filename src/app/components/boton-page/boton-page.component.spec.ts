import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPageComponent } from './boton-page.component';

describe('BotonPageComponent', () => {
  let component: BotonPageComponent;
  let fixture: ComponentFixture<BotonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
