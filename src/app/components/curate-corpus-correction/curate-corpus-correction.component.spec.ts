import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurateCorpusCorrectionComponent } from './curate-corpus-correction.component';

describe('CurateCorpusCorrectionComponent', () => {
  let component: CurateCorpusCorrectionComponent;
  let fixture: ComponentFixture<CurateCorpusCorrectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurateCorpusCorrectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurateCorpusCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
