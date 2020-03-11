import {Component, Input, OnInit} from '@angular/core';
import {MyUser} from "../interfaces/MyUser";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.less']
})
export class EditUserComponent implements OnInit {
  @Input() user: MyUser;
  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }
  editValue(login: string, event: MouseEvent): void{
    event.stopPropagation();
    console.log(login);
  }
}
