import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCounterComponent } from './current-counter.component';

describe('CurrentCounterComponent', () => {
  let component: CurrentCounterComponent;
  let fixture: ComponentFixture<CurrentCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentCounterComponent]
    });
    fixture = TestBed.createComponent(CurrentCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
