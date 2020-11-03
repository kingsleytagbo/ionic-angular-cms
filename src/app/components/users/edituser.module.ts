import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import {EditUser } from './edituser';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    exports: [
        EditUser
    ],
    declarations: [
       EditUser
    ],
    entryComponents: [],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditUserModule { }
