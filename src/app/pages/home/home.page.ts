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
