import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterControlsCComponent } from './filter-controls-c.component';

describe('FilterControlsComponent', () => {
  let component: FilterControlsComponent;
  let fixture: ComponentFixture<FilterControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterControlsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
