import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User  from '../../models/User';
import { ApiProvider } from '../../services/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 public loggedIn = false;

 constructor( 
   private router: Router) {
 }

 addUserButton() {
   this.router.navigate(['users']);
 }

  public features = [
    { val: 'Data Access', isChecked: false ,color:'info' },
    { val: 'Filtering', isChecked: false ,color:'secondary' },
    { val: 'Components', isChecked: true ,color:'success' },
    { val: 'Searching', isChecked: false ,color:'secondary' },
    { val: 'Sorting', isChecked: false ,color:'dark' },
    { val: 'Authentication', isChecked: false ,color:'info' },
    { val: 'User Management', isChecked: false ,color:'warning' },
    { val: 'Roles & Permissions', isChecked: false ,color:'danger' },
  ];

}
