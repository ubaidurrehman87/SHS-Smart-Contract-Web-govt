import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalPropertiesComponent } from './approval-properties.component';

describe('ApprovalPropertiesComponent', () => {
  let component: ApprovalPropertiesComponent;
  let fixture: ComponentFixture<ApprovalPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
