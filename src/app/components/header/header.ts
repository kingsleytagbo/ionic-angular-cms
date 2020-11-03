import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityProvider } from 'src/app/providers/UtilityProvider'

@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
})
export class Header implements OnInit{
  public loggedIn = false;

  constructor(private utility : UtilityProvider, private router:Router){}

  ngOnInit(){}

  public async navigateToLogin(){
    return this.router.navigateByUrl('login');
  }

  public async navigateToHome(){
    return this.router.navigateByUrl('home');
  }

}
