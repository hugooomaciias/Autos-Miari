import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsVComponent } from './cards-v.component';

describe('CardsVComponent', () => {
  let component: CardsVComponent;
  let fixture: ComponentFixture<CardsVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
