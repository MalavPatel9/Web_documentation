import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWorkflowComponent } from './smart-workflow.component';

describe('SmartWorkflowComponent', () => {
  let component: SmartWorkflowComponent;
  let fixture: ComponentFixture<SmartWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartWorkflowComponent]
    });
    fixture = TestBed.createComponent(SmartWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
