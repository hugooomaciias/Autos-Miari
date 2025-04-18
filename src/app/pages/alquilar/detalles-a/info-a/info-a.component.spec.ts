import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAComponent } from './info-a.component';

describe('InfoAComponent', () => {
  let component: InfoAComponent;
  let fixture: ComponentFixture<InfoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
