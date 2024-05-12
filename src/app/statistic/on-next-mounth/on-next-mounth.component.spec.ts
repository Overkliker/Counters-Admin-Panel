import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnNextMounthComponent } from './on-next-mounth.component';

describe('OnNextMounthComponent', () => {
  let component: OnNextMounthComponent;
  let fixture: ComponentFixture<OnNextMounthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnNextMounthComponent]
    });
    fixture = TestBed.createComponent(OnNextMounthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
