import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrityIconComponent } from './integrity-icon.component';

describe('IntegrityIconComponent', () => {
  let component: IntegrityIconComponent;
  let fixture: ComponentFixture<IntegrityIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrityIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrityIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
