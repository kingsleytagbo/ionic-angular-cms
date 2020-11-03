import { Component } from '@angular/core';

@Component({
  selector: 'users-home',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss'],
})
export class UsersPage {
 public loggedIn = false;
  constructor() {}

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
