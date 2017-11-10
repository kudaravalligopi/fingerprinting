import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureSourceComponent } from './configure-source.component';

describe('ConfigureSourceComponent', () => {
  let component: ConfigureSourceComponent;
  let fixture: ComponentFixture<ConfigureSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
