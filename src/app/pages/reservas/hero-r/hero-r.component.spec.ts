import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRComponent } from './hero-r.component';

describe('HeroRComponent', () => {
  let component: HeroRComponent;
  let fixture: ComponentFixture<HeroRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
