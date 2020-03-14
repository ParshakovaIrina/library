import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Book } from '../interfaces/book';
import {UpdateBookRequest} from "../interfaces/UpdateBookRequest";
import {RestService} from "../services/rest.service";
import {MyUser} from "../interfaces/MyUser";

@Injectable({
  providedIn: "root"
})

export class UserService {
  private baseUrl = "http://localhost:8080";
  constructor(private restService: RestService) { }

  updateUser(id: number, value: MyUser): Observable<MyUser[]> {
    return this.restService.put(`${this.baseUrl}/admin-page/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.restService.delete(`${this.baseUrl}/admin-page/${id}`);
  }

}
