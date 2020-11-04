import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';
import User  from '../../../models/User';
import { ApiProvider } from '../../../services/http';


@Component({
  selector: 'page-users-user',
  templateUrl: 'user.page.html',
  styleUrls: ['user.page.scss'],
})
export class UserPage {
  public loggedIn = false;
  public editMode = false;
  public addMode = false;
  public currentUser:User;
  public user: User = new User('', '' );

  constructor( 
    private UsersProvider:ApiProvider, 
    private router: Router) {
      const state = this.router.getCurrentNavigation().extras.state;
      this.user = (state && state.user) ? state.user : new User('', '' );
  }
 
  public async navigateToAddUser(){
    this.router.navigate(['users']);
  } 

  public async save(form: NgForm) {
    const editedUser = { ...form.value };
    const user = Object.assign(editedUser, this.user);
    if (form.valid) {
      if (user.id && user.id > 0) {
        this.UsersProvider.updateUser(user, true).then((data) => {
          this.router.navigate(['users']);
        });
      }
      else {
        this.UsersProvider.createUser(user, true).then((data) => {
          this.router.navigate(['users']);
        });
      }
    }
  } 

  public async cancel(){
    this.router.navigate(['users']);
  }

  async presentAlert() {
  }

  onLogin(form: NgForm) {
  }

}
