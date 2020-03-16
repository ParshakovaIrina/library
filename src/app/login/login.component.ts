import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../login/login.service";
import {MyUser} from "../interfaces/MyUser";
import {ActivatedRoute, Router} from '@angular/router';

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
  errorUser: boolean = true;
  chekLogin: boolean = true;
  goodUser: boolean = false;

  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router) {
    this._createForm();
  }

  private _createForm(): void {
    this.userForm = new FormGroup({
      id: new FormControl(null),
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      role: new FormControl(null),
    });
  }


  ClickRegistration(): void {
    this.buttonName = "Register";
    this.chekLogin = true;
  }

  ClickLogin(): void {
    this.buttonName = "Login";
    this.errorUser = true;
    this.goodUser = false;
  }

  requestServer(): void {
    this.userForm.value.role = "user";
    this.buttonName === "Login" ? this.loginService.login(this.userForm.value).subscribe((newUser: MyUser) => {
      this.user = newUser;
      if (this.user == null) {
        this.chekLogin = false;
      } else {
        this.router.navigate(["books", this.user.id]);
      }

    }) : this.loginService.register(this.userForm.value).subscribe((chekUser: boolean) => {
      this.errorUser = chekUser;
      this.goodUser = chekUser;
    });

    // //this.loginService.register(this.userForm.value).subscribe((newUser: MyUser) => {
    //   this.user = newUser;
    // });
  }

  ngOnInit() {
    this.buttonName = "Login";
  }
}
