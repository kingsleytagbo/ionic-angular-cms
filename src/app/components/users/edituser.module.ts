import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { User } from './user';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    exports: [
        User
    ],
    declarations: [
       User
    ],
    entryComponents: [],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
