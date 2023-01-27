import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinProcessComponent } from './checkin-process.component';

describe('CheckinProcessComponent', () => {
  let component: CheckinProcessComponent;
  let fixture: ComponentFixture<CheckinProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
