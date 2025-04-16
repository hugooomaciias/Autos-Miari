import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Star2IconComponent } from './star2-icon.component';

describe('Star2IconComponent', () => {
  let component: Star2IconComponent;
  let fixture: ComponentFixture<Star2IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Star2IconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Star2IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
