import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterControlAComponent } from './filter-control-a.component';

describe('FilterControlAComponent', () => {
  let component: FilterControlAComponent;
  let fixture: ComponentFixture<FilterControlAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterControlAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterControlAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
