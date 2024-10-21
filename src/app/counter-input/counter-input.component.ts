import { Component, OnInit } from '@angular/core';
import {forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-counter-input',
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
  ],
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit() {
  }

   //@Input() 
   _counterValue = 0; // notice the '_'
  

  get counterValue() {
    console.log('get counterValue()');
    return this._counterValue;
  }

  set counterValue(val) {
    console.log('set counterValue(val), val='+val);
    this._counterValue = val;
    //this.propagateChange(-100); can test this to see result
    this.propagateChange(this._counterValue);
  }

  increment() {
    console.log('increment(), before this.counterValue++');
    this.counterValue++;
    console.log('increment(), after this.counterValue++');
  }

  decrement() {
    this.counterValue--;
  }

  writeValue(value: any) {
    console.log('writeValue(value: any), value='+value);
    if (value !== undefined) {
      this.counterValue = value;
    }
  }

  propagateChange = (_: any) => {};
  

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

}
