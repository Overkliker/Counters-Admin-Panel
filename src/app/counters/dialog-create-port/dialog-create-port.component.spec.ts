import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreatePortComponent } from './dialog-create-port.component';

describe('DialogCreatePortComponent', () => {
  let component: DialogCreatePortComponent;
  let fixture: ComponentFixture<DialogCreatePortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreatePortComponent]
    });
    fixture = TestBed.createComponent(DialogCreatePortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
