import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIndicationsChartComponent } from './my-indications-chart.component';

describe('MyIndicationsChartComponent', () => {
  let component: MyIndicationsChartComponent;
  let fixture: ComponentFixture<MyIndicationsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyIndicationsChartComponent]
    });
    fixture = TestBed.createComponent(MyIndicationsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
