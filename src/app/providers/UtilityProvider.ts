
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class UtilityProvider{

    constructor( private toast: ToastController){}

    async showToast(header?: string, message?:string, overrideOptions?:any): Promise<HTMLIonToastElement>{
        const toastOptions = {header, message, position:'top', duration: 6000};
        const options = Object.assign(toastOptions, overrideOptions);
        const result = await this.toast.create(options);
        return result;
    }

}