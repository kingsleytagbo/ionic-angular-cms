
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class UtilityProvider{

    constructor( private toast: ToastController){}

    /**
     * A custom reusable toast message
     * Author: Kingsley Tagbo / https://github.com/kingsleytagbo
     * @param header: the header / title of your toast message 
     * @param message: the body or main content of your toast message 
     * @param overrideOptions: an object with options for customizing your toast, e.g. {position: 'bottom'} 
     */
    async showToast(header?: string, message?:string, overrideOptions?:any): Promise<HTMLIonToastElement>{
        const toastOptions = {header, message, position:'top', duration: 6000};
        const options = Object.assign(toastOptions, overrideOptions);
        const result = await this.toast.create(options);
        return result;
    }

}