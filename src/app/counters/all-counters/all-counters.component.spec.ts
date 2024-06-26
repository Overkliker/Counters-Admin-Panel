import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountersComponent } from './all-counters.component';

describe('AllCountersComponent', () => {
  let component: AllCountersComponent;
  let fixture: ComponentFixture<AllCountersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCountersComponent]
    });
    fixture = TestBed.createComponent(AllCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
