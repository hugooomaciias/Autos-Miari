import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTComponent } from './hero-t.component';

describe('HeroTComponent', () => {
  let component: HeroTComponent;
  let fixture: ComponentFixture<HeroTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
