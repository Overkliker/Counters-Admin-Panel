import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateCounterComponent } from './dialog-create-counter.component';

describe('DialogCreateCounterComponent', () => {
  let component: DialogCreateCounterComponent;
  let fixture: ComponentFixture<DialogCreateCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreateCounterComponent]
    });
    fixture = TestBed.createComponent(DialogCreateCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
