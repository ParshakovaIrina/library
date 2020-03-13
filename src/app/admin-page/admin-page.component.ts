import {Component, OnInit} from '@angular/core';
import {AdminService} from "../admin-page/admin.service";
import {MyUser} from "../interfaces/MyUser";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent implements OnInit {
  users: MyUser[];
  selectedUser: MyUser;

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.adminService.getUsers()
      .subscribe((users: MyUser[]) => {
        this.users = users;
        console.log(this.users);
      });
  }

  _editUser(selectedUser: MyUser): void {
    if (selectedUser.selected) {
      selectedUser.selected = false;
    } else {
      this.users.forEach((user: MyUser) => user.selected = false);
      selectedUser.selected = true;
    }
  }
}
