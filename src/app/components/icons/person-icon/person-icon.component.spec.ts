import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonIconComponent } from './person-icon.component';

describe('PersonIconComponent', () => {
  let component: PersonIconComponent;
  let fixture: ComponentFixture<PersonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
