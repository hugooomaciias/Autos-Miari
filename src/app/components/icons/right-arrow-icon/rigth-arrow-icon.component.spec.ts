import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthArrowIconComponent } from './rigth-arrow-icon.component';

describe('RigthArrowIconComponent', () => {
  let component: RigthArrowIconComponent;
  let fixture: ComponentFixture<RigthArrowIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigthArrowIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigthArrowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
