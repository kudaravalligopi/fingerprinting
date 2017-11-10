import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputFingerprintTableComponent } from './output-fingerprint-table.component';

describe('OutputFingerprintTableComponent', () => {
  let component: OutputFingerprintTableComponent;
  let fixture: ComponentFixture<OutputFingerprintTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputFingerprintTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputFingerprintTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
