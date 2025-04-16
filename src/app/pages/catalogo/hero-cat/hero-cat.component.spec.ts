import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCatComponent } from './hero-cat.component';

describe('HeroCatComponent', () => {
  let component: HeroCatComponent;
  let fixture: ComponentFixture<HeroCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
