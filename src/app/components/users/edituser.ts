import { Component, Input, ViewEncapsulation } from '@angular/core';
import User from 'src/app/models/User';

@Component({
  selector: 'page-edituser',
  templateUrl: 'edituser.html',
  styleUrls: ['edituser.scss'],
})
export class EditUser{
  @Input('user') user: User;
  isValid = true;
  constructor( ) { 
    this.user = new User('', '');
  }

}
