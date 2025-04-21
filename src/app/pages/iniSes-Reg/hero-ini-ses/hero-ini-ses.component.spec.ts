import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIniSesComponent } from './hero-ini-ses.component';

describe('HeroIniSesComponent', () => {
  let component: HeroIniSesComponent;
  let fixture: ComponentFixture<HeroIniSesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroIniSesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroIniSesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
