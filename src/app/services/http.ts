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

    public createUser = (user: User, useApi: boolean = true) => {
        if (useApi) {
            const body = {
                "user": user
            }
            return this.post('/users/createUser', body);

        }
        else {
            return this.mockFailure({ error: 500, message: 'Login - Failure' });
        }
    };

    public updateUser = (user: User, useApi: boolean = true) => {
        if (useApi) {
          const body = {
            "user": {
              user
            }
          };
          return this.post('/users/updateUser', body);
        }
        else {
          return this.mockFailure({ error: 500, message: 'updateUser - Failure' });
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

