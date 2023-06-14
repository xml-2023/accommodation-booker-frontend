import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccommodationRatingComponent } from './edit-accommodation-rating.component';

describe('EditAccommodationRatingComponent', () => {
  let component: EditAccommodationRatingComponent;
  let fixture: ComponentFixture<EditAccommodationRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccommodationRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAccommodationRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
