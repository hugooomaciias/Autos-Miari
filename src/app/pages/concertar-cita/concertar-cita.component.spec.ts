import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertarCitaComponent } from './concertar-cita.component';

describe('ConcertarCitaComponent', () => {
  let component: ConcertarCitaComponent;
  let fixture: ComponentFixture<ConcertarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertarCitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
