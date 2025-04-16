import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroVComponent } from './hero-v.component';

describe('HeroVComponent', () => {
  let component: HeroVComponent;
  let fixture: ComponentFixture<HeroVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
