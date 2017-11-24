import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputCurateComponent } from './output-curate.component';

describe('OutputCurateComponent', () => {
  let component: OutputCurateComponent;
  let fixture: ComponentFixture<OutputCurateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputCurateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputCurateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
