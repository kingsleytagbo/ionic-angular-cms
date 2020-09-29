import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 public loggedIn = false;
  constructor() {}

  public features = [
    { val: 'Components', isChecked: true },
    { val: 'Authentication', isChecked: false },
    { val: 'Data Access', isChecked: false },
    { val: 'Filtering', isChecked: false },
    { val: 'Searching', isChecked: false },
    { val: 'Sorting', isChecked: false },
    { val: 'User Management', isChecked: false },
    { val: 'Roles & Permissions Management', isChecked: false },
  ];

}
