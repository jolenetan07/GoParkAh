import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {

  isLogin = true;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin() {
    this.authService.login();
    this.router.navigateByUrl('/home/tabs/main');
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const usertype = form.value.usertype;

    const firstname = form.value.firstname;
    const lastname = form.value.lastname;
    const income = form.value.income;

    form.reset();
    console.log(email, password, usertype);
    console.log(firstname, lastname, income);
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}
