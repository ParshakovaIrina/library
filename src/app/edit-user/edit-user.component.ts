import {Component, Input, OnInit} from '@angular/core';
import {MyUser} from "../interfaces/MyUser";
import {UserService} from "../edit-user/user.servise";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.less']
})
export class EditUserComponent implements OnInit {
  @Input() user: MyUser;
  userForm: FormGroup;
  constructor(private userService: UserService,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    console.log(this.user);
    this.userForm.setValue(this.user);
  }
  private createForm(): void {
    this.userForm = new FormGroup({
      id: new FormControl(null),
      login: new FormControl(null),
      password: new FormControl(null),
      role: new FormControl(null),
    });
  }
  // editValue( event: MouseEvent): void {
  //   event.stopPropagation();
  // }
  deleteUser(): void {
    console.log(this.user.id);
    this.userService.deleteUser(this.user.id)
      .subscribe(() => this.router.navigate(["books"]));
  }
  updateUser(): void {
    this.userService.updateUser(this.user.id, this.userForm.value).subscribe((user: MyUser) => {
    this.user = user;
    });
   // this.change(book);
}
}
