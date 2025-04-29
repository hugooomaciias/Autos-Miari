import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineIconComponent } from './engine-icon.component';

describe('EngineIconComponent', () => {
  let component: EngineIconComponent;
  let fixture: ComponentFixture<EngineIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
