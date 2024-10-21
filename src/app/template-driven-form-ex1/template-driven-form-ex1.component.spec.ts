import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormEx1Component } from './template-driven-form-ex1.component';

describe('TemplateDrivenFormEx1Component', () => {
  let component: TemplateDrivenFormEx1Component;
  let fixture: ComponentFixture<TemplateDrivenFormEx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormEx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
