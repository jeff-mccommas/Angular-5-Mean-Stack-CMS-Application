import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../services/user.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginFailed: boolean = false;
    public userRegistered: boolean = false;

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    ngOnInit() {
        if (localStorage.getItem("user")) this.router.navigateByUrl('');

        if (localStorage.getItem("userRegistered")) {
            this.userRegistered = true;
            localStorage.removeItem("userRegistered");
        }
    }

    login({ value, valid }) {
        if (valid) {
            this.userService.login(value).subscribe(res => {
                if (res == 'invalidLogin') {
                    this.loginFailed = true;
                    setTimeout(function () {
                        this.loginFailed = false;
                    }.bind(this), 2000);
                } else {
                    localStorage.setItem("user", JSON.stringify(res));
                    if (localStorage.getItem("user") === "\"admin\"") {
                        this.router.navigateByUrl('admin/pages');
                    } else {
                        this.router.navigateByUrl('');
                    }
                }
            });
        } else {
            console.log('Form is not valid.');
        }
    }


}
