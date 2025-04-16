import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCComponent } from './hero-cook.component';

describe('HeroCComponent', () => {
  let component: HeroCComponent;
  let fixture: ComponentFixture<HeroCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
