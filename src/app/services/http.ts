import { Injectable } from '@angular/core';

import User from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class ApiProvider {
    public API_URL = "https://nodejsappapi.herokuapp.com";
    public headers = {
        "Content-Type": "text/plain"
    };

    public async post(destination: string, body: any) {
        const result = await fetch(`${this.API_URL}${destination}`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        });
        // console.log({ result: result, body: result.body });

        if (result.ok) {
            const response = result.json();
            return response;
        }
        throw { error: result.status };
    };

    public getUsers = (useApi: boolean = true) => {
        // console.log({'Login': {email: email, password:password, useApi: useApi}});
        if (useApi) {
            const body = {};
            return this.post('/users/getUsers', body);
        }
        else {
            return this.mockSuccess(Array<User>());
        }
    };

    public createUser = (email: string, password: string, useApi: boolean = true) => {
        console.log({ 'Login': { email: email, password: password, useApi: useApi } });
        if (useApi) {
            if ((email && email !== '') && (password && password !== '')) {
                const body = {
                    "user": {
                        user_login: email, user_pass: password, user_nicename: password, user_email: email, display_name: email,
                        user_status: 1, user_registered: 1, user_url: '', user_activation_key: '', spam: 0,
                        deleted: 0, site_id: 1
                    }
                };
                return this.post('/users/createUser', body);
                //return mockSuccess({ auth_token: 'Login Api - Success!' });
            }
            else {
                return this.mockFailure({ error: 500, message: 'Login Api - Failure' });
            }
        }
        else {
            return this.mockFailure({ error: 500, message: 'Login - Failure' });
        }
    };

    public mockSuccess = (value: any) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(value), 2000);
        });
    };

    public mockFailure = (value: any) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject(value), 2000);
        });
    };

}

