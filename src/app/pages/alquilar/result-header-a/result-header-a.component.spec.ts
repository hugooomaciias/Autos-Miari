import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultHeaderAComponent } from './result-header-a.component';

describe('ResultHeaderAComponent', () => {
  let component: ResultHeaderAComponent;
  let fixture: ComponentFixture<ResultHeaderAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultHeaderAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultHeaderAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
