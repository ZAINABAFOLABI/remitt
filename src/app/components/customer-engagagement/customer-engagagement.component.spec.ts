import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEngagagementComponent } from './customer-engagagement.component';

describe('CustomerEngagagementComponent', () => {
  let component: CustomerEngagagementComponent;
  let fixture: ComponentFixture<CustomerEngagagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEngagagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEngagagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
