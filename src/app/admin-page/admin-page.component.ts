import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin-page/admin.service";
import {MyUser} from "../interfaces/MyUser";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent implements OnInit {
  users: MyUser;
  constructor(private adminService: AdminService) { }
  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.adminService.getUsers()
      .subscribe(users => this.users = users);
    console.log(this.users);
  }
}
