import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroIconComponent } from './euro-icon.component';

describe('EuroIconComponent', () => {
  let component: EuroIconComponent;
  let fixture: ComponentFixture<EuroIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuroIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuroIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
