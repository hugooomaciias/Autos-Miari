import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAComponent } from './hero-a.component';

describe('HeroAComponent', () => {
  let component: HeroAComponent;
  let fixture: ComponentFixture<HeroAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
