import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevromDownIconComponent } from './chevrom-down-icon.component';

describe('ChevromDownIconComponent', () => {
  let component: ChevromDownIconComponent;
  let fixture: ComponentFixture<ChevromDownIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevromDownIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChevromDownIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
