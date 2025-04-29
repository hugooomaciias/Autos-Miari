import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandIconComponent } from './hand-icon.component';

describe('HandIconComponent', () => {
  let component: HandIconComponent;
  let fixture: ComponentFixture<HandIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
