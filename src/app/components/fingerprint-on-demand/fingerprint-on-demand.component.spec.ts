import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintOnDemandComponent } from './fingerprint-on-demand.component';

describe('FingerprintOnDemandComponent', () => {
  let component: FingerprintOnDemandComponent;
  let fixture: ComponentFixture<FingerprintOnDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingerprintOnDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerprintOnDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
