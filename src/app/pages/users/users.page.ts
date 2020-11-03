import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';
import User  from '../../models/User';
import { ApiProvider } from '../../services/http';


@Component({
  selector: 'page-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss'],
})
export class UsersPage {
  public loggedIn = false;
  public users: Array<User> = [];

  constructor( 
    private UsersProvider:ApiProvider, 
    private router: Router) {
    this.UsersProvider.getUsers().then((data) =>{
      this.users = data;
      console.log({users: data});
    });
  }
 
  addUserButton() {
    console.log({users: this.router})
    this.router.navigate(['users']);
  } 

  ionViewWillEnter() {
    // disable the root left menu when entering this page
  }

  async presentAlert() {
  }

  onLogin(form: NgForm) {
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
