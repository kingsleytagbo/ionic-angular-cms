import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UsersPage } from './users.page';
import { UsersPageRoutingModule } from './users-routing.module';

import { FooterModule } from '../../components/footer/footer.module';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
    FooterModule,
    HeaderModule
  ],
  declarations: [
    UsersPage,
  ]
})
export class UsersPageModule { }
