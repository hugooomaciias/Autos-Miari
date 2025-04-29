import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBulbIconComponent } from './light-bulb-icon.component';

describe('LightBulbIconComponent', () => {
  let component: LightBulbIconComponent;
  let fixture: ComponentFixture<LightBulbIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightBulbIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightBulbIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
