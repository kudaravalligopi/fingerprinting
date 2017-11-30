import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckProdComponent } from './health-check-prod.component';

describe('HealthCheckProdComponent', () => {
  let component: HealthCheckProdComponent;
  let fixture: ComponentFixture<HealthCheckProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthCheckProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCheckProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
