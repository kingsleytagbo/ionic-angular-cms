import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UserPage } from './user.page';
import { UserPageRoutingModule } from './user-routing.module';

import { FooterModule } from '../../../components/footer/footer.module';
import { HeaderModule } from '../../../components/header/header.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    FooterModule,
    HeaderModule,
  ],
  declarations: [
    UserPage,
  ]
})
export class UserPageModule { }
