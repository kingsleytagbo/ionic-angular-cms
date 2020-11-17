import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/app/models/User';
import { ApiProvider } from '../../services/http';

@Component({
  selector: 'page-edituser',
  templateUrl: 'edituser.html',
  styleUrls: ['edituser.scss'],
})
export class EditUser{
  @Input('user') user: User;
  isValid = true;
  constructor(     private UsersProvider:ApiProvider,     public router: Router) { 
    this.user = new User('', '');
  }
  onLogin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    const user = new User(username, password);
    const body = {
      "login": {
        "username": username,
        "password": password
      }
    };
    this.UsersProvider.post('/login', body).then((login) =>{
      console.log({user:user, login:login});
      if(login.authenticated){
        this.router.navigateByUrl('/users');
      }
    });
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
