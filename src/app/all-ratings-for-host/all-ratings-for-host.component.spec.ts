import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRatingsForHostComponent } from './all-ratings-for-host.component';

describe('AllRatingsForHostComponent', () => {
  let component: AllRatingsForHostComponent;
  let fixture: ComponentFixture<AllRatingsForHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRatingsForHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRatingsForHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
