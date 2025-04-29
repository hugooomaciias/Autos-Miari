import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasaTuCocheComponent } from './tasa-tu-coche.component';

describe('TasaTuCocheComponent', () => {
  let component: TasaTuCocheComponent;
  let fixture: ComponentFixture<TasaTuCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasaTuCocheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasaTuCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
