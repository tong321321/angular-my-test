import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterInput2Component } from './counter-input2.component';

describe('CounterInput2Component', () => {
  let component: CounterInput2Component;
  let fixture: ComponentFixture<CounterInput2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterInput2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
