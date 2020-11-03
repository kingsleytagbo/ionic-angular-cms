import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UsersPage } from './users.page';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { UsersPageRoutingModule } from './users-routing.module';
import { EditUserModule } from '../../components/users/edituser.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    FooterModule,
    EditUserModule,
    UsersPageRoutingModule
  ],
  declarations: [UsersPage]
})
export class UsersPageModule {}
