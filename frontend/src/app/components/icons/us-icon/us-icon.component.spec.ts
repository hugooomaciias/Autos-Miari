import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsIconComponent } from './us-icon.component';

describe('UsIconComponent', () => {
  let component: UsIconComponent;
  let fixture: ComponentFixture<UsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
