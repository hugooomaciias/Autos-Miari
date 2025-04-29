import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAlquilarComponent } from './hero-alquilar.component';

describe('HeroAlquilarComponent', () => {
  let component: HeroAlquilarComponent;
  let fixture: ComponentFixture<HeroAlquilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAlquilarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAlquilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
