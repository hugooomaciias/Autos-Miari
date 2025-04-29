import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevromRightIconComponent } from './chevrom-right-icon.component';

describe('ChevromRightIconComponent', () => {
  let component: ChevromRightIconComponent;
  let fixture: ComponentFixture<ChevromRightIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevromRightIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChevromRightIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
