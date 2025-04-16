import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasFrecComponent } from './preguntas-frec.component';

describe('PreguntasFrecComponent', () => {
  let component: PreguntasFrecComponent;
  let fixture: ComponentFixture<PreguntasFrecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntasFrecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasFrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
