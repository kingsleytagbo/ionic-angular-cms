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

  constructor(private utility : UtilityProvider){}

  ngOnInit(){}

  public async login(){
    await this.utility.showToast(
      'Error', 
      'Login not implemented', 
    {position:'top', duration:10000, showCloseButton:true, closeButtonText:'OK', color:'danger'}).then(toast =>{
      toast.present();
    });
  }

}
