import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckNonProdComponent } from './health-check-non-prod.component';

describe('HealthCheckNonProdComponent', () => {
  let component: HealthCheckNonProdComponent;
  let fixture: ComponentFixture<HealthCheckNonProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthCheckNonProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCheckNonProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
