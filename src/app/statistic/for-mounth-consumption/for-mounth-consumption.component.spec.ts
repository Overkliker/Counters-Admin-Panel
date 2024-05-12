import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForMounthConsumptionComponent } from './for-mounth-consumption.component';

describe('ForMounthConsumptionComponent', () => {
  let component: ForMounthConsumptionComponent;
  let fixture: ComponentFixture<ForMounthConsumptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForMounthConsumptionComponent]
    });
    fixture = TestBed.createComponent(ForMounthConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
