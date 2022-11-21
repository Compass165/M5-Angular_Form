import {Component, OnInit} from '@angular/core';
import {Account} from "../account";
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor() {
  }

  ngOnInit(): void {
  }

  accounts: Account[] = [{
    account: "phong",
    password: "123456"
  }]

  loginForm = new FormGroup({
    account: new FormGroup("", [Validators.required, Validators.minLength(3)]),
    password: new FormGroup("", [Validators.required, Validators.minLength(3)]),
  })

  check() {
    console.log("kiem tra ti")
  }

  get account() {
    return this.loginForm.get('account')
  }

  get password() {
    return this.loginForm.get('password')
  }

}
