import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {LoginService} from "../login/login.service";
import {Book} from "../interfaces/book";
import {MyUser} from "../interfaces/MyUser";

export type ButtonName = "Login" | "Register";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  buttonName: ButtonName;
  user: MyUser;

  constructor(private loginService: LoginService) {
    this._createForm();
  }

  private _createForm(): void {
    this.userForm = new FormGroup({
      id: new FormControl(null),
      login: new FormControl(null),
     password: new FormControl(null),
    });
  }

  toggleMode() {
    this.buttonName === "Login" ? this.buttonName = "Register" : this.buttonName = "Login";
  }

  requestServer(): void {
   // console.dir(this.buyTicketForm.value);
    //this.buttonName === "Login" ? this.loginService.login() : this.loginService.register(this.userForm.value);
    this.loginService.register(this.userForm.value).subscribe((newUser: MyUser) => {
      this.user = newUser;
    });
  }
  ngOnInit() {
    this.buttonName = "Login";
  }
}
