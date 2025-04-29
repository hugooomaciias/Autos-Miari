import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlusIconComponent } from './user-plus-icon.component';

describe('UserPlusIconComponent', () => {
  let component: UserPlusIconComponent;
  let fixture: ComponentFixture<UserPlusIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPlusIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPlusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
