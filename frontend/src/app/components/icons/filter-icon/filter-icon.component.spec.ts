import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterIconComponent } from './filter-icon.component';

describe('FilterIconComponent', () => {
  let component: FilterIconComponent;
  let fixture: ComponentFixture<FilterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
