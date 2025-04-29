import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLComponent } from './hero-l.component';

describe('HeroLComponent', () => {
  let component: HeroLComponent;
  let fixture: ComponentFixture<HeroLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
