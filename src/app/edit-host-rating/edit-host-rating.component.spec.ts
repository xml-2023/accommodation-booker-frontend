import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHostRatingComponent } from './edit-host-rating.component';

describe('EditHostRatingComponent', () => {
  let component: EditHostRatingComponent;
  let fixture: ComponentFixture<EditHostRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHostRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHostRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
