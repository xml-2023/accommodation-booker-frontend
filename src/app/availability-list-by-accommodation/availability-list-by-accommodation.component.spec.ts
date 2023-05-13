import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityListByAccommodationComponent } from './availability-list-by-accommodation.component';

describe('AvailabilityListByAccommodationComponent', () => {
  let component: AvailabilityListByAccommodationComponent;
  let fixture: ComponentFixture<AvailabilityListByAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilityListByAccommodationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailabilityListByAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
