import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSComponent } from './hero-s.component';

describe('HeroSComponent', () => {
  let component: HeroSComponent;
  let fixture: ComponentFixture<HeroSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
