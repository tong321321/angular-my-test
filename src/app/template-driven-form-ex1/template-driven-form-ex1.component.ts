import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-ex1',
  templateUrl: './template-driven-form-ex1.component.html',
  styleUrls: ['./template-driven-form-ex1.component.css'],
  providers: [],
})
export class TemplateDrivenFormEx1Component implements OnInit {
  count: number = 0;
  outerCounterValue: number = 10;
  outerCounterValue2: number = 10;
  test1: string = 'test1';
  test2: string = 'test2';
  randomInt: number = 0;

  constructor() { }

  ngOnInit() {
  }

  changeRandomInt(event: any): void {
    console.log('event=' + event);
    this.randomInt = Math.floor(Math.random() * 10000) + 1;
  }

}
