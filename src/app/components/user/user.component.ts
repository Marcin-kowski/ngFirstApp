import { Component } from '@angular/core';
import { User } from '../models/User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']

  // template: '<h2>John Doe</h2>'
})
export class UserComponent {
  // Properties
  // Types in TS
  user: User;

  /*
  foo: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;
  */

  // Methods
  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: ''
    }
  };
  

  sayHello() {
    // console.log('Hello ' + ' ' + this.firstName);      old one
    console.log(`Hello ${this.user.firstName}`); // ES6 - $
  }
}



