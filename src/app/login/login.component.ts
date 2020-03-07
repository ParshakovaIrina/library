import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {colors} from "@angular/cli/utilities/color";
import {LoginService} from "./login.service";

export type ButtonName = "Login" | "Register";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  buyTicketForm: FormGroup;
  buttonName: ButtonName;

  constructor(private loginService: LoginService) {
    this._createForm();
  }

  private _createForm(): void {
    this.buyTicketForm = new FormGroup({
      login: new FormControl(null),
     password: new FormControl(null),
    });
  }

  toggleMode() {
    this.buttonName === "Login" ? this.buttonName = "Register" : this.buttonName = "Login";
  }

  requestServer(): void {
   // console.dir(this.buyTicketForm.value);
    this.buttonName === "Login" ? this.loginService.login() : this.loginService.register();
  }

  ngOnInit() {
    this.buttonName = "Login";
  }
}
