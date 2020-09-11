import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
})
export class Header implements OnInit{
  public loggedIn = false;

  ngOnInit(){}

}
