import { Component } from '@angular/core';
import User  from '../../models/User';
import { ApiProvider } from '../../services/http';

@Component({
  selector: 'users-home',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss'],
})
export class UsersPage {
 public loggedIn = false;
 public users: Array<User> = [];

  constructor( UsersProvider:ApiProvider) {
    UsersProvider.getUsers().then((data) =>{
      this.users = data;
      console.log({users: data});
    });
  }

  public features = [
    { val: 'Components', isChecked: true ,color:'success' },
    { val: 'Authentication', isChecked: false ,color:'info' },
    { val: 'Data Access', isChecked: false ,color:'info' },
    { val: 'Filtering', isChecked: false ,color:'secondary' },
    { val: 'Searching', isChecked: false ,color:'secondary' },
    { val: 'Sorting', isChecked: false ,color:'dark' },
    { val: 'User Management', isChecked: false ,color:'dark' },
    { val: 'Roles & Permissions Management', isChecked: false ,color:'dark' },
  ];

}
