import { Component, OnInit } from '@angular/core';
import { forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter-input2',
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInput2Component),
      multi: true
    }
  ],
  templateUrl: './counter-input2.component.html',
  styleUrls: ['./counter-input2.component.css']
})
export class CounterInput2Component implements OnInit, ControlValueAccessor{

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
    this.propagateChange(this.randomFromCounter2(), this._counterValue);
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

  propagateChange = (_: any, x:any) => {};
  

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  randomFromCounter2():string{
    return 'randomFromCounter2, ' + Math.floor(Math.random() * 100) + 1;
  }

}
