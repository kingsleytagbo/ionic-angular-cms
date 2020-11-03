import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';
import User from 'src/app/models/User';
import { ApiProvider } from '../../services/http';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss'],
})
export class LoginPage {
  login: any = { username: '', password: '' };
  submitted = false;
  isValid = true;
  public loggedIn = false;
  loginSubscription = new Subscription();

  constructor(
    public router: Router,
    public alert: AlertController,
    public menu: MenuController,
    private UsersProvider:ApiProvider, 
  ) {
  }

  ngOnDestroy() {
  }

  ionViewWillEnter() {
    // disable the root left menu when entering this page
    this.menu.enable(false);
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Login',
      subHeader: 'Error',
      message: 'Your username or password is incorrect!',
      buttons: ['OK']
    });

    await alert.present();
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
