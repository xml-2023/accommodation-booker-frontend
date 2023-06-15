import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRatingsForAccommodationComponent } from './all-ratings-for-accommodation.component';

describe('AllRatingsForAccommodationComponent', () => {
  let component: AllRatingsForAccommodationComponent;
  let fixture: ComponentFixture<AllRatingsForAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRatingsForAccommodationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRatingsForAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
