import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsetComponent } from './addset.component';

describe('AddsetComponent', () => {
  let component: AddsetComponent;
  let fixture: ComponentFixture<AddsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsetComponent]
    });
    fixture = TestBed.createComponent(AddsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
