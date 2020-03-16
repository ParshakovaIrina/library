import {Component, OnInit} from '@angular/core';
import {AdminService} from "../admin-page/admin.service";
import {MyUser} from "../interfaces/MyUser";
import {MyRouteService} from "../services/my-route.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.less']
})
export class AdminPageComponent implements OnInit {
  users: MyUser[];
  selectedUser: MyUser;
  idUser = this.route.snapshot.paramMap.get("idUser");

  constructor(private adminService: AdminService,
              private myRouteService: MyRouteService,
              private route: ActivatedRoute) {
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

  onChanged(users: MyUser[]) {
    this.users.forEach((user: MyUser) => user.selected = false);
    this.users = users;
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
