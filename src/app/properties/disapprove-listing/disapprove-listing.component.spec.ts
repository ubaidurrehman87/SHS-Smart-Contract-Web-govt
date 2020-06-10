import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisapproveListingComponent } from './disapprove-listing.component';

describe('DisapproveListingComponent', () => {
  let component: DisapproveListingComponent;
  let fixture: ComponentFixture<DisapproveListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisapproveListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisapproveListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
