import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  }
  
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;
  showUserForm = false;
  @ViewChild('userForm') form: any;


  constructor() {}

  // lifecycle method
  ngOnInit() {

      this.users = [
      {
        firstName: 'Janusz',
        lastName: 'Nowak',
        email: 'janusz@gmail.com',
        isActive: true,
        registered: new Date('10/03/2018 15:00:00'),
        hide: true
      },
      {
        firstName: 'Krystyna',
        lastName: 'Czubówna',
        email: 'krysia@gmail.com',
        isActive: false,
        registered: new Date('01/07/2018 21:14:00'),
        hide: true
      },
      {
        firstName: 'Adam',
        lastName: 'Zielony',
        email: 'adam@gmail.com',
        isActive: true,
        registered: new Date('12/04/2017 12:03:00'),
        hide: true
      }
    ];

    this.loaded = true;

    
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }

  // }


  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
     

      this.users.unshift(value);

      this.form.reset();
    }
  }

  fireEvent(e) {
    console.log(e.target.value);
    console.log(e.type);
  }

}
