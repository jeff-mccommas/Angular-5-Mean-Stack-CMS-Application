// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    // constructor(private http: Http) { }
    constructor(private http: HttpClient) { }

    register(user) {
        // return this.http.post('http://localhost:3000/users/register', user)
        //     .map(res => res.json());
        return this.http.post('http://localhost:3000/users/register', user);
    }

    login(user) {
        // return this.http.post('http://localhost:3000/users/login', user)
        //     .map(res => res.json());
        return this.http.post('http://localhost:3000/users/login', user);
    }

}
