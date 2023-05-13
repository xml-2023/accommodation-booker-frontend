import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostSidebarComponent } from './host-sidebar.component';

describe('HostSidebarComponent', () => {
  let component: HostSidebarComponent;
  let fixture: ComponentFixture<HostSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
